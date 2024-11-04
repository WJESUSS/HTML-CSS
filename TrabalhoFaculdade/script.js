document.getElementById("mobile-menu").addEventListener("click", function() {
    const navList = document.querySelector(".nav-list");
    navList.classList.toggle("active");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("error-message");
    
    errorMessage.textContent = "";

    if (name === "" || email === "" || message === "") {
        errorMessage.textContent = "Todos os campos são obrigatórios.";
    } else {
        alert("Mensagem enviada!");
        document.getElementById("contact-form").reset();
    }
});