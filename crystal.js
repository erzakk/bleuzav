
        // Функція для зміни кольору кристала
        function changeColor() {
            const crystal = document.querySelector('.interactive-crystal');
            const colors = ['#42a5f5', '#29b6f6', '#26c6da', '#66bb6a', '#ab47bc'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            crystal.style.filter = `drop-shadow(0 0 15px ${randomColor})`;
            
            crystal.style.animation = 'none';
            setTimeout(() => {
                crystal.style.animation = 'pulse 2s infinite';
            }, 10);
        }
        
        // Додаємо падаючі кристали
        function createParticles() {
            const container = document.getElementById('particles-container');
            const types = 3;
            
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.className = 'crystal-particle';
                particle.style.width = `${Math.random() * 15 + 5}px`;
                particle.style.height = `${Math.random() * 15 + 5}px`;
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.backgroundImage = `url('https://i.imgur.com/crystal-particle${Math.floor(Math.random() * types) + 1}.png')`;
                particle.style.setProperty('--end-x', Math.random() * 20 - 10);
                particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                container.appendChild(particle);
            }
        }
        
        // Ініціалізація при завантаженні сторінки
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            
            // Анімація появи карток
            const cards = document.querySelectorAll('.crystal-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px) rotateY(30deg)';
                card.style.transition = `all 0.5s ease ${index * 0.1}s`;
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) rotateY(0)';
                }, 100);
            });
        });
