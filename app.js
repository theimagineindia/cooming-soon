document.addEventListener("DOMContentLoaded", function () {
    // Get form by ID
    const form = document.getElementById("emailForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission (page reload)

            const formData = new FormData(form); // Collect form data

            console.log("Form data:", formData); // For debugging

            // Send form data using fetch
            fetch("https://formsubmit.co/theimagineindiadev@gmail.com", {
                method: "POST", // Use POST method
                body: formData, // Send form data
            })
            .then((response) => {
                if (response.ok) {
                    console.log("Form submitted successfully");
                    showPopup(); // Show the success popup
                    form.reset(); // Reset the form
                } else {
                    console.error("Error in form submission: " + response.statusText);
                    alert("Submission failed. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("There was an error. Please try again.");
            });
        });
    }

    // Show popup when form is successfully submitted
    function showPopup() {
        const popup = document.getElementById("popup");
        if (popup) {
            popup.style.display = "block"; // Show the popup
            popup.removeAttribute("inert"); // Remove inert to make the popup interactive
        } else {
            console.error("Popup element not found");
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
