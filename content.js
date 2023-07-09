function apiCall(){
    fetch("https://random-word-api.herokuapp.com/word")
    .then(response => response.json())
    .then(data => {
        console.log(data[0]);
        document.getElementById("random").innerText= data[0];
    } )
    .catch(error => console.log(error));
}
apiCall();