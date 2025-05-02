document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('.news-section');
    const list = parent.querySelector('.news__cards-block');
    const items = list.querySelectorAll('.news__cards-item');
    const loadMoreBtn = parent.querySelector('#loadMore');
    let visibleCount = 6;

    function updateVisibility() {
        for (let i = 0; i < visibleCount && i < items.length; i++) {
            items[i].style.height = items[i].scrollHeight + 'px';
        }

        loadMoreBtn.classList.toggle('hidden', visibleCount >= items.length);
    }
    loadMoreBtn.addEventListener('click', () => {
        visibleCount += 6; // Показываем ещё 6 элементов
        updateVisibility();
    });
    updateVisibility();
})