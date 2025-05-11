document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.story-container');
    setInterval(() => {
        const x = (Math.random() * 20) - 10;
        const y = (Math.random() * 20) - 10;
        container.style.transform = `rotate(${x/20}deg) translate(${x}px, ${y}px)`;
    }, 3000);
});
