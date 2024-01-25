document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const body = document.body;

    toggleButton.addEventListener("click", function() {
        if (body.classList.contains("night-mode")) {
            // Switch back to day mode
            body.classList.remove("night-mode");
            toggleButton.textContent = "Night";
        } else {
            // Switch to night mode
            body.classList.add("night-mode");
            toggleButton.textContent = "Day";
        }
    });
});