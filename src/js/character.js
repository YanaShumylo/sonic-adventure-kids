const slider = document.querySelector('.characters-list');
const items = document.querySelectorAll('.character-item');

const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const dotsContainer = document.querySelector('.slider-dots');

let currentPage = 0;
let totalPages = 0;

function getVisibleCards() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function calculatePages() {
    const visibleCards = getVisibleCards();
    totalPages = Math.ceil(items.length / visibleCards);
}

function getSlideWidth() {
    return slider.clientWidth;
}

function updateSlider() {
    slider.scrollTo({
        left: currentPage * getSlideWidth(),
        behavior: 'smooth'
    });
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPage);
    });
}

function createDots() {
    dotsContainer.innerHTML = '';
    calculatePages();
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('span');
        dot.classList.add('slider-dot');
        if (i === currentPage) {
            dot.classList.add('active');
        }

        dot.addEventListener('click', () => {
            currentPage = i;
            updateSlider();
        });

        dotsContainer.appendChild(dot);
    }
}

nextBtn.addEventListener('click', () => {
    currentPage++;
    if (currentPage >= totalPages) {
        currentPage = 0;
    }
    updateSlider();
});
prevBtn.addEventListener('click', () => {
    currentPage--;
    if (currentPage < 0) {
        currentPage = totalPages - 1;
    }
    updateSlider();
});

window.addEventListener('resize', () => {
    calculatePages();
    if (currentPage >= totalPages) {
        currentPage = totalPages - 1;
    }
    createDots();
    updateSlider();
});

let startX = 0;
let endX = 0;
slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});
slider.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    const distance = startX - endX;
    if (distance > 50) {
        nextBtn.click();
    }
    if (distance < -50) {
        prevBtn.click();
    }
});