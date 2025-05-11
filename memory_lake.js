
const memories = [
    "Ви бачите себе дитиною, що сміється на сонячній галявині...",
    "Темний образ - ви стоїте під дощем, обличчя мокре від сліз...",
    "Незнайоме обличчя дивиться на вас - чий це спогад?...",
    "Веселка після грози, ви простягаєте руку, наче хочете доторкнутися...",
    "Лікарняна палата, відчуття болю і страху...",
    "Перший поцілунок - серце б'ється часто-часто...",
    "Ви йдете лісом, але не можете згадати, коли це було...",
    "Старий будинок, який ви нібито знаєте, але не можете впізнати..."
];

function showMemory() {
    const lake = document.querySelector('.lake-surface');
    const memoryText = document.getElementById('memory-text');
    const randomMemory = memories[Math.floor(Math.random() * memories.length)];
    
    // Анімація зникнення тексту перед зміною
    memoryText.style.opacity = '0';
    
    setTimeout(() => {
        memoryText.textContent = randomMemory;
        memoryText.style.opacity = '1';
    }, 500);
    
    // Ефект брижів на воді
    lake.style.animation = 'none';
    setTimeout(() => {
        lake.style.animation = 'water-ripple 2s infinite';
    }, 10);
    
    // Зміна кольору підсвітки
    const colors = ['#5dade2', '#48c9b0', '#af7ac5', '#f5b041', '#e74c3c'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    lake.style.boxShadow = `inset 0 0 50px rgba(0, 0, 0, 0.5), 0 0 20px ${randomColor}`;
}

function visitLake() {
    const confirmVisit = confirm("Ви впевнені, що хочете заглянути в Озеро Спогадів? Пам'ятайте - не всі спогади приносять радість.");
    if (confirmVisit) {
        alert("Ви нахиляєтеся над водою... Повінь образів наповнює вашу свідомість...");
        showMemory();
    }
}

// Анімація завантаження карток
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Перший спогад при завантаженні
    setTimeout(showMemory, 2000);
});
