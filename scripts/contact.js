// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-button");
    const contactPage = document.getElementById("contact-page");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the form from submitting (if there's a form)

        // Create a new <p> element with the thank you message
        const thankYouElement = document.createElement("p");
        thankYouElement.textContent = "Thank you for your message!";
        thankYouElement.style.fontSize = "24px"; // Set the font size
        thankYouElement.style.textAlign = "center";
        thankYouElement.style.marginRight = "10em";

        // Replace the contents of the contact-page with the thank you message
        contactPage.innerHTML = ""; // Clear existing content
        contactPage.appendChild(thankYouElement);
    });
});



