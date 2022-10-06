const carros = document.querySelector("#carros");

const carrosArray = [
    "Chevrolet", 
    "Fiat", 
    "Ford", 
    "Honda", 
    "Hyundai", 
    "Kia", 
    "Mazda", 
    "Mercedes-Benz", 
    "Nissan", 
    "Peugeot", 
    "Renault", 
    "Toyota", 
    "Volkswagen"
];


carrosArray.forEach((value, key) => {
    carros.innerHTML += `<option value="${key}"> ${value}</option>`;
});