$(document).ready(function(){
    let urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("pid"));
    let personajeId = urlParams.get("pid");

    if(personajeId == null){
        alert("No se ha recibido el ID del Pokemon");
    }else{

        getDetallesPersonaje(personajeId);

        function getDetallesPersonaje(personajeId){
            $.ajax({
                url: `https://swapi.dev/api/people/${personajeId}`,
                method: "GET",
            }).done(function (datosAPI) {
            
                getNombreNumero();
                getSexo();
                getPesoAlturaFechaNac();
                getCaracteristicas();

                function getNombreNumero(){
                    let nombre = datosAPI.name;
                    let numero = datosAPI.url.split("/")[5];

                    let template = `<h1 id="nombre" class="planta text-uppercase me-5" style="font-size: 60px;">${nombre}</h1>
                        <h1 id="numero" class="planta ms-5" style="font-size: 60px;">#${numero}</h1>`
                    
                    $("#nombreNumero").append(template);
                }

                function getSexo(){
                    let sexo = datosAPI.gender;

                    switch(sexo){
                        case "male":
                            let template = `<h2 class="jockey-one-regular text-capitalize" style="color: blue">${sexo} <i class="bi bi-gender-male"></i></h2>`
                            $("#sexo").append(template);
                            break;
                        
                        case "female":
                            let template2 = `<h2 class="jockey-one-regular text-capitalize" style="color: rgb(255, 0, 123)">${sexo} <i class="bi bi-gender-female"></i></h2>`
                            $("#sexo").append(template2);
                            break;

                        default:
                            let template3 = `<h2 class="jockey-one-regular text-capitalize" style="color: #4d4d4d">${sexo} <i class="bi bi-gear-wide"></i></h2>`
                            $("#sexo").append(template3);
                            break;
                    }
                }

                function getPesoAlturaFechaNac(){
                    let peso = datosAPI.mass;
                    let altura = datosAPI.height;
                    let fechaNac = datosAPI.birth_year;

                    let template = `<div style="width: 30%;"><h2>${peso} kg</h2></div>
                            <div style="width: 30%;"><h2>${altura/100} m</h2></div>
                            <div style="width: 30%;"><h2 class="text-capitalize">${fechaNac}</h2></div>`

                    $("#pesoAlturaFechaNac").append(template);
                }

                function getCaracteristicas(){
                    let colorPelo = datosAPI.hair_color;
                    let colorPiel = datosAPI.skin_color;
                    let colorOjo = datosAPI.eye_color;

                    let template = `<div class="w-100 mx-4 d-flex justify-content-center flex-column">
                                    <div><h2 class="gris"><span class="jockey-one-regular stat planta">Color de pelo:</span> <span class="text-capitalize">${colorPelo}</span></h2></div>
                                    <div><h2 class="gris"><span class="jockey-one-regular stat planta">Color de piel:</span> <span class="text-capitalize">${colorPiel}</span></h2></div>
                                    <div><h2 class="gris"><span class="jockey-one-regular stat planta">Color de ojos:</span> <span class="text-capitalize">${colorOjo}</span></h2></div>
                                </div>`
                    
                    $("#caracteristicas").append(template);
                }
            })
        }
    }
});