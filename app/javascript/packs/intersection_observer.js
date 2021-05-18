(() => {
    // レスポンシブ(モバイルviewのみ適用)。↓
    const windowWidth = $(window).width();
    const windowMbi = 411;
    if (windowWidth <= windowMbi) {

        // 交差監視対象要素の取得。
        const total_tbl = document.querySelector(".container__total_wrap__tbl");
        // 更新ボタン移動先/移動前
        // const bill_tbl = document.querySelector(".container__index__bill_tbl");
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
                    updateBtn.classList.add("mvUpdateBtn");
                }else{
                    updateBtn.classList.remove("mvUpdateBtn");
                }
            });
        }
    }

})();