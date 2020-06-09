window.addEventListener('load', () => {
    console.log("hello")
    let photo = document.querySelector('.photo');
    let fundo = document.querySelector('.fundo');
    let back = document.querySelector('.back');
    let back1 = document.querySelector('.back1');
    let linkedin = document.querySelector('#linkedin')
    let link_linkedin = document.querySelector('#link_linkedin')

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

    link_linkedin.addEventListener('mouseover', () => {
        linkedin = linkedin.src='fotos webt/linkedinYellow.png'
    })

    link_linkedin.addEventListener('mouseout', () => {
        linkedin = linkedin.src='fotos webt/linkedin.png'
    })

    
});






