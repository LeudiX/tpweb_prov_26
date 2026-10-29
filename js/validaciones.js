// Esperamos a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. VALIDACIÓN DEL LOGIN (index.html)
    // ==========================================
    const formLogin = document.getElementById("formLogin");
    
    if (formLogin) {
        formLogin.addEventListener("submit", function(evento) {
            const usuario = document.getElementById("usuario").value.trim();
            const password = document.getElementById("password").value.trim();

            if (usuario === "" || password === "") {
                evento.preventDefault(); // Detiene el envío del formulario
                alert("Por favor, complete todos los campos del Login.");
            } else {
                // Aquí iría la lógica para enviar los datos al servidor
                alert("¡Iniciando sesión...!");
            }
        });
    }

    // ==========================================
    // 2. VALIDACIÓN DEL REGISTRO (pages/registro.html)
    // ==========================================
    const formRegistro = document.getElementById("formRegistro");

    if (formRegistro) {
        formRegistro.addEventListener("submit", function(evento) {
            const nombre = document.getElementById("nombreReg").value.trim();
            const email = document.getElementById("emailReg").value.trim();
            const pass = document.getElementById("passReg").value;
            const passConfirm = document.getElementById("passConfirm").value;

            // Validación 1: Campos vacíos
            if (nombre === "" || email === "" || pass === "" || passConfirm === "") {
                evento.preventDefault();
                alert("Por favor, llene todos los campos.");
                return;
            }

            // Validación 2: Formato de correo (Expresión regular básica)
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                evento.preventDefault();
                alert("Por favor, ingrese un correo electrónico válido.");
                return;
            }

            // Validación 3: Las contraseñas coinciden
            if (pass !== passConfirm) {
                evento.preventDefault();
                alert("Las contraseñas no coinciden. Por favor, verifíquelas.");
                return;
            }

            // Validación 4: Longitud de la contraseña
            if (pass.length < 6) {
                evento.preventDefault();
                alert("La contraseña debe tener al menos 6 caracteres.");
                return;
            }

            // Si pasa todas las validaciones
            alert("¡Registro exitoso! Ya puedes iniciar sesión.");
        });
    }
});