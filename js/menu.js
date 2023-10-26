//Colorear el texto en la seccion activa
// Obtiene la URL actual
var currentUrl = window.location.href;

// Obtiene todos los elementos de enlace en el menú
var menuLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Itera a través de los enlaces del menú
menuLinks.forEach(function(link) {
	// Compara la URL actual con la URL del enlace del menú
	if (link.href === currentUrl) {
		// Agrega la clase 'active' al elemento del menú correspondiente
		link.parentElement.classList.add('active');
	}
});