const express = require('express');
const  mongoose  = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mern_project_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(routes);


app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});