document.addEventListener("DOMContentLoaded", function() {
    const buttonGrid = document.getElementById("buttonGrid");

    // Example words for button labels
    const words = [
        "Word 1", "Word 2", "Word 3", "Word 4", "Word 5",
        "Word 6", "Word 7", "Word 8", "Word 9", "Word 10",
        "Word 11", "Word 12", "Word 13", "Word 14", "Word 15",
        "Word 16", "Word 17", "Word 18", "Word 19", "Word 20",
        "Word 21", "Word 22", "Word 23", "Word 24", "Word 25"
    ];

    // Create buttons dynamically based on 'words' array
    words.forEach(word => {
        const button = document.createElement("button");
        button.textContent = word;
        button.classList.add("button");
        button.addEventListener("click", function() {
            button.style.backgroundColor = "green"; // Change button color on click
            button.disabled = true; // Disable button on click
        });
        buttonGrid.appendChild(button);
    });
});