const multer = require('multer');


// -----------> MIDDLEWARES <-----------

// Configuracion de multer
const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
  destination: (req, file, callback) => {
    const baseDir = 'D:/Users/USER/Documents/Programacion/asiste/pruebaCapturaFirma/pruebaFirmasGuardadas';
    callback(null, baseDir);
  }
})

// Middleware para almacenar la imagen usando Multer
const uploadMiddleware = multer({
  storage,
}).single('image');



// -----------> CONTROLADORES <-----------

const uploadSignature = ( req, res ) => {
  console.log(req.body);
  res.send('Signature uploaded');
}



// -----------> EXPORTACIÓN MÓDULO <-----------

module.exports = {
  uploadSignature,
  uploadMiddleware
}