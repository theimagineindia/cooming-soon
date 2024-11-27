document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("emailForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const formData = new FormData(form); // Collect form data

        emailjs.sendForm('your_service_id', 'your_template_id', formData)
            .then(function(response) {
                console.log('Success:', response);
                showPopup(); // Show the success popup
                form.reset(); // Reset the form
            }, function(error) {
                console.error('Error:', error);
                alert("There was an error. Please try again.");
            });
    });

    // Show popup when form is successfully submitted
    function showPopup() {
        const popup = document.getElementById("popup");
        if (popup) {
            popup.style.display = "block"; // Show the popup
            popup.removeAttribute("inert"); // Remove inert to make the popup interactive
        }
    }

    // Close the popup
    const closeBtn = document.querySelector("#popup button");
    if (closeBtn) {
        closeBtn.addEventListener("click", closePopup);
    }

    function closePopup() {
        const popup = document.getElementById("popup");
        if (popup) {
            popup.style.display = "none"; // Hide the popup
            popup.setAttribute("inert", ""); // Disable interaction again
        }
    }
});
