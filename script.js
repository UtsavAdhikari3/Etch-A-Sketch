const mainBody = document.querySelector("body")
const buttonDiv = document.createElement("div");
buttonDiv.classList.add("buttonDiv")
mainBody.appendChild(buttonDiv);

const myButton = document.createElement("button");
myButton.classList.add("myButton")
myButton.textContent = "Click me to create your own grid";
buttonDiv.appendChild(myButton);
const container = document.getElementById("container");

const mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv")
mainBody.appendChild(mainDiv)

const myDiv = document.createElement("div");
myDiv.classList.add("container")
mainDiv.appendChild(myDiv)

const modernColors = [
    "#FF6F61", // Coral
    "#6B5B95", // Purple Haze
    "#88B04B", // Greenery
    "#F7CAC9", // Rose Quartz
    "#92A8D1", // Serenity
    "#955251", // Marsala
    "#B565A7", // Amethyst Orchid
    "#009B77", // Teal
    "#DD4124", // Red Orange
    "#D65076", // Radiant Orchid
    "#45B8AC", // Turquoise
    "#EFC050", // Mimosa
    "#5B5EA6", // Royal Blue
    "#9B2335", // Crimson
    "#DFCFBE", // Sand Dollar
    "#BC243C", // Scarlet
    "#C3447A", // Fuchsia Rose
    "#98B4D4", // Baby Blue
    "#F1948A", // Soft Pink
    "#5A7247", // Olive Green
];

function makeDiv(rows, cols) {
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div"); // Create a new div for each cell
        cell.classList.add("cells");
        // cell.innerText = (c + 1); // Optional: add text inside cells
        
        // Add event listener to each cell
        cell.addEventListener("mouseover", () => {
            const randomNumber = Math.floor(Math.random() * modernColors.length);
            cell.style.backgroundColor = `${modernColors[randomNumber]}`; // Change background color on hover
        });

        myDiv.appendChild(cell); // Append the cell to the container
    }
}

makeDiv(12, 12); // Creates a 16x16 grid of cells
