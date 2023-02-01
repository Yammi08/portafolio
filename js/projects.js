var projects = ()=>
{
    const projects = [
        {
            title:'Encriptador',
            image:'./img/projects/alura-encriptador.PNG',
            imageAlt:'encriptador',
            imageHerf:'https://yammi08.github.io/Alura-Challenge/'
        },
        {
            title:'Ahorcado',
            image:'./img/projects/alura-ahorcado.PNG',
            imageAlt:'ahorcado',
            imageHerf:'https://yammi08.github.io/Ahorcado/'
        },
        {
            title:'Slime run',
            image:'./img/projects/run-slime.png',
            imageAlt:'slime',
            imageHerf:'https://github.com/Yammi08/SlimeRun'
        },
        {
            title:'Generador de habitaciones',
            image:'./img/projects/generate-rooms.png',
            imageAlt:'generate',
            imageHerf:'https://github.com/Yammi08/RandomGenerate'
        }

    ];
    const project = ({title,imageHerf,image,imageAlt})=>
    {
        console.log(title);
            return`
            <div class="container__project">
            <a href= ${imageHerf} class="link__project">
                <div class="container__title">
                    <h3 class="title__project">${title}</h3>
                </div>
                <img src= ${image} alt=${imageAlt} class="image__project">
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