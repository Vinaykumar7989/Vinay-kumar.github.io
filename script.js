// This script controls the tab navigation on work.html

document.addEventListener('DOMContentLoaded', () => {
    // Select all tab buttons and content panels
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the target tab's ID from the 'data-tab' attribute
            const targetTab = button.getAttribute('data-tab');

            // 1. Deactivate all buttons and hide all content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // 2. Activate the clicked button
            button.classList.add('active');
            
            // 3. Show the corresponding content
            const activeContent = document.getElementById(targetTab);
            if(activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
});.
