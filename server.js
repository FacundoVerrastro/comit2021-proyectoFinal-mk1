const http = require('http');
let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:7DuedDi3UhLilCmZ@cluster0.d17ep.mongodb.net/material?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const materialSchema = new mongoose.Schema({
    id:Number,
    name: String,
    type: String,
    img: String,
    description: String,
    generos: Array,
    dateOfCreation: Date,
    rating: String,
    episodios: Array
});
const model = mongoose.model('material', materialSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
  // we're connected!
  console.log("estamos contectados a mongodb");
});


app.get('/api/getMaterial/:materialNombre', (req, res) => {
    model.findOne({name:req.params.materialNombre},(err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
})

app.listen(8080,()=>{
    console.log('escuchando por el puerto 8080');
})