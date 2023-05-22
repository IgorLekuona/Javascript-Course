// Ejercicio 1
let person = {
  name: "Lucas",
  age: 27,
  profession: "Developer",
}

let ej1 = (obj) => Object.values(obj);
console.log(ej1(person));

// Ejercicio 2

// Ejercicio 3
function InvertirCadena(cadena = "") {
  this.cadenaInvertir = cadena;
  this.invertir = function() {
    if (this.cadenaInvertir === "") throw new Error("Empty string!");
    return this.cadenaInvertir.split("").reverse().join("");
  };
}

try {
  // const invertirCadena = new InvertirCadena();
  // console.log(invertirCadena.invertir());
  const invertirCadena = new InvertirCadena("Hello World!");
  console.log(invertirCadena.invertir());
  invertirCadena.nuevoMetodo?.();
} catch (err) {
  console.error(err);
}

// Ejercicio 4
class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username === "admin" && this.password === "passwd") alert("User logged in!!");
    else alert("Username or password incorrect!!");
  }
}

let login = new Login("admin", "passwd");
login.login();
let logbad = new Login("pepe", "bad");
logbad.login();

// Ejercicio 5
let loginBtn = document.getElementById("loginSuccess");
let logbadBtn = document.getElementById("loginFailure");

loginBtn.addEventListener("click", function() {
  let login = new Login("admin", "passwd");
  login.login();
});

logbadBtn.addEventListener("click", function() {
  let logbad = new Login("pepe", "bad");
  logbad.login();
});

// Ejercicio 6
let loginAsyncBtn = document.getElementById("loginSuccessAsync");
let logbadAsyncBtn = document.getElementById("loginFailureAsync");

let loginWithUsername = (username, password) => {
  return new Promise(function (resolve, rejected) {
    setTimeout(() => {
      if (username === "admin" && password === "passwd") {
        resolve("User logged in");
      } else {
        rejected("Error: invalid username or password");
      }
    }, 200);
  });
};

loginAsyncBtn.addEventListener("click", async () => {
  loginWithUsername("admin", "passwd")
    .then((resolved) => alert(resolved))
    .catch((rejected) => alert(rejected));
});

logbadAsyncBtn.addEventListener("click", async () => {
  loginWithUsername("pepe", "bad")
    .then((resolved) => alert(resolved))
    .catch((rejected) => alert(rejected));
});