
var header = async ()=>
{
    const header = new XMLHttpRequest();
    const route = 'partials/header/header.html';
    header.open('GET',route, false);
    header.send(null);
    let req = header.responseText;
    let headerContainer = document.querySelector('header');
    headerContainer.innerHTML = req;
};
header();
//create('articles-section','Esto es un articulo','/img/encrypt.png','imagen','','Esto es una min descripcion dsasdaasd dsa s d a a d s a sddas');