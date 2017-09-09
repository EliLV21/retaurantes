var restaurantes = [
  {
    "nombre": "La Burguesa",
    "direccion": "Calle Cozumel 67, Cuauhtémoc, Roma Norte",
    "lat": "19.4177437",
    "lng": "-99.17081519999999"
  },
  {
    "nombre": "Kitchen 6",
    "direccion": "Teotihuacan 14, Cuauhtemoc,Condesa, 06100",
    "lat": "19.4117916",
    "lng": "-99.16786739999998"
  },
  {
    "nombre": "Tacos Don Juan",
    "direccion": "Calle Juan Escutia 35, Cuauhtémoc, Condesa, 06140",
    "lat": "19.4141603",
    "lng": "-99.1733208"
  },
  {
    "nombre": "Tacos Alvaro Obregon",
    "direccion": "Av. Álvaro Obregón 90, Roma Norte, Roma Nte., 06700",
    "lat": "19.4182268",
    "lng": "-99.15881969999998"
  },
  {
    "nombre": "Pizza Amore",
    "direccion": "Calle Durango 209, Cuauhtémoc, Col. Roma Norte, Roma Nte., 06700",
    "lat": "19.4198751",
    "lng": "-99.16780319999998"
  },
  {
    "nombre": "La Fabbrica Pizza Bar",
    "direccion": "Plaza Villa de Madrid No.22, Cuauhtémoc, Roma Nte., 06700",
    "lat": "19.4194514",
    "lng": "-99.16780319999998"
  },
];


var plantillaRestaurante = '<ul class="collection">' +
 '<li class="collection-item avatar" id="lista">' +
   '<img id="icono" class="circle" src="assets/img/img1.jpg">' +
   '<p data-latitud="__lat__" data-longitud="__lng__" class="nombreLista">__nombre__</p>' +
   '<p class="direccion">__direccion__</p>' +
   '<a href="#!" class="secondary-content"><i id="estrella" class="material-icons">grade</i></a>'
 '</li>' +
'</ul>';

var cargarPagina =  function(){
  $("#search-form").submit(filtrarRestaurantes);
  mostrarRestaurantes();
};

var filtrarRestaurantes = function (e) {
  e.preventDefault();
  var criterioBusqueda = $("#search").val().toLowerCase();
  var restaurantesFiltrados = restaurantes.filter(function(restaurantes){
    return restaurantes.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
  });
  mostrarRestaurantes(restaurantesFiltrados);
};

 var mostrarRestaurantes = function (restaurantes){
   var plantillaFinal = "";
   restaurantes.forEach(function(contacto){
     plantillaFinal += plantillaRestaurante.replace("__nombre__", restaurantes.nombre)
     .replace("__direccion__", restaurantes.direccion)
	 .replace("__lat__", restaurantes.lat)
	 .replace("__lng__", restaurantes.longitud);
   });
   $(".restaurantes").html(plantillaFinal);
   $(".nombreLista").click(cambiarUbicacion);
 };
$(document).ready(cargarPagina);
