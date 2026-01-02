// Select all "Read More" buttons
const buttons = document.querySelectorAll(".read-more");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const fullContent = button.previousElementSibling;

        if (fullContent.style.display === "block") {
            fullContent.style.display = "none";
            button.textContent = "Read More";
        } else {
            fullContent.style.display = "block";
            button.textContent = "Read Less";
        }
    });
});