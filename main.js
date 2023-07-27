const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
	event.preventDefault();
    const value = document.querySelector("#name").value
    console.log(value);
	const paragraph = document.createElement("p");
    paragraph.textContent = value;
    form.appendChild(paragraph);
    
});

// console.log("Ejercicio --------- 2");
const formulario = document.querySelector(".form2")
formulario.addEventListener("submit", (event)=> {
    event.preventDefault();

    const inputValue = document.querySelector("#data").value;
    const errorMessage = document.createElement("h3")
    errorMessage.textContent = "Este campo es obligatorio";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "9px";
    
    if(inputValue.length === 0){
        console.log("Este campo es obligatorio");
        formulario.appendChild(errorMessage);
    }
})
console.log("Ejercicio ---- 3");

// El siguiente formulario sólo acepta números. Cuando se introduzca un número, en el <div> que hay debajo deben aparecer tantos botones como el número que hayas introducido en el <input>. Además:
// Los botones deben contener como texto el número que le corresponda: 1 el primero, 2 el segundo, etc.
// Los botones pares tendrán un fondo de un color, los impares de otro.
// Los botones con números múltiplos de 10 tendrán otro color distinto.

const formulario3 = document.querySelector(".form3");
const input = document.querySelector("#number");
const div = document.querySelector(".results-container");
formulario3.addEventListener("submit", (event)=> {
    event.preventDefault();
    console.log(event.target);
})