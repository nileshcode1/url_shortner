// const express = require('express');
// const {connectToMongoDB} = require("./connect");

// const urlRoute = require("./routes/url");

// const app = express();
// const PORT = 8001;

// connectToMongoDB("mongodb://localhost:27017/short-url")
// .then(()=>console.log("Mongodb connected"))

// app.use(express.json());

// app.use("/url", urlRoute);


// app.listen(8000, ()=>{
//     console.log(`Server is running at PORT : ${PORT}`)
// })

const express = require("express");
const { connectToMongoDB } = require("./connect");

const urlRoute = require("./routes/url");

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
