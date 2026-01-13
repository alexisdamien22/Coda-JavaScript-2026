const section = document.getElementById('user-infos');
let userName = prompt("Quel est votre prénom");
let age = Number(parseInt(prompt("Quel est votre age ?"),0));
const userData = [userName,age];
section.innerHTML += "<p>Bonjour "+userData[0]+"</p><p> vous avez "+userData[1]+"</p>";