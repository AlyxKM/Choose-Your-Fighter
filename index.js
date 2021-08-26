document.addEventListener("DOMContentLoaded", () => {

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

    for(let i = 0; i < fightArr.length; i++) {
        const charObj = fightArr[i];
        const option = document.createElement("option");
        option.textContent = charObj.name;
        option.value = charObj.name;
        selectFighter.appendChild(option);

        selectFighter.addEventListener("change", event => {
            event.preventDefault();
            pickCharacter();
    });

    function pickCharacter() {  
        const charName = document.getElementById("character-name");
        const charImg = document.getElementById("character-image");
        charName.textContent = charObj.name;
        charImg.src = charObj.image
    };
  
};

});

})


    // console.log(nessObj.name);
    // console.log(nessObj.image);
    
//mario[0],link[51],zelda[59],peach[14],kirby[695],pikachu[684/692],samus[555],ness[716]
// keys include name, image, gameSeries
