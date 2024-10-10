const buttons = [
    document.getElementById('buttonP1_1'),
    document.getElementById('buttonP1_2'),
    document.getElementById('buttonP1_3'),
    document.getElementById('buttonP1_4')
];

const texte_background =  document.getElementById('texte_background');

const page1 = document.querySelector('.page1');

function changeBackgroundImage(newImageUrl) {
    page1.style.backgroundImage = `url(${newImageUrl})`;
}

const texts = [
    "ÉVOLUER, PERFORMER, <br> TRANSFORMER, <br> PENSER EN ATHLÈTE!", // index 0
    "IDENTIFIER <br> LE BON TALENT",                                 // index 1
    "ASSURER <br> LA TRANSITION",                                    // index 2
    "FACILITER <br> LE LEADERSHIP <br> DEVELOPMENT",                 // index 3
    "ACCÉLÉRER <br> LA TRANSFORMATION <br> DIGITALE & RSE"           // index 4
];

const imgs = [
    'img/fond1.jpg',
    'img/fond2.jpg',
    'img/fond3.jpg',
    'img/fond4.jpg',
    'img/fond5.jpg'
];

const colors = [
    'red',
    'cyan',
    'green',
    'yellow'
];

let txt_index = 0;

const handleButtonClick = (index) => {
    if (txt_index === index) {
        buttons[index].style.backgroundColor('white');
        texte_background.innerHTML = texts[0];
        changeBackgroundImage(imgs[0]); 
        txt_index = 0;
    } else {
        buttons[index].style.backgroundColor('white');
        texte_background.innerHTML = texts[index];
        changeBackgroundImage(imgs[index]); 
        txt_index = index;
        buttons[index].style.backgroundColor(colros[index]);
    }
};

buttonP1_1.addEventListener('click', () => handleButtonClick(1));
buttonP1_2.addEventListener('click', () => handleButtonClick(2));
buttonP1_3.addEventListener('click', () => handleButtonClick(3));
buttonP1_4.addEventListener('click', () => handleButtonClick(4));