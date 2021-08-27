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

    // const selectFighter = document.querySelector(".select-fighter");
    // const selectOpponent = document.querySelector(".select-opponent");

    const myFighters = document.getElementById("my-fighter");
    const myOpponents = document.getElementById("my-opponent");


    fightArr.forEach(fightObj => {
        const fightImg = document.createElement("img");
        fightImg.src = fightObj.image;
        myFighters.append(fightImg);

        fightImg.addEventListener("click", event => {
            const selectFighterImage = document.querySelector("img#fighter-image");
            selectFighterImage.src = fightObj.image;

            const selectFighterName = document.querySelector("h1#fighter-name");
            selectFighterName.innerHTML = fightObj.name;
        });
        
    });

    oppArr.forEach(oppObj => {
        const oppImg = document.createElement("img");
        oppImg.src = oppObj.image;
        myOpponents.append(oppImg);

        oppImg.addEventListener("click", event => {
            console.log(oppObj)
            const selectOpponentImage = document.querySelector("img#opponent-image");
            selectOpponentImage.src = oppObj.image;

            const selectOpponentName = document.querySelector("h1#opponent-name");
            selectOpponentName.innerHTML = oppObj.character;
        })
    })


    });
       
    const createUsername = document.getElementById("submit-username");

    createUsername.addEventListener("submit", event => {
        event.preventDefault();
        debugger;
        const nameInput = event.target.name.value;
        const usernameDisplay = document.querySelector("#username-display");
        usernameDisplay.textContent = nameInput;
        createUsername.reset();

    }
    )


});

