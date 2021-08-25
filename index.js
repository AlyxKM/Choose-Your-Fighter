const Url = "https://www.amiiboapi.com/api/amiibo"
fetch(Url)
.then(res => res.json())
.then(data => {
    const mario = data.amiibo[0];
    const peach = data.amiibo[14];
    const link = data.amiibo[51];
    const zelda = data.amiibo[59];
    const samus = data.amiibo[555];
    const pikachu = data.amiibo[684];
    const kirby = data.amiibo[695];
    const ness = data.amiibo[716];

    const fightArr = [mario, peach, kirby, ness];
    const oppArr = [link, zelda, samus, pikachu];

    const selectFighter = document.querySelector(".select-fighter");
    const selectOpponent = document.querySelector(".select-opponent");

    // console.log(fightArr);
    // console.log(oppArr);

    const pickCharacter = charObj => {  
        const charName = document.getElementById("character-name");
        const charImg = document.getElementById("character-image");
        charName.textContent = charObj.name;
        charImg.src = charObj.image
    };

    fightArr.forEach(charObj => {
        selectFighter.addEventListener("change", event => {
            event.preventDefault();
            pickCharacter(charObj);
            console.log(event.target.value)
         });
    });
    

    

});



    // console.log(nessObj.name);
    // console.log(nessObj.image);
    
//mario[0],link[51],zelda[59],peach[14],kirby[695],pikachu[684/692],samus[555],ness[716]
// keys include name, image, gameSeries
