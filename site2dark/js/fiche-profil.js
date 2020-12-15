// DOM

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const greeting2 = document.getElementById('greeting2');
const plan = document.getElementById('plan');
const focus = document.getElementsByClassName(".focus");
let mon_image1 = document.querySelector(".main_img");
let mon_image2 = new Image(1050, 850);
mon_image2.src = "https://media2.giphy.com/media/Ju7l5y9osyymQ/giphy.gif?cid=ecf05e4795086f28e61ad276590a06c3215bc85e9e271da8&rid=giphy.gif";

let the_button = document.querySelector(".light");
let col1 = document.querySelector(".mpart1");
let col2 = document.querySelector(".mpart2");
let col3 = document.querySelector(".mpart3");
let col4 = document.querySelector(".mfooter");
let btns1 = document.querySelector(".bt_cmp1");
let btns2 = document.querySelector(".bt_cmp2");
let btns3 = document.querySelector(".bt_cmp3");

let button_off = document.querySelector(".bub_off");
let button_grey = document.querySelector(".bub_grey");
let button_green = document.querySelector(".bub_green");
let button_red = document.querySelector(".bub_red");
let button_blue = document.querySelector(".bub_blue");


// Quand on clique sur les boutons de gauche, ça active les fonctions voulues
button_off.addEventListener("click", bg_off);
button_grey.addEventListener("click", sw_grey);
button_green.addEventListener("click", sw_green);
button_red.addEventListener("click", sw_red);
button_blue.addEventListener("click", sw_blue);

// Bouton pour toggle le background image, si il existe, on l'enlève, sinon on le remet
function bg_off() {
    if (col2.style.backgroundImage != "") {
    col2.style.backgroundImage = "";
    }
    else {
        set_bg_greet();
    }
}

// Toutes les fonctions de swap de thème
function sw_grey() {
    col1.style.backgroundColor = "#333333";
    col2.style.backgroundColor = "#182126";
    col3.style.backgroundColor = "#333333";
    col4.style.backgroundColor = "#4D4D4D";
    btns1.style.color = "white";
    btns2.style.color = "white";
    btns3.style.color = "white";
    btns1.style.textShadow = "2px 2px black";
    btns2.style.textShadow = "2px 2px black";
    btns3.style.textShadow = "2px 2px black";
}

function sw_green() {
    col1.style.backgroundColor = "#081C15";
    col2.style.backgroundColor = "#1B4332";
    col3.style.backgroundColor = "#2D6A4F";
    col4.style.backgroundColor = "#40916C";
    btns1.style.color = "white";
    btns2.style.color = "white";
    btns3.style.color = "white";
    btns1.style.textShadow = "2px 2px black";
    btns2.style.textShadow = "2px 2px black";
    btns3.style.textShadow = "2px 2px black";
}

function sw_red() {
    //  swap_images();

    col1.style.backgroundColor = "#F94144";
    col2.style.backgroundColor = "#F3722C";
    col3.style.backgroundColor = "#F8961E";
    col4.style.backgroundColor = "#F9C74F";
    btns1.style.color = "black";
    btns2.style.color = "black";
    btns3.style.color = "black";
    btns1.style.textShadow = "2px 2px white";
    btns2.style.textShadow = "2px 2px white";
    btns3.style.textShadow = "2px 2px white";

}

function sw_blue() {
    col1.style.backgroundColor = "#043540";
    col2.style.backgroundColor = "#0E6973";
    col3.style.backgroundColor = "#21A6A6";
    col4.style.backgroundColor = "#a0f0e1";
    btns1.style.color = "white";
    btns2.style.color = "white";
    btns3.style.color = "white";
    btns1.style.textShadow = "2px 2px black";
    btns2.style.textShadow = "2px 2px black";
    btns3.style.textShadow = "2px 2px black";
}

function swap_images() {
    let temp = mon_image1.src;
    mon_image1.src = mon_image2.src;
    mon_image2.src = temp;
}

function show_time() {
    let auj = new Date(),
        heures = auj.getHours(),
        mins = auj.getMinutes(),
        secs = auj.getSeconds();

    // Set AM or PM
    const amPm = heures >= 12 ? 'PM' : 'AM';

    // 12hr format
    heures = heures % 12 || 12;

    // Output Time
    time.innerHTML = `${heures}<span>:</span>${add_zero(mins)}<span>:</span>${add_zero(secs)}`;

    setTimeout(show_time, 1000);
}


function add_zero(nbr) {
    // Checker ce que fait précisément parseInt, et revoir la sytanxe à l'intérieur, importante
    return (parseInt(nbr, 10) < 10 ? '0' : '') + nbr;
}

// Changer le background et changer le greeting
function set_bg_greet() {
    let auj = new Date(),
        heures = auj.getHours();

    if (heures < 12 && heures > 5) 
    {
        // Matin
        col2.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.textContent = 'Bonne matinée';
        greeting2.textContent = 'Je vous souhaite une merveilleuse journée';
        plan.textContent = 'C\'est quoi le plan pour ce matin?';
    }
    else if (heures < 18) 
    {
        // Aprem
        col2.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Bonne après-midi';
        greeting2.textContent = 'J\'espère que vous avez siesté';
        plan.textContent = 'C\'est quoi le plan pour cette après-midi?';
    }
    else if (heures < 23)
    {
        // Soirée
        col2.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'Bonne soirée';
        greeting2.textContent = 'Que faites vous de votre soirée?';
        plan.textContent = 'C\'est quoi le plan pour ce soir?';
    }
    else
    {
        // Nuit
        col2.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'Bonne nuit';
        greeting2.textContent = 'Il faut dormir cher visiteur!';
        plan.textContent = 'Pas de plan, VRAIMENT DORMEZ';
    }
}
// Run
show_time();

set_bg_greet();