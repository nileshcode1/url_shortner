const express = require('express');

const app = express();
const PORT = 8001;




app.listen(8000, ()=>{
    console.log(`Server is running at PORT : ${PORT}`)
})
