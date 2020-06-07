$(function(){
  "use strict";
      var arySpinnerCtrl = [];
      var spin_speed = 20; // 長押し時の数値の変動スピード → 左は0.02秒
      //長押し押下時
      $('.btnspinner').on('touchstart mousedown click', function(e){  // "mousedown" は長押し用、 "click" は1個づつ用。
        if(arySpinnerCtrl['interval']) return false;
          var target = $(this).data('target'); // index.html.erb "btnspinner" から "data-target" の値を受け取り "target" へ格納。
          arySpinnerCtrl['target'] = target;
          arySpinnerCtrl['timestamp'] = e.timeStamp;
          arySpinnerCtrl['cal'] = Number($(this).data('cal')); // "cal" で取得したデータを "整数化" する。
          //クリックは単一の処理に留める
          if(e.type == 'click'){ // イベントが "mousedown" "click" の内 "click" の方だと下記の処理。(※ 1個づつ増減処理をしたい時)
              // スピナーの値を更新
              spinnerCal();
              // 必要な要素の取得
              var unit_prices = document.getElementsByClassName("unit_price"); // 単価。
              var amounts = document.getElementsByClassName("amount"); // 個数。
              unit_prices = Array.from( unit_prices ) ; // 右辺: "unit_prices" の配列を取得し、左辺へ代入。
              // 必要な変数の初期化
              let total = 0;
              let count = 0;
              // 全ての商品の合計金額を求める
              unit_prices.forEach(function(unit_price) { // rails の each do のループ処理みたいな物。 "unit_price" にid全部価格が入る。
                total += parseInt(unit_price.dataset.price) * parseInt(amounts[count].value); // 単価 * 個数 を total へ加える。
                count++  // 1 づつプラスしていく。
              });
              // 合計金額の更新
              var total_td = document.getElementById("total_td")
              total_td.innerText = total + " 円"; // total_td を total が上書きする(total_td内の文字列"円"が消える)ので 新たに"円"　を加える。

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
      $(document).on('touchend mouseup scroll', function(){ // 画面のどこだろうが スクロールするか、又は押しているボタンを離すと "長押し" が解除される。
          if(arySpinnerCtrl['interval']){
            clearInterval(arySpinnerCtrl['interval']);
            arySpinnerCtrl = [];
          }
      });

      //変動計算関数
      function spinnerCal(){ // クリックで単一増減の定義 (最小値・最大値 迄定義) したメソッド。
          var target = $(arySpinnerCtrl['target']); // target = 各商品のidとそれらの個数のカウント処理。 <input> の counter値を取得してる。
          console.log((arySpinnerCtrl['target']));
          var num = Number(target.val()); // 個数フォーム内の値(増減押す直前迄の)を num に代入。※ target の中に id も含まれる。
          num += arySpinnerCtrl['cal'];
          if(num > 500){ // "max" → 500、 "個数フォーム" が500を超えると(増減ボタン)
              target.val(500); // ※ target val() → ()に個数の値が入る。 target val(500) となる。 500を超える数値は全て "500" となる。
          }else if(0 > num){
              target.val(0);
          }else{
              target.val(num);
          }
      }
  });