document.addEventListener('DOMContentLoaded', () => {

//------Navbar
    const navX = document.querySelector('.nav-xmark');
    const menu = document.querySelector('.menu');
    const bacX = document.querySelector('.bacX');

    menu.onclick = () => {

        bacX.style.top = '0';

    };

    navX.onclick = () => {

        bacX.style.top = '-100px';

    };

    //------------Background Sound ------

    const soundBtn = document.querySelector('#sound');
    const setAudio = new Audio('./images/sound.mp3');

    soundBtn.onclick = () => {
        setAudio.play()
    };

//----About---------
    const aboutBtn = document.querySelector('.aboutBtn');
    const aboutNON = document.querySelector('.aboutNON');
    const infoX = document.querySelector('.infoX');

    aboutBtn.onclick = () => {

        aboutNON.style.display = 'block';
        setAudio.play();

    };

    infoX.onclick = () => {

        aboutNON.style.display = 'none';
        setAudio.pause()

    };

//-------Skills

//------ Go Back

    let backBtn = document.querySelector('#backBtn');

    backBtn.onclick = () => {

        window.history.back(-1);

    };  

})
