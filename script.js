
      // JavaScript to toggle the menu on small screens
      const hamburgerButton = document.getElementById("hamburger-button");
      const menu = document.getElementById("menu");

      hamburgerButton.addEventListener("click", () => {
        // Toggle visibility of the menu
        menu.classList.toggle("hidden");
      });

        // form validation
      document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const jsonData = JSON.stringify(Object.fromEntries(formData));

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then(response => {
        if (response.ok) {
          alert("Message sent successfully!");
          form.reset();
        } else {
          alert("Failed to send message. Please try again later.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while sending your message.");
      });
  });
