(() => {
    // レスポンシブ(モバイルviewのみ適用)。↓
    const windowWidth = $(window).width();
    const windowMbi = 411;
    if (windowWidth <= windowMbi) {

        // 交差監視対象要素の取得。
        const total_tbl = document.querySelector(".container__total_wrap__tbl");
        // 更新ボタン移動先/移動前
        const total_wrap = document.querySelector(".container__total_wrap");
        const aft_mvUp = document.querySelector(".aft_mvUp");
        const bill_div = document.querySelector(".container__index__bill_div");
        const updateBtn = document.querySelector(".container__total_wrap__updatesend");

        const options = {
            root: null,
            rootMargin: "-80px"
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(total_tbl);

        function callback(entries, obsever) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    // console.log(!entry.isIntersecting);
                    // updateBtn.classList.add("mvUpdateBtn");
                    $(updateBtn).prependTo(aft_mvUp);
                    console.log(total_wrap.classList);
                    updateBtn.classList.toggle(".aft_mvUp__btn")
                    // aft_mvUp.insertAdjacentHTML("afterbegin", `
                    //     <input type="submit" class="aft_mvUp__btn"
                    //         id="updatesend" name="commit" value="更新" form="update">
                    // `);
                // }else{
                //     aft_mvUp.classList.remove("aft_mvUp__btn");
                //     console.log(aft_mvUp.classList);
                //     total_wrap.insertAdjacentHTML("beforeend", `
                //         <input type="submit" class="container__total_wrap__updatesend"
                //             id="updatesend" name="commit" value="更新" form="update">
                //     `);
                }
            });
        }
    }

})();