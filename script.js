// Função para abrir imagem em tela cheia (Modal)
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    
    modal.style.display = "flex";
    modalImg.src = imageSrc;
    document.body.style.overflow = "hidden"; // Desabilita o scroll da página ao fundo
}

// Função para fechar o Modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Reabilita o scroll
}

// Fechar modal pressionando a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});