document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // Apuntamos a <html> que es donde busca el CSS
    
    // 1. Comprobar preferencia al cargar
    // El script inline del HEAD ya se encargó de poner la clase, aquí solo ajustamos el icono
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        if(toggleBtn) toggleBtn.textContent = '☀️';
    }

    // Activar transiciones suavemente una vez cargado todo
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 50);

    // 2. Lógica del botón
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark-mode');
            const isDark = htmlElement.classList.contains('dark-mode');
            
            // Guardar preferencia
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Cambiar icono
            toggleBtn.textContent = isDark ? '☀️' : '🌙';
        });
    }
});
