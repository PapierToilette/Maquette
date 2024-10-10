const buttonP1_1 = document.getElementById('buttonP1_1');
const buttonP1_2 = document.getElementById('buttonP1_2');
const buttonP1_3 = document.getElementById('buttonP1_3');
const buttonP1_4 = document.getElementById('buttonP1_4');

const texte_background =  document.getElementById('texte_background');

/* CODE PAS OPTIMISÉ

const txtP1_1 = "ÉVOLUER, PERFORMER, <br> TRANSFORMER, <br> PENSER EN ATHLÈTE!";
const txtP1_2 = "IDENTIFIER <br> LE BON TALENT";
const txtP1_3 = "ASSURER <br> LA TRANSITION";
const txtP1_4 = "FACILITER <br> LE LEADERSHIP <br> DEVELOPMENT";
const txtP1_5 = "ACCÉLÉRER <br> LA TRANSFORMATION <br> DIGITALE & RSE";

let reset1 = 0;
let reset2 = 0;
let reset3 = 0;
let reset4 = 0;

buttonP1_1.addEventListener('click', function() {
    if (reset1 == 1) {
        texte_background.innerHTML = txtP1_1;
        reset1 = 0;
    } else {
        texte_background.innerHTML = txtP1_2;
        reset1 = 1;
        reset2 = 0;
        reset3 = 0;
        reset4 = 0;
    } 
});
buttonP1_2.addEventListener('click', function() {
    if (reset2 == 1) {
        texte_background.innerHTML = txtP1_1;
        reset2 = 0;
    } else {
        texte_background.innerHTML = txtP1_3;
        reset1 = 0;
        reset2 = 1;
        reset3 = 0;
        reset4 = 0;
    }
});
buttonP1_3.addEventListener('click', function() {
    if (reset3 == 1) {
        texte_background.innerHTML = txtP1_1;
        reset3 = 0;
    } else {
        texte_background.innerHTML = txtP1_4;
        reset1 = 0;
        reset2 = 0;
        reset3 = 1;
        reset4 = 0;
    }
});
buttonP1_4.addEventListener('click', function() {
    if (reset4 == 1) {
        texte_background.innerHTML = txtP1_1;
        reset4 = 0;
    } else {
        texte_background.innerHTML = txtP1_5;
        reset1 = 0;
        reset2 = 0;
        reset3 = 0;
        reset4 = 1;
    }
});

*/

/* Merci chatgpt */
const texts = [
    "ÉVOLUER, PERFORMER, <br> TRANSFORMER, <br> PENSER EN ATHLÈTE!", // index 0
    "IDENTIFIER <br> LE BON TALENT",                                 // index 1
    "ASSURER <br> LA TRANSITION",                                    // index 2
    "FACILITER <br> LE LEADERSHIP <br> DEVELOPMENT",                 // index 3
    "ACCÉLÉRER <br> LA TRANSFORMATION <br> DIGITALE & RSE"           // index 4
];

let txt_index = 0;

const handleButtonClick = (index) => {
    if (txt_index === index) {
        texte_background.innerHTML = texts[0];
        txt_index = 0;
    } else {
        texte_background.innerHTML = texts[index];
        txt_index = index;
    }
};

buttonP1_1.addEventListener('click', () => handleButtonClick(1));
buttonP1_2.addEventListener('click', () => handleButtonClick(2));
buttonP1_3.addEventListener('click', () => handleButtonClick(3));
buttonP1_4.addEventListener('click', () => handleButtonClick(4));