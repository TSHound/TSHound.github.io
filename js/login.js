function showRegisterForm() {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('register-form').style.display = 'block';
    }

    function showLoginForm() {
      document.getElementById('login-form').style.display = 'block';
      document.getElementById('register-form').style.display = 'none';
    }


document.addEventListener('DOMContentLoaded', function () {
            var loginForm = document.getElementById('login-form');
            loginForm.addEventListener('submit', function (event) {
                event.preventDefault(); // Evitar el envío del formulario

                var username = document.getElementById('username').value;
                var password = document.getElementById('password').value;
                var modalMessage = document.getElementById('modal-message');

                if (username === 'henry' && password === 'monitaschinas666') {
                    // Configurar el mensaje del modal
                    modalMessage.textContent = 'No puede iniciar con este usuario.';
                    // Mostrar el modal utilizando Bootstrap
                    $('#myModal').modal('show');
                }
            });
        });
