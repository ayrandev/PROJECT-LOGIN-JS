let token = localStorage.getItem('token');

let baseApiUrl = "https://cdbc-187-15-11-114.ngrok-free.app"

let options = {
    method: "POST",
    headers: {
        token: token
    }
}

fetch(`${baseApiUrl}/user/access`, options).then(function(response){
    return response.json();
}).then(function(body){
    if (!body) {
        location.href = "index.html"
    }
})