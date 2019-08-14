eventListeners();

function eventListeners() {
     document.querySelector('#formulario').addEventListener('submit', agregarMarcador);
    }

function agregarMarcador(e){

    e.preventDefault();

    const descripcion = document.querySelector('#descripcion').value;
    const direccion = document.querySelector('#direccion').value;
    const telefono = document.querySelector('#telefono').value;
    const categoria = document.getElementById('categoria');
    const selected = categoria.options[categoria.selectedIndex].text;
    const coordenada_x = document.getElementById('coordenadas-x').value;
    const coordenada_y = document.getElementById('coordenadas-y').value;



    const coordenadas = [coordenada_x, coordenada_y];
	const marcador = L.marker(coordenadas)
    marcador.bindPopup('<p><b>Descripcion: </b>'+descripcion+'</p><p><b>Direccion: </b>'+direccion+'</p><p><b>Tel: </b> '+telefono+'</p><p><b>Categoria: </b> '+selected+'</p><p><b>Cood(x,y): </b>'+coordenada_x+','+coordenada_y+'</p>');
    marcador.addTo(map);
    formulario.reset();
}
