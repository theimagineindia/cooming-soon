document.addEventListener("DOMContentLoaded", function () {
    // Get form by ID
    const form = document.getElementById("emailForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("Form submission started.");

            const formData = new FormData(form);
            console.log("Form data collected:", formData);

            fetch("https://formsubmit.co/theimagineindiadev@gmail.com", {
                method: "POST",
                body: formData,
            })
            .then((response) => {
                console.log("Response status:", response.status);
                if (response.ok) {
                    console.log("Form submitted successfully.");
                    showPopup();
                    form.reset();
                } else {
                    console.error("Error in form submission:", response.statusText);
                    alert("Submission failed. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error caught:", error);
                alert("There was an error. Please try again.");
            });
        });
    }
});
