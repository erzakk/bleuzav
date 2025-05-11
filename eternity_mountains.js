
const timeWhispers = [
    "Ти почуваєш, як твоє серце б'ється повільніше...",
    "Час тут тече інакше...",
    "Старійшин спостерігає за тобою...",
    "Наступне дихання гір близько...",
    "Камені пам'ятають все...",
    "Не всі, хто піднімаються, повертаються...",
    "33 роки минуло з останнього стогону...",
    "Сніг ніколи не тане..."
];

function timeWhisper() {
    const crystal = document.querySelector('.time-crystal');
    const whisper = timeWhispers[Math.floor(Math.random() * timeWhispers.length)];
    
    // Створюємо елемент для шепоту
    const whisperElement = document.createElement('div');
    whisperElement.textContent = whisper;
    whisperElement.style.position = 'absolute';
    whisperElement.style.top = '50%';
    whisperElement.style.left = '50%';
    whisperElement.style.transform = 'translate(-50%, -50%)';
    whisperElement.style.color = 'var(--eternity-glow)';
    whisperElement.style.fontSize = '1.2rem';
    whisperElement.style.textAlign = 'center';
    whisperElement.style.width = '80%';
    whisperElement.style.opacity = '0';
    whisperElement.style.transition = 'all 0.5s';
    whisperElement.style.textShadow = '0 0 10px var(--dark-bg)';
    
    crystal.appendChild(whisperElement);
    
    // Анімація з'явлення
    setTimeout(() => {
        whisperElement.style.opacity = '1';
    }, 10);
    
    // Анімація зникнення
    setTimeout(() => {
        whisperElement.style.opacity = '0';
    }, 3000);
    
    // Видалення елемента після анімації
    setTimeout(() => {
        crystal.removeChild(whisperElement);
    }, 3500);
    
    // Ефект пульсації
    crystal.style.animation = 'none';
    setTimeout(() => {
        crystal.style.animation = 'time-pulse 3s infinite';
    }, 10);
}

function beginJourney() {
    const confirmJourney = confirm("Ви впевнені, що готові до подорожі до Гір Вічності? Пам'ятайте - час там тече інакше, і ви можете повернутися в зовсім інший світ.");
    if (confirmJourney) {
        alert("Ви робите перший крок на стежку, що веде до снігових вершин... Вітер шепоче вам щось на вухо, але ви не можете розібрати слів. Подорож почалася.");
        
        // Додамо ефект заморожування сторінки
        document.body.style.transition = 'all 2s';
        document.body.style.filter = 'blur(1px) grayscale(20%)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 2000);
    }
}

// Анімація завантаження карток
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.legend-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = `all 0.7s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
    
    
    setTimeout(timeWhisper, 2500);
});
