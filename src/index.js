const express = require('express');
const cors = require("cors");
const multer = require('multer');


const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
    if(err) console.log('Error in server setup');
    console.log(`Server listening on Port ${PORT}`);
});

app.use(cors());
app.use(express.json());

// Configuracion de multer
const storage = multer.diskStorage({
    filename: (req, file, callback) => {
      callback(null, 'prueba.jpg');
    },
    destination: (req, file, callback) => {
      const dir = 'C:/Users/OscarDev/Documents/asiste/pruebaCapturarFirma/firmas';
      callback(null, dir);
    }
  })
  
// Middlewares
const uploadMiddleware = multer({
storage,
});

app.post('/signature', uploadMiddleware, (req, res) => {
    console.log(req.body);
    res.send('prueba')
})