$(function(){
  "use strict";
      var arySpinnerCtrl = [];
      var spin_speed = 20; //変動スピード
      //長押し押下時
      $('.btnspinner').on('touchstart mousedown click', function(e){
          if(arySpinnerCtrl['interval']) return false;
          var target = $(this).data('target');
          arySpinnerCtrl['target'] = target;
          arySpinnerCtrl['timestamp'] = e.timeStamp;
          arySpinnerCtrl['cal'] = Number($(this).data('cal'));
          //クリックは単一の処理に留める
          if(e.type == 'click'){
              // スピナーの値を更新
              spinnerCal();
              // 必要な要素の取得
              var unit_prices = document.getElementsByClassName("unit_price"); // 単価。
              var amounts = document.getElementsByClassName("amount"); // 単価。
              unit_prices = Array.from( unit_prices ) ;
              // 必要な変数の初期化
              let total = 0;
              let count = 0;
              // 全ての商品の合計金額を求める
              unit_prices.forEach(function(unit_price) {
                  total += parseInt(unit_price.dataset.price) * parseInt(amounts[count].value);
                  count++
              });
              // 合計金額の更新
              var total_price = document.getElementById("total_price")
              total_price.innerText = total;
              // スピナーの初期化
              arySpinnerCtrl = [];
              return false;
          }
                  //長押し時の処理
        setTimeout(function(){
            //インターバル未実行中 + 長押しのイベントタイプスタンプ一致時に計算処理
            if(!arySpinnerCtrl['interval'] && arySpinnerCtrl['timestamp'] == e.timeStamp){
                arySpinnerCtrl['interval'] = setInterval(spinnerCal, spin_speed);
            }
        }, 500);
      });
      //長押し解除時 画面スクロールも解除に含む
      $(document).on('touchend mouseup scroll', function(e){
          if(arySpinnerCtrl['interval']){
              clearInterval(arySpinnerCtrl['interval']);
              arySpinnerCtrl = [];
          }
      });
      //変動計算関数
      function spinnerCal(){
          var target = $(arySpinnerCtrl['target']);
          var num = Number(target.val());
          num = num + arySpinnerCtrl['cal'];
          if(num > Number(target.data('max'))){
              target.val(Number(target.data('max')));
          }else if(Number(target.data('min')) > num){
              target.val(Number(target.data('min')));
          }else{
              target.val(num);
          }
      }
  });