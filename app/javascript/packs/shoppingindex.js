$(function(){
  "use strict";
      var arySpinnerCtrl = [];
      var spin_speed = 20; // 長押し時の数値の変動スピード → 左は0.02秒
      //長押し押下時
      // var clickEventType = (( window.ontouchstart!==null ) ? 'click mousedown':'touchend mousedown');
      $('.btnspinner').on("click touchstart mousedown", function(e){  // "mousedown" は長押し用、 "click" は1個づつ用。
        if(arySpinnerCtrl['interval']) return false;
          var target = $(this).data('target'); // index.html.erb "btnspinner" から "data-target" の値を受け取り "target" へ格納。
          arySpinnerCtrl['target'] = target;
          arySpinnerCtrl['timestamp'] = e.timeStamp;
          arySpinnerCtrl['cal'] = Number($(this).data('cal')); // "cal" で取得したデータを "整数化" する。
          //クリックは単一の処理に留める
          if(e.type == "click"){ // イベントが "mousedown" "click" の内 "click" の方だと下記の処理。(※ 1個づつ増減処理をしたい時)
              // スピナーの値を更新
              spinnerCal();
              // 必要な要素の取得
              var unit_prices = document.getElementsByClassName("unit_price"); // 単価。
              var amounts = document.getElementsByClassName("amount"); // 個数。

              unit_prices = Array.from( unit_prices ); // 右辺: "unit_prices" の配列を取得し、左辺へ代入。
              // 必要な変数の初期化
              let total = 0;
              let count = 0; //リロードした状態を初期値として宣言。

              // 全ての商品の合計金額を求める
              unit_prices.forEach(unit_price => { // rails の each do のループ処理みたいな物。 "unit_price" にid全部価格が入る。
                total += parseInt(unit_price.dataset.price) * parseInt(amounts[count].value); // 単価 * 個数 を total へ加える。
                count++  // 配列要素の合計を1個づつプラスしていく。
              });

              // 合計金額の更新
                var total_price = document.getElementById("total_price");
                    total_price.innerText = total; 
                    // ↑↑ 迄が "click" イベントが1回でも発動すると自動で "＋1" 又は "-1" づつ増減されていく処理内容になる。

              // スピナーの初期化  
              arySpinnerCtrl = [];  // ← が 上記処理内容を一旦リセットする処理。(自動で増減され続けない様にする)
              return false;
          }
                  //長押し時の処理
          setTimeout(function(){ // ※ setTimeoutメソッドで定義してるのは "500"mm秒(0.5秒)後のカウント開始予約のみ。
            //インターバル未実行中 + 長押しのイベントタイムスタンプ一致時に計算処理
            if(!arySpinnerCtrl['interval'] && arySpinnerCtrl['timestamp'] == e.timeStamp){ // 長押しされてなくてかつ、arySpinnerCtrl['timestamp'] が e.timeStamp なら、下記定義。
              arySpinnerCtrl['interval'] = setInterval(spinnerCal, spin_speed);  // "interval" を定義する。← 処理が実行後は !arySpinnerCtrl['interval'](インターバル未実行)に反する為、
            }
          }, 500);
      });
      
      //長押し解除時 画面スクロールも解除に含む
      $(document).on('touchend mouseup', function(){ // 画面のどこだろうが、又は押しているボタンを離すと "長押し" が解除される。
        if(arySpinnerCtrl['interval']){
          clearInterval(arySpinnerCtrl['interval']);
          arySpinnerCtrl = [];
        }
      });

      //変動計算関数
      function spinnerCal(){ // クリックで単一増減の定義 (最小値・最大値 迄定義) したメソッド。
        var target = $(arySpinnerCtrl['target']);  //  arySpinnerCtrl['target'] == "btnspinner.dataset.target"　　※ $(arySpinnerCtrl['target']) →
        var num = Number(target.val()); // 個数フォーム内の値(増減押す直前迄の)を num に代入。※ target の中に id も含まれる。→ num の初期値になる。
            num += arySpinnerCtrl['cal'];
        if(num > 500){ // "max" → 500、 "個数フォーム" が500を超えると(増減ボタン)
            target.val(500); // ※ target val() → ()に個数の値が入る。 target val(500) となる。 500を超える数値は全て "500" となる。
        }else if(0 > num){
            target.val(0);
        }else{
            target.val(num); // target の val() に個数フォームの数値が格納される。
        }          
      };


      //リセット機能
      var updatesend = document.getElementById("updatesend");
      var resets = document.getElementsByClassName("reset");
        resets = Array.from(resets);
        resets.forEach(reset => {
          var from = reset.dataset.from;
          var rstnum = $(from).val();
            reset.addEventListener("click", () =>{
              reset.classList.toggle("aft_rst");
              if(reset.value == " 未 "){
                reset.value = " 済 ";
              }else if(reset.value !== " 未 "){
                reset.value = " 未 ";
            };
          });

          updatesend.addEventListener("click", () => {
              if(reset.value == " 済 " && rstnum > 0){
                $(from).val(0);
              }else if(reset.value == " 済 " && rstnum > 0){
                reset.value == " 未 ";
            };
          });

            if(rstnum == 0){
              reset.classList.toggle("aft_rst");
              reset.value = " 済 ";
              $(from).toggleClass("aft_counter");
            }
        });

        // daiso
        var daiso_s = document.getElementsByClassName("daiso");
            daiso_s = Array.from(daiso_s);
            daiso_s.forEach(daiso =>{
              var name = daiso.dataset.dsname;
                console.log(name);
                if(name){
                  daiso.classList.toggle("aft_daiso");
                }
            });




  });