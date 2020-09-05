const express = require('express');
const app = express();
const path = require('path')
const port = 3000
const fs = require('fs')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

const myProjects = JSON.parse(fs.readFileSync('./projects.json','utf8'));
console.log(myProjects)
app.get('/', (req, res, next) => {
    res.render('index')
})
app.get('/projects', (req, res, next) => {
    res.render('projects', {
        myProjects: myProjects
    })
})
app.use(express.static(path.join(__dirname,'public')))

app.listen(process.env.PORT || port, () => {
    if(!process.env.PORT){
        console.log(`go to: http://localhost:${port}`)
    }
})