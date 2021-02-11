const express = require('express');
const app = express();
const path = require('path')
const port = 3000
const fs = require('fs')
const compression = require('compression')

app.use(compression())
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

const myProjects = require("./projects.json");

app.get('/', (req, res, next) => {
    res.render('index')
})
app.get('/projects', (req, res, next) => {
    const tech = req.query.tech;

    let projectList;

    if (tech) 
      projectList = myProjects.filter(({languages}) => {
        const list = languages.toString();
        return list.search(new RegExp(tech, "i")) != -1   
      });
    else 
      projectList = myProjects;
      
    res.render('projects', {
          myProjects: projectList
      })
});

app.use(express.static(path.join(__dirname,'public')))

app.listen(process.env.PORT || port, () => {
    if(!process.env.PORT){
        console.log(`go to: http://localhost:${port}`)
    }
})