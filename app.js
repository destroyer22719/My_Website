const express = require('express');
const app = express();
const path = require('path')
const port = 3000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


app.get('/', (req, res, next) => {
    res.render('index')
})

app.listen(process.env.PORT || port, () => {
    if(!process.env.PORT){
        console.log(`go to: http://localhost:${port}`)
    }
})