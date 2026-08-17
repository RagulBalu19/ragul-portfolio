emailjs.init({
    publicKey: "_rIJSiMojHHwthbrl"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = document.getElementById("send-btn");

    button.innerHTML = "Sending...";
    button.disabled = true;

    emailjs.sendForm(
        "service_pmf28pa",
        "template_78szbg8",
        this
    )

    .then(() => {

        alert("Message sent successfully!");

        form.reset();

        button.innerHTML = "🚀 Send Message";
        button.disabled = false;

    })

    .catch((error) => {
        console.error("EmailJS Error:", error);

        alert("Failed to send message.\n\n" + JSON.stringify(error));

        button.innerHTML = "🚀 Send Message";
        button.disabled = false;

    });

});