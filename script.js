const password = "MINECRAFT"; // Replace with your desired password

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const enteredPassword = document.getElementById("password").value;

    if (enteredPassword === password) {
        window.location.href = "download.html"; // Redirect to download page
    } else {
        alert("Incorrect password, please try again.");
    }
});
