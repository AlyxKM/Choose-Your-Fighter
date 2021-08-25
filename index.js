const Url = "https://www.amiiboapi.com/api/amiibo"
fetch(Url)
.then(res => res.json())
.then(data => {
    const marioObj = data.amiibo[0];
    const peachObj = data.amiibo[14];
    const linkObj = data.amiibo[51];
    const zeldaObj = data.amiibo[59];
    const samusObj = data.amiibo[555];
    const pikachuObj = data.amiibo[684];
    const kirbyObj = data.amiibo[695];
    const nessObj = data.amiibo[716];

    console.log(nessObj.name);
    console.log(nessObj.gameSeries);
    
//mario[0],link[51],zelda[59],peach[14],kirby[695],pikachu[684/692],samus[555],ness[716]
// keys include name, image, gameSeries
})
