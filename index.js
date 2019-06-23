const express = require('express');
const app = express();
const multer = require('multer') ;

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'uploads/')
    },
    filename: (req,file,cb) => {
        cb(null, Date.now()+'-'+file.originalname);
    }
})

const upload = multer({ storage });

app.set('view engine','ejs');

app.get('/', (req,res) => res.render('home'));

// app.post('/', upload.single('img') ,(req,res) => { 
// app.post('/', upload.array('img',3), (req,res) => {

app.post('/', upload.any(), (req,res) => {
    console.log(req.body,req.files);
    res.send('ok');
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));