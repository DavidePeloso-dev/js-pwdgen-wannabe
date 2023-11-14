//chiedere il nome e dichiararlo in variabile
const user_first_name = prompt('Insert your first name');
//chiedere il cognome e dichiararlo in variabile
const user_last_name = prompt('Insert your last name');
//chiedere il colore e dichiararlo in variabile
const favourite_color = prompt('Insert your favourite color');

//controllare il corretto funzionamento di quanto sopra in console
console.log(user_first_name , user_last_name , favourite_color);

//dichiarare la password
const password = `${user_first_name}${user_last_name}${favourite_color}23`;

//controllare la password in console
console.log(password);
//inserire la password in pagina
document.getElementById('show_password').innerHTML = password;