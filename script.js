let currentGalleryIndex = -1;

function getRaizesImages() {
    const imgs = document.querySelectorAll('#raizes .project-img-wrapper img');
    return Array.from(imgs).map(img => img.currentSrc || img.src);
}

// Abre uma imagem única (Demais projetos e plantas executivas)
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    currentGalleryIndex = -1;
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";

    modal.style.display = "flex";
    modalImg.src = imageSrc;
    document.body.style.overflow = "hidden";
}

// Abre a galeria do Apartamento Raízes com setas de navegação
function openGalleryModal(index) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const raizesImages = getRaizesImages();

    currentGalleryIndex = index;
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";

    modal.style.display = "flex";
    modalImg.src = raizesImages[currentGalleryIndex];
    document.body.style.overflow = "hidden";
}

function changeSlide(direction, event) {
    if (event) event.stopPropagation();
    if (currentGalleryIndex === -1) return;

    const raizesImages = getRaizesImages();
    currentGalleryIndex += direction;
    
    if (currentGalleryIndex < 0) {
        currentGalleryIndex = raizesImages.length - 1;
    } else if (currentGalleryIndex >= raizesImages.length) {
        currentGalleryIndex = 0;
    }

    document.getElementById("imgFull").src = raizesImages[currentGalleryIndex];
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    currentGalleryIndex = -1;
    document.body.style.overflow = "auto";
}

// Teclas de atalho (ESC para fechar, Setas para navegar na galeria)
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    } else if (event.key === "ArrowRight" && currentGalleryIndex !== -1) {
        changeSlide(1);
    } else if (event.key === "ArrowLeft" && currentGalleryIndex !== -1) {
        changeSlide(-1);
    }
});
