const express = require('express');
const { testFormRouter } = require('../routers/testFormRouter')
const cors = require("cors");


// ---------- CONFIGURACION INICIAL ----------

const app = express();

const PORT = process.env.PORT || 4000;

app.listen( PORT, (err) => {
  if (err) console.log('Error in server setup');
  console.log(`Server listening on Port ${PORT}`);
})

app.use(express.json());
app.use(cors());


// ---------- ROUTERS ----------

app.use('/testForm', testFormRouter);
