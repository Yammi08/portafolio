var projects = ()=>
{
    const projects = [
        {
            title: 'carlos estratega',
            imageHerf:'',
            image:'',
            imageAlt:'aasas'
        }
    ];
    const project = ({title,imageHerf,image,imageAlt})=>
    {
        console.log(title);
            return`
            <div class="container__project">
            <h3 class="title__project">${title}</h3>
            <a href= ${imageHerf} class="link__project">
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