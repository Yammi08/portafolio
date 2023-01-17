class project
{
    constructor()
    {
        this.title='';
        this.image='';
        this.imageHerf='';
        this.imageAlt='';
    }
    toJson()
    {
        const ob = {
            'title':this.title,
            'image':this.image,
            'imageHerf':this.imageHerf,
            'imageAlt':this.imageAlt
        }
        return ob;
    }
}
module.exports = project;