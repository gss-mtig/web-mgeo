proj4.defs("EPSG:25831","+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

const btnTransformar = document.querySelector(".btn-tranformar");

btnTransformar.addEventListener("click", (evt) => {
    console.log("Transformar coordenadas");
    const srs_origen = document.getElementById("origen").value;
    const coordTransformada = transformarCoordenadas(41.5, 2, srs_origen, "EPSG:3857");
    document.getElementById("respuesta").innerHTML = coordTransformada;
});

const transformarCoordenadas = (lat, lon, epsg_in, epsg_out) => {

    const coordTransformada = proj4(epsg_in, epsg_out, [lon, lat])

    return coordTransformada;

}

const btnGuardar = document.querySelector(".btn-guardar");
btnGuardar.addEventListener("click", async (evt) => {
    console.log("Guardar coordenadas");
    const srs_origen = document.getElementById("origen").value;
    const coordTransformada = transformarCoordenadas(41.5, 2, srs_origen, "EPSG:3857");

    const codi_epsg_origen = srs_origen.replace("EPSG:","");
    const response = await fetch("http://localhost:3000/api/transformaciones/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            srs_origen: codi_epsg_origen,
            x_origen: 2,
            y_origen: 41.5,
            srs_destino: "3857",
            x_destino: coordTransformada[0],
            y_destino: coordTransformada[1]
        }),
        cache: 'no-cache'
    });

    const data = await response.json();

    console.log(data);
});
