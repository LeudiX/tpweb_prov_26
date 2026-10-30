// ==========================================
// FUNCIÓN PARA MOSTRAR NOTIFICACIONES (TOAST)
// Movida al principio para que esté disponible siempre
// ==========================================
function mostrarToast(mensaje, tipo = "success") {
    const container = document.getElementById("toast-container");
    if (!container) {
        alert(mensaje); // Respaldo por si acaso
        return;
    }

    const toast = document.createElement("div");
    toast.className = `toast ${tipo}`;
    
    const icono = tipo === "success" ? "fa-check-circle" : "fa-exclamation-circle";
    toast.innerHTML = `<i class="fas ${icono}"></i> <span>${mensaje}</span>`;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "fadeOut 0.5s ease forwards";
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

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
                evento.preventDefault();
                mostrarToast("Por favor, complete todos los campos del Login.", "error");
            } else {
                mostrarToast("¡Iniciando sesión...!", "success");
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

            if (nombre === "" || email === "" || pass === "" || passConfirm === "") {
                evento.preventDefault();
                mostrarToast("Por favor, llene todos los campos.", "error");
                return;
            }

            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                evento.preventDefault();
                mostrarToast("Por favor, ingrese un correo electrónico válido.", "error");
                return;
            }

            if (pass !== passConfirm) {
                evento.preventDefault();
                mostrarToast("Las contraseñas no coinciden. Verifíquelas.", "error");
                return;
            }

            if (pass.length < 6) {
                evento.preventDefault();
                mostrarToast("La contraseña debe tener al menos 6 caracteres.", "error");
                return;
            }

            mostrarToast("¡Registro exitoso! Ya puedes iniciar sesión.", "success");
        });
    }
});

// ==========================================
// 3. LÓGICA DEL MODAL (CRUD Servicios)
// ==========================================
function abrirModal() {
    const modal = document.getElementById("modalServicio");
    if (modal) modal.classList.add("show");
}

function cerrarModal() {
    const modal = document.getElementById("modalServicio");
    if (modal) {
        modal.classList.remove("show");
        const form = document.getElementById("formServicio");
        if (form) form.reset(); 
    }
}

window.addEventListener("click", function(evento) {
    const modal = document.getElementById("modalServicio");
    if (evento.target === modal) cerrarModal();
});

const formServicio = document.getElementById("formServicio");
if (formServicio) {
    formServicio.addEventListener("submit", function(evento) {
        evento.preventDefault(); 
        mostrarToast("Servicio guardado con éxito.", "success");
        cerrarModal();
    });
}

// ==========================================
// 4. LÓGICA DEL MODAL (CRUD Citas)
// ==========================================
function abrirModalCita() {
    const modal = document.getElementById("modalCita");
    if (modal) modal.classList.add("show");
}

function cerrarModalCita() {
    const modal = document.getElementById("modalCita");
    if (modal) {
        modal.classList.remove("show");
        const form = document.getElementById("formCita");
        if (form) form.reset();
    }
}

window.addEventListener("click", function(evento) {
    const modal = document.getElementById("modalCita");
    if (evento.target === modal) cerrarModalCita();
});

const formCita = document.getElementById("formCita");
if (formCita) {
    formCita.addEventListener("submit", function(evento) {
        evento.preventDefault();
        mostrarToast("Cita agendada con éxito.", "success");
        cerrarModalCita();
    });
}