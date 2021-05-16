function enviar() {
    let usuario = document.getElementById("usuario").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            return firebase.auth().currentUser.updateProfile({
                displayName: usuario
            })
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error code: " + errorCode + " " + errorMessage);
        }).then(function () {
            verificar();
        });
}

function verificar() {
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function () {
        // Email sent.
    }).catch(function (error) {
        // An error happened.
    });
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        if (user.emailVerified==false){
          console.log("Su mail no esta verificado");
        }else{
            document.getElementById("logIn").innerHTML = user.displayName;
            document.getElementById("logOut").innerHTML = `<button onclick="salir()">Salir</button>`
        }
        // ...
    } else {
        // User is signed out
        document.getElementById("logIn").innerHTML = "No Logueado";
        document.getElementById("logOut").innerHTML = ``;
    }
})

function acceder() {
    let email = document.getElementById("emailLogIn").value;
    let password = document.getElementById("passwordLogIn").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
            if(user.user.emailVerified===false){
                console.log("Su mail no esta verificado acceder()");
            }
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error code: " + errorCode + " " + errorMessage);
        });
}

function salir() {
    firebase.auth().signOut()
        .then(() => {
            console.log("logOut exitosamente");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error code: " + errorCode + " " + errorMessage);
        })
}

