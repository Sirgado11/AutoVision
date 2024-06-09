document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    let selectedCars = [];

    const carsData = [
        {
            id: 'car1',
            name: 'Carro 1',
            image: 'images/car1.jpg',
            details: 'Detalhes do Carro 1.'
        },
        {
            id: 'car2',
            name: 'Carro 2',
            image: 'images/car2.jpg',
            details: 'Detalhes do Carro 2.'
        },
        {
            id: 'car3',
            name: 'Carro 3',
            image: 'images/car3.jpg',
            details: 'Detalhes do Carro 3.'
        },
        {
            id: 'car4',
            name: 'Carro 4',
            image: 'images/car4.jpg',
            details: 'Detalhes do Carro 4.'
        }
    ];

    images.forEach(img => {
        img.addEventListener('click', () => {
            const carId = img.getAttribute('data-id');
            const car = carsData.find(c => c.id === carId);
            if (car) {
                if (selectedCars.length < 2) {
                    selectedCars.push(car);
                } else {
                    selectedCars = [selectedCars[1], car];
                }
                updateComparison();
            }
        });
    });

    function updateComparison() {
        if (selectedCars.length > 0) {
            document.getElementById('car1-details').innerHTML = `
                <h2>${selectedCars[0].name}</h2>
                <img src="${selectedCars[0].image}" alt="${selectedCars[0].name}">
                <p>${selectedCars[0].details}</p>
            `;
        } else {
            document.getElementById('car1-details').innerHTML = '';
        }

        if (selectedCars.length > 1) {
            document.getElementById('car2-details').innerHTML = `
                <h2>${selectedCars[1].name}</h2>
                <img src="${selectedCars[1].image}" alt="${selectedCars[1].name}">
                <p>${selectedCars[1].details}</p>
            `;
        } else {
            document.getElementById('car2-details').innerHTML = '';
        }
    }
});
