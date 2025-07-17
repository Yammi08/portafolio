
var projects = ()=>
{
    const projects = [
        {
            title:'Encriptador',
            image:'./img/projects/alura-encriptador.webp',
            imageAlt:'encriptador',
            imageHerf:'https://yammi08.github.io/Alura-Challenge/',
            description:'es una descripcion del proyecto encriptador'
        },
        {
            title:'Ahorcado',
            image:'./img/projects/alura-ahorcado.webp',
            imageAlt:'ahorcado',
            imageHerf:'https://yammi08.github.io/Ahorcado/',
            description:'es una descripcion del proyecto ahoracado'
        },
        {
            title:'Slime run',
            image:'./img/projects/run-slime.webp',
            imageAlt:'slime',
            imageHerf:'https://github.com/Yammi08/SlimeRun',
            description:'es una descripcion del proyecto slime run'
        },
        {
            title:'Generador de habitaciones',
            image:'./img/projects/generate-rooms.webp',
            imageAlt:'generate',
            imageHerf:'https://github.com/Yammi08/RandomGenerate',
            description:'es una descripcion del proyecto generador de habitaciones'
        },
        {
            title:'mensajeria instantanea',
            image:'./img/projects/mensajeria.webp',
            imageAlt:'Message',
            imageHerf:'https://github.com/Yammi08/RandomGenerate',
            description:'es una descripcion del proyecto generador de habitaciones'
        },
        {
            title:'you2be',
            image:'./img/projects/you2be.webp',
            imageAlt:'generate',
            imageHerf:'https://github.com/Yammi08/you2be',
            description:'es una descripcion del proyecto you2be'
        }

    ];
    
    const project = ({title,imageHerf,image,imageAlt,description})=>
    {
            return`
            <div class="container__project">
            
            <a href= ${imageHerf} class="link__project">
                
                <div class="container__title">
                    <h3 class="title__project">${title}</h3>
                </div>
                <img src= ${image} alt=${imageAlt} class="image__project">
                <div class="container__description">
                    <h3 class="desciption__project">${description}</h3>
                </div>
                <div class="selection__bar hidden__bar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </div>
            </a>
            
            </div>`;
    }
    let items = '';
    projects.forEach(element=>
    {
        items += project(element);
    });
    const contentProjects = document.querySelector('.container__projects');
    contentProjects.innerHTML = items;
}
projects();