const plants = [
    {
        name: "Aloe Vera",
        description: "El Aloe Vera es conocida por sus propiedades curativas y su capacidad de prosperar en condiciones áridas.",
        link: "https://es.wikipedia.org/wiki/Aloe_vera"
    },
    {
        name: "Lavanda",
        description: "La lavanda es famosa por su fragancia relajante y sus hermosas flores púrpuras.",
        link: "https://es.wikipedia.org/wiki/Lavanda"
    },
    {
        name: "Bambú",
        description: "El bambú es una planta increíblemente resistente que puede crecer rápidamente y simboliza la fuerza y flexibilidad.",
        link: "https://es.wikipedia.org/wiki/Bambusoideae"
    }
];

function getRandomPlant() {
    return plants[Math.floor(Math.random() * plants.length)];
}

function discoverPlant() {
    const name = document.getElementById("nameInput").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");

    if (name === "clara") {
        const rose = {
            name: "Rosa",
            description: "Claramente eres una rosa porque te rosan y te abres como una rosa.",
            link: "https://es.wikipedia.org/wiki/Rosa"
        };
        resultDiv.innerHTML = `Hola Clara, eres una <strong>${rose.name}</strong>! <br> ${rose.description} <br> <a href="${rose.link}" target="_blank">Más información</a>`;
    } else {
        const plant = getRandomPlant();
        resultDiv.innerHTML = `Hola ${name}, eres un(a) <strong>${plant.name}</strong>! <br> ${plant.description} <br> <a href="${plant.link}" target="_blank">Más información</a>`;
    }
}
