const getData = async function(API){
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    return data;
}

getData('https://api.datos.gob.mx/v1/data-core');