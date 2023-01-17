function create(id,tittle,image,altname,link,minDescription)
{
    let result = 
    `
    <div class="project">
        <h1 class="project-tittle">${tittle}</h1>
        <a herf=${link}><img class ="project-image" src="${image}" alt = "${altname}"></a>
        <h2 class="project-description">${minDescription}</h2>
    </div>
    `;
    let text = document.getElementById(id);
    text.innerHTML += result;
}
//create('articles-section','Esto es un articulo','/img/encrypt.png','imagen','','Esto es una min descripcion dsasdaasd dsa s d a a d s a sddas');