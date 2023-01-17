const express = require('express');
const dotenv = require('dotenv');

const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');

const path = require('path');
const fs = require('fs');


dotenv.config();


const app = express();
//middleware
app.set('views',path.join(__dirname,'./public/views'));
app.set('view engine', 'ejs');
app.engine('ejs',ejs.renderFile);

app.use(expressLayouts)
app.set('layout','index.ejs')
//front-end
app.use(express.static(path.join(__dirname,'./public')));
//routes
const routes = fs.readdirSync(path.join(__dirname,'./routes'));
routes.forEach(element=>{
    const result = require(path.join(__dirname,'./routes',element));
    app.use(result);
})

app.listen(process.env.PORT,()=>
{
    console.log('puerto', process.env.PORT);
})