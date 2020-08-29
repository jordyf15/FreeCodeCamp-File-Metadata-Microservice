const express=require('express');
const fileUpload = require('express-fileupload');

const app=express();

app.use(express.static('public'));
app.use(fileUpload())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

app.post('/api/fileanalyse',(req,res)=>{
    res.json({
        name: req.files.upfile.name,
        type: req.files.upfile.mimetype,
        size: req.files.upfile.size
    })
})


app.listen(3000);
console.log('connected')