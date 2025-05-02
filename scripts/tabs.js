document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs__btn');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            document.querySelectorAll('.tabs__btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            document.querySelectorAll('.tabs__panel').forEach(panel => {
                panel.classList.remove('active');
            });
            
            tab.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});