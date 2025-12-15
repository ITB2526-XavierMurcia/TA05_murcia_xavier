document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // 1. Comprobar preferencia guardada al cargar
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if(toggleBtn) toggleBtn.textContent = '☀️';
    }

    // 2. Lógica del botón
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            
            // Guardar preferencia
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Cambiar icono
            toggleBtn.textContent = isDark ? '☀️' : '🌙';
        });
    }
});
