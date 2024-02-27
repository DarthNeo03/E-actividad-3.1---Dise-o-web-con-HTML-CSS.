//Script para enviar el formulario a la DB, a través de la API-Rest
const urlSubs = "http://localhost:3000/api/subscribe";

const form1 = document.querySelector("#contact-form");
form1.addEventListener("submit", evento => {
    evento.preventDefault();
    const dataForm = Object.fromEntries(new FormData(evento.target));
    //console.log(JSON.stringify(dataForm));

    fetch(urlSubs, {
        method: "POST",
        body: JSON.stringify(dataForm),
        headers: {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
    })
        .then(res => console.log(res.json()))
        .catch(e => console.error(e));
})






//Para comprobar si se guardaron los datos en el servidor
async function consultar() {
    let response = await fetch(urlSubs, {
        method: "GET",
        headers: {
            "Accept": "*/*",
        }
    });
    let data = await response.text();
    console.log(data)
    return data;
}


//La función anterior se realizó únicamente con fines demostrativos. No es correcto conceder el acceso a esos datos a cualquier usuario.