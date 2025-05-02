document.addEventListener('DOMContentLoaded', function () {
    const customSelects = document.querySelectorAll(".custom-select");

    for (let i = 0; i < customSelects.length; i++) {
        const select = customSelects[i];
        const selected = select.querySelector(".select-selected");
        const items = select.querySelector(".select-items");
        const options = items.querySelectorAll("li");

        selected.addEventListener("click", function (e) {
            e.stopPropagation();
            closeAllSelect(this);
            items.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });

        for (let j = 0; j < options.length; j++) {
            options[j].addEventListener("click", function (e) {
                e.stopPropagation();

                for (let k = 0; k < options.length; k++) {
                    options[k].classList.remove("same-as-selected");
                }

                this.classList.add("same-as-selected");

                selected.innerHTML = this.innerHTML;

                items.classList.add("select-hide");
                selected.classList.remove("select-arrow-active");
            });
        }
    }

    document.addEventListener("click", closeAllSelect);

    function closeAllSelect(element) {
        const selectItems = document.querySelector(".select-items");
        const selectSelected = document.querySelector(".select-selected");

        for (let i = 0; i < selectItems.length; i++) {
            if (element !== selectSelected[i] && element !== selectItems[i]) {
                selectItems[i].classList.add("select-hide");
                selectSelected[i].classList.remove("select-arrow-active");
            }
        }
    }
});