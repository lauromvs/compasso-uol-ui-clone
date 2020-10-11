setInterval(revert, 6500);
// setInterval(changeBanner, 13000);
let bannerCount = 1;
let bannerPath = './assets/banner-people'
let even = false;

function revert() {
    const type1 = document.getElementById('type1')
    // type1.classList.toggle('type1');
    // type1.classList.toggle('type1-back');
    type1.classList.toggle('type-back-1');

    const type2 = document.getElementById('type2');
    // type2.classList.toggle('type2');
    // type2.classList.toggle('type2-back');
    type2.classList.toggle('type-back-2');

    if (even) changeBanner();

    even = !even;
}

function changeBanner() {
    if (bannerCount == 5) {
        bannerCount = 1;
    }
    switch (bannerCount) {

        case 1:
            document.getElementById('head-banner').style.backgroundImage = 'url(./assets/banner-people4.jpg)';
            document.getElementById('type1').innerHTML = 'Avance_'
            document.getElementById('type2').innerHTML = 'Cultivamos o talento das pessoas.'
            break;

        case 2:
            document.getElementById('head-banner').style.backgroundImage = 'url(./assets/banner-people2.jpg)';
            document.getElementById('type1').innerHTML = 'Conquiste_'
            document.getElementById('type2').innerHTML = 'Ajudamos nossos clientes a liderarem seus mercados.'
            break;

        case 3:
            document.getElementById('head-banner').style.backgroundImage = 'url(./assets/banner-people3.jpg)';
            document.getElementById('type1').innerHTML = 'Cresça_'
            document.getElementById('type2').innerHTML = 'Construímos soluções de transformação digital.'
            break;

        case 4:
            document.getElementById('head-banner').style.backgroundImage = 'url(./assets/banner-people1.jpg)';
            document.getElementById('type1').innerHTML = 'Transforme_'
            document.getElementById('type2').innerHTML = 'Utilizamos tecnologias estado-da-arte pensadas no seu negócio.'
            break;

    }

    bannerCount = bannerCount + 1;
}