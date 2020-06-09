window.addEventListener('load', () => {
    console.log("hello")
    let photo = document.querySelector('.photo');
    let fundo = document.querySelector('.fundo');
    var back = document.querySelector('.back');
    var back1 = document.querySelector('.back1');

    setTimeout(() => {
        let loader = document.querySelector('.loader');
    let fundo = document.querySelector('.fundo');

    loader.style.opacity = 0;
    loader.style.display = 'none';

    fundo.style.display = 'flex';
    fundo.style.opacity = 1;
    }, 2500);

    window.location = "#fundinho";

    back.onclick = function () {
    window.location = "#fundinho";
    }

    back1.onclick = function () {
        window.location = "#fundinho";
        }

    photo.addEventListener('click', () => {
    console.log(photo);
    window.scrollTo(0, `${-500}px`);
  
    })
});






