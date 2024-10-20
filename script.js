// <script>
// document.querySelectorAll('.faq-question').forEach(button => {
//     button.addEventListener('click', () => {
//         const answer = button.nextElementSibling;
//         answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
//     });
// });
// </script>
function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");
    elements.forEach(async (el) => {
        const file = el.getAttribute("data-include");
        const response = await fetch(file);
        if (response.ok) {
            el.innerHTML = await response.text();
        }
    });
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    setTimeout(() => {
        sidebar.classList.add('active'); //Triggers slide in animation
    }, 20);
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active'); // Triggers slide out animation
    setTimeout(() => {
        sidebar.style.display = 'none';
    }, 200);
}
document.addEventListener("DOMContentLoaded", includeHTML);