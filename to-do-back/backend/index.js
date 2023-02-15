const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

// const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

app.use(express.json());
app.use(cors());


// mongoose.connect("mongodb://localhost/todolist",
// mongoose.connect("mongodb+srv://Alexis:1326@cluster0.e3h8q4g.mongodb.net/?retryWrites=true&w=majority/todolist", connectionOptions)
mongoose.connect("mongodb+srv://lilyjoha:cuarteto.F29@cluster0.e3h8q4g.mongodb.net/?retryWrites=true&w=majority/todolist", connectionOptions)
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});
process.on('uncaughtException', function (err) {
    console.log(err);
});