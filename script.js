function enterSite()
{
    const cover = document.getElementById('cover');
    const mainContent = document.getElementById('main-content');

    // Ocultar la portada y mostrar el contenido principal
    cover.classList.add('hidden');
    mainContent.classList.remove('hidden');
}
