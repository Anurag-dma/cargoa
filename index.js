const express = require('express')
const app = express();
const port = 7000;


app.use('/', require('./routes'));
app.set('view engine','ejs');
app.set('views', './views');

app.listen(port,(err) =>{
               
    if(err)
    console.log(`there is an error: ${err}`);

    console.log(`server is running on port: ${port}`);
});