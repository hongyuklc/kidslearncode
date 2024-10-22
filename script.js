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
        const scripts = el.querySelectorAll('script');
        scripts.forEach((oldScript) => {
            const newScript = document.createElement('script');
            // If the script has a src, copy it over.
            if (oldScript.src) {
                newScript.src = oldScript.src;
            } else {
                // Otherwise, copy its inline script content.
                newScript.textContent = oldScript.textContent;
            }
            // Copy other attributes like type, async, etc.
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });
            // Append the new script to the document body.
            document.body.appendChild(newScript);
            // Optionally, remove the old script tag if needed.
            oldScript.remove();
        });
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