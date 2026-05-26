const tabs = document.querySelectorAll('[data-tab]');
const contents = document.querySelectorAll('.tab-content');

function showTab(tabId) {
    contents.forEach(content => {
        content.style.display = 'none';
    });

    const activeContent = document.querySelector(`[data-content="${tabId}"]`);
    if (activeContent) activeContent.style.display = 'block';

    tabs.forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
}

tabs.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        showTab(tabId);
    });
});

showTab('1');