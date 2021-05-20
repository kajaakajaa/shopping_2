$(function(){
  "use strict";
      var arySpinnerCtrl = [];
      var amounts = document.getElementsByClassName("amount"); // 個数。
          amounts = Array.from(amounts);

      $('.btnspinner').on("click touchstart mousedown", function(e){
        if(arySpinnerCtrl['interval']) return false;
          var target = $(this).data('target');
          arySpinnerCtrl['target'] = target;
          arySpinnerCtrl['timestamp'] = e.timeStamp;
          arySpinnerCtrl['cal'] = Number($(this).data('cal'));
          //クリックは単一の処理に留める
          if(e.type == "click"){
              // スピナーの値を更新
              spinnerCal();
              // 必要な要素の取得
              var unit_prices = document.getElementsByClassName("unit_price"); // 単価。

              unit_prices = Array.from( unit_prices );
              // 必要な変数の初期化
              let total = 0;
              let count = 0;

              // 全ての商品の合計金額を求める
              unit_prices.forEach(unit_price => {
                total += parseInt(unit_price.dataset.price) * parseInt(amounts[count].value); 
                count++ 
              });
              // 合計金額の更新
                var total_price = document.getElementById("total_price");
                    total_price.innerText = total; 

              // スピナーの初期化  
              arySpinnerCtrl = [];
              return false;
          }
        });

      //変動計算関数
      function spinnerCal(){
        var target = $(arySpinnerCtrl['target']);
        var num = Number(target.val());
            num += arySpinnerCtrl['cal'];
        if(num > 500){
            target.val(500);
        }else if(0 > num){
            target.val(0);
        }else{
            target.val(num);
        }          
      };


      //リセット機能
      let bill_total = 0;
      var updatesends = document.getElementsByClassName("updatesend");
      var resets = document.getElementsByClassName("reset");
        updatesends = Array.from(updatesends);
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
          // 条件分岐
          updatesends.forEach(updatesend => {
            updatesend.addEventListener("click", () => {
                if(reset.value == " 済 " && rstnum > 0){
                  $(from).val(0);
                }else if(reset.value == " 済 " && rstnum > 0){
                  reset.value == " 未 ";
              };
            });
          });

          if(rstnum == 0){
            reset.classList.toggle("aft_rst");
            reset.value = " 済 ";
            $(from).toggleClass("aft_counter");
          }


            // お会計機能
          var bill_sp = document.getElementById("bill_sp");
          var bill_val = reset.dataset.bill_val;
              reset.addEventListener("click", () =>{
                if(reset.value == " 済 " && rstnum > 0){
                  bill_total += parseInt(bill_val) * parseInt(rstnum);
                  console.log(bill_total);
                  bill_sp.innerText = bill_total;
                }else if(reset.value == " 未 "){
                  bill_total -= parseInt(bill_val) * parseInt(rstnum);
                  console.log(bill_total);
                  bill_sp.innerText = bill_total;
                }
            });
        });

        // "daiso" 表示機能
        var daiso_s = document.getElementsByClassName("daiso");
            daiso_s = Array.from(daiso_s);
            daiso_s.forEach(daiso =>{
              var name = daiso.dataset.dsname;
                if(name){
                  console.log(name);
                  daiso.classList.toggle("aft_daiso");
                }
            });
});