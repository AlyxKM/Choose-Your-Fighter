const Url = "https://superheroapi.com/api/10218974527823084/2"
fetch(Url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    mode: "no-cors"
})

.then(res => res.json())
.then(data => console.log(data))

console.log("hello!")

//10218974527823084