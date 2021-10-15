import express from 'express';
import bodyParser from 'body-parser';
const routes = require('../node-using-mongodb/src/routes/routes.js')
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 


app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);

routes.routes(app);

mongoose.connect('mongodb://localhost/productsdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.Promise = global.Promise;