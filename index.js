const input = document.getElementById("input")
const button = document.getElementById("button")

var audio = document.getElementById('audio');
var source = document.getElementById('audioSource');

button.addEventListener("click", () => {

    text = document.querySelector('input').value

    fetch("http://speechtotextnode-env.eba-k4eqsyhm.us-east-1.elasticbeanstalk.com/synthesis", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({ text : text}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => { 
        return response.json()
    }).then(text => {
        console.log(text)

        source.src = "http://speechtotextnode-env.eba-k4eqsyhm.us-east-1.elasticbeanstalk.com/audio"

        audio.load(); 
        audio.play(); 

    }).catch((err) => {
        console.log("Err: ", err)
    })

})