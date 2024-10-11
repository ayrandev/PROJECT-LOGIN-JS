let baseApiUrl = "https://cdbc-187-15-11-114.ngrok-free.app"

//REGISTER:

let formRegister = document.getElementById('form-register');
if(formRegister){
    formRegister.addEventListener('submit', function (event){
        event.preventDefault();
        let inputName = formRegister.querySelector("#input-name");
        let inputEmail = formRegister.querySelector("#input-email");
        let inputPassword = formRegister.querySelector("#input-password");
        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: inputName.value,
                email: inputEmail.value,
                password: inputPassword.value
            })
        }
        fetch(`${baseApiUrl}/user/create`, options).then(function(response) {
            if (!response.ok){
                alert("Erro ao criar ususario");
                return;
            }
            return response.json();
        }).then (function(body) {
            if (body){
                location.href = "index.html";
            }
            
        });
        
    });
}


//LOGIN:

let formLogin = document.getElementById('form-login');
if(formLogin){
    formLogin.addEventListener('submit', function(event){
        event.preventDefault();
        let inputEmail = document.querySelector('#input-email');
        let inputPassword = document.querySelector('#input-password');

        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: inputEmail.value,
                password: inputPassword.value
            })
        }

        fetch(`${baseApiUrl}/user/login`, options).then(function(response){
            return response.json();
        }).then(function(body){
            localStorage.setItem("token", body.token);
            location.href = "restrict.html";
        })

    });
}
