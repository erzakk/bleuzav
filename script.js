document.addEventListener('DOMContentLoaded', function () {
    const mapContainer = document.getElementById('map-container');
    const addLocationBtn = document.getElementById('add-location');
    const clearPathBtn = document.getElementById('clear-path');

    const fantasyLocations = [
        { name: "Кристальні Печери", desc: "Печери, повні сяючих кристалів, що змінюють колір", file:"crystal_caves.html", x: 15, y: 70 },
        { name: "Ліс Тіней", desc: "Ліс, де дерева відкидають тіні, які живуть власним життям", file:"shadow_forest.html", x: 60, y: 61 },
        { name: "Місто Вітрів", desc: "Плаваюче місто, що тримається в повітрі завдяки древнім технологіям", file:"wind_city.html", x: 82, y: 22 },
        { name: "Озеро Спогадів", desc: "Вода в озері показує минулі події тих, хто в нього дивиться", file:"memory_lake.html", x: 61, y: 84 },
        { name: "Гори Вічності", desc: "Гори, де час тече повільніше, а вік не бере своє", file:"eternity_mountains.html", x: 50, y: 38 },
        { name: "Зорекрай", desc: "Забуті голоси блукають між вежами, а час тече у зворотному напрямку.", file:"star_edge.html", x: 83, y: 75 },
        { name: "Острів Снів", desc: "Місце, де сновидіння стають реальністю", file:"dream_island.html", x: 13, y: 23 }
    ];

    let locations = [];
    let selectedLocation = null;
    let lastAddedLocation = null;

    function addLocation(name, desc, file, x, y, isNew = false) {
        const location = document.createElement('div');
        location.className = 'location';
        location.style.left = `${x}%`;
        location.style.top = `${y}%`;
        location.dataset.name = name;
        location.dataset.desc = desc;
        location.dataset.file = file;

        const info = document.createElement('div');
        info.className = 'location-info';
        info.innerHTML = `<h3>${name}</h3><p>${desc}</p>`;
        location.appendChild(info);


        // Обробник одинарного кліку для вибору локації
        location.addEventListener('click', function (e) {
            e.stopPropagation();
            selectLocation(location, name, desc);

            if (selectedLocation && lastAddedLocation && selectedLocation !== location) {
                drawPath(lastAddedLocation, location);
            }

            lastAddedLocation = location;
        });

        // Обробник подвійного кліку для відкриття сторінки локації
        location.addEventListener('dblclick', function (e) {
            e.stopPropagation();
            window.open(file, "_blank");
        });

        if (isNew) {
            location.style.backgroundColor = 'rgba(255, 100, 100, 0.7)';
            location.style.borderColor = '#ffaaaa';
        }

        mapContainer.appendChild(location);
        locations.push({ element: location, name, desc, file, x, y });
        return location;
    }

    function selectLocation(element, name, desc) {
        if (selectedLocation) {
            selectedLocation.style.backgroundColor = 'rgba(100, 200, 255, 0.7)';
            selectedLocation.style.borderColor = '#ffffff';
        }

        selectedLocation = element;
        selectedLocation.style.backgroundColor = 'rgba(255, 100, 100, 0.9)';
        selectedLocation.style.borderColor = '#ffaaaa';
    }

    function drawPath(startElement, endElement) {
        const startRect = startElement.getBoundingClientRect();
        const endRect = endElement.getBoundingClientRect();

        const startX = startRect.left + startRect.width / 2;
        const startY = startRect.top + startRect.height / 2;
        const endX = endRect.left + endRect.width / 2;
        const endY = endRect.top + endRect.height / 2;

        const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
        const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;

        const path = document.createElement('div');
        path.className = 'path';
        path.style.width = `${length}px`;
        path.style.left = `${startX}px`;
        path.style.top = `${startY}px`;
        path.style.transform = `rotate(${angle}deg)`;

        mapContainer.appendChild(path);
    }

    function clearPaths() {
        const paths = document.querySelectorAll('.path');
        paths.forEach(path => path.remove());
        lastAddedLocation = null;
    }

    // Додаємо всі локації на карту
    fantasyLocations.forEach(loc => {
        addLocation(loc.name, loc.desc, loc.file, loc.x, loc.y);
    });

    // Обробники кнопок
    addLocationBtn.addEventListener('click', function () {
        const name = prompt("Введіть назву локації:", "Нова Локація");
        if (name) {
            const desc = prompt("Введіть опис локації:", "Таємниче місце у фантастичному світі");
            const file = `location_${Date.now()}.html`;
            const x = Math.floor(Math.random() * 80) + 10;
            const y = Math.floor(Math.random() * 80) + 10;
            addLocation(name, desc, file, x, y, true);
        }
    });

    clearPathBtn.addEventListener('click', clearPaths);

    // Дозволяємо закривати деталі кліком на карту
    mapContainer.addEventListener('click', function (e) {
        if (e.target === mapContainer) {
            if (selectedLocation) {
                selectedLocation.style.backgroundColor = 'rgba(100, 200, 255, 0.7)';
                selectedLocation.style.borderColor = '#ffffff';
                selectedLocation = null;
            }
        }
    });
});
