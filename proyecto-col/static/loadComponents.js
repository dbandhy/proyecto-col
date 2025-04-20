async function loadComponent(id, file) {
  try {
    const response = await fetch(file)
    const data = await response.text()
    const container = document.getElementById(id)
    container.innerHTML = data
  } catch (error) {
    console.error('Error al cargar el archivo:', error)
  }
}

// Cargar el header y footer
loadComponent('main-header', './components/header.html');
loadComponent('main-footer', './components/footer.html');

