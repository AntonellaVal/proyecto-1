document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fakeUser = {
        username: 'usuario',
        password: 'contraseña123'
    };

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const mensajeElement = document.getElementById('mensaje');

    if (username === fakeUser.username && password === fakeUser.password) {
        
        mensajeElement.innerHTML = '<div class="alert alert-success">Has iniciado sesión correctamente.</div>';
        
        setTimeout(() => {
            window.location.href = 'bienvenido.html';
        }, 3000);
    } else {
        
        mensajeElement.innerHTML = '<div class="alert alert-danger">Usuario o contraseña incorrectos.</div>';
    }
    
});