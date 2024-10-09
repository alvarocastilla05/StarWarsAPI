$(document).ready(function () {
    getSwapiListV1();

    function getSwapiListV1() {
      $.ajax({
        url: "https://swapi.dev/api/people",
        method: "GET",
      }).done(function (resp) {
        var listadoPersonajes = resp.results;
        listadoPersonajes.forEach(function (personaje) {
            var personajeId = personaje.url.split("/")[5];
            var template = `<div class="card border-0 jockey-one-regular mx-3 my-4" style="width: 290px;">
        
                <a href="./detalles.html?pid=${personajeId}">
                    <div class="container d-flex justify-content-between card-body rounded-4 mt-1 px-2 fondoNegroEstandar sombreado">
                        <!--Número y nombre-->
                        <div class="ms-2">
                            <p class="card-number m-0 mb-1" style="color: #C9C9C9">${personajeId}</p>
                            <h4 class="card-title blanco m-0 text-capitalize">${personaje.name}</h4>
                        </div>
                    </div>
                 </a>

            </div>`;
            $("#data-content").append(template);
        });
      });
    }
  });