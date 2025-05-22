fetch("navbar.html") // Carga el archivo navbar.html
  .then((response) => response.text()) // Convierte la respuesta en texto
  .then((data) => (document.getElementById("navbar").innerHTML = data)) // Inserta el contenido en la página
  .catch((error) => console.error("Error al cargar el navbar:", error)); // Manejo de errores
