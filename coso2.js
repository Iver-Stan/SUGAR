document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const contraseñaCorrecta = 'muchachos'; // Definir la contraseña correcta aquí

    if (password === contraseñaCorrecta) {
        alert('Inicio de sesión exitoso!');
        window.location.href = 'index2.html'; // Redirigir a otro index.html
    } else {
        document.getElementById('resultado').innerHTML = '<p>Credenciales incorrectas. Por favor, inténtelo de nuevo.</p>';
    }
});
