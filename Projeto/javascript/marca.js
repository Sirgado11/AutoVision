document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const modelName = urlParams.get('model');

    const carDetails = getCarDetails(modelName);
    if (carDetails) {
        updateComparison(carDetails);
        updateCarImages(carDetails); // Chamando a função para atualizar as imagens
    }
});

function updateComparison(carDetails) {
    const table = document.querySelector('.tabelas');
    table.querySelector('#cat1').textContent = carDetails.category;
    table.querySelector('#cat2').textContent = carDetails.category;
    table.querySelector('#mod1').textContent = carDetails.model;
    table.querySelector('#mod2').textContent = carDetails.model;
    table.querySelector('#ano1').textContent = carDetails.year;
    table.querySelector('#ano2').textContent = carDetails.year;
    table.querySelector('#lug1').textContent = carDetails.dimensionsAndWeight.seats;
    table.querySelector('#lug2').textContent = carDetails.dimensionsAndWeight.seats;
    table.querySelector('#bag1').textContent = carDetails.dimensionsAndWeight.luggage;
    table.querySelector('#bag2').textContent = carDetails.dimensionsAndWeight.luggage;
    table.querySelector('#pes1').textContent = carDetails.dimensionsAndWeight.weight;
    table.querySelector('#pes2').textContent = carDetails.dimensionsAndWeight.weight;
    table.querySelector('#com1').textContent = carDetails.dimensionsAndWeight.length;
    table.querySelector('#com2').textContent = carDetails.dimensionsAndWeight.length;
    table.querySelector('#alt1').textContent = carDetails.dimensionsAndWeight.height;
    table.querySelector('#alt2').textContent = carDetails.dimensionsAndWeight.height;
    table.querySelector('#lar1').textContent = carDetails.dimensionsAndWeight.width;
    table.querySelector('#lar2').textContent = carDetails.dimensionsAndWeight.width;
    table.querySelector('#aer1').textContent = carDetails.dimensionsAndWeight.aerodynamics;
    table.querySelector('#aer2').textContent = carDetails.dimensionsAndWeight.aerodynamics;
    table.querySelector('#mot1').textContent = carDetails.engine.type;
    table.querySelector('#mot2').textContent = carDetails.engine.type;
    table.querySelector('#des1').textContent = carDetails.engine.displacement;
    table.querySelector('#des2').textContent = carDetails.engine.displacement;
    table.querySelector('#hp1').textContent = carDetails.engine.horsepower;
    table.querySelector('#hp2').textContent = carDetails.engine.horsepower;
    table.querySelector('#tor1').textContent = carDetails.engine.torque;
    table.querySelector('#tor2').textContent = carDetails.engine.torque;
    table.querySelector('#tra1').textContent = carDetails.brakesAndWheels.brakesType;
    table.querySelector('#tra2').textContent = carDetails.brakesAndWheels.brakesType;
    table.querySelector('#rod1').textContent = carDetails.brakesAndWheels.wheelSize;
    table.querySelector('#rod2').textContent = carDetails.brakesAndWheels.wheelSize;
    table.querySelector('#vel1').textContent = carDetails.performance.maxSpeed;
    table.querySelector('#vel2').textContent = carDetails.performance.maxSpeed;
    table.querySelector('#ace1').textContent = carDetails.performance.acceleration;
    table.querySelector('#ace2').textContent = carDetails.performance.acceleration;
    table.querySelector('#urb1').textContent = carDetails.consumption.urban;
    table.querySelector('#urb2').textContent = carDetails.consumption.urban;
    table.querySelector('#cid1').textContent = carDetails.consumption.city;
    table.querySelector('#cid2').textContent = carDetails.consumption.city;
    table.querySelector('#combi1').textContent = carDetails.consumption.combined;
    table.querySelector('#combi2').textContent = carDetails.consumption.combined;
    table.querySelector('#co21').textContent = carDetails.consumption.co2Emission;
    table.querySelector('#co22').textContent = carDetails.consumption.co2Emission;
}