const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const todos = require('./routes/todos');
const authRoutes = require ('./routes/auth');

var cors = require('cors');
app.use(cors()); //allowing Access-Control-Allow-Origin cors for access from client
const db = require('./config/database');
// app.get('/',(req,res)=>{
// 	res.send("ello")
// })

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect('mongodb+srv://zaini:235896abc@cluster0.rhk32.mongodb.net/todos?retryWrites=true&w=majority', {
	//   useMongoClient: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// mongoose.connect(`mongodb://localhost/todos`, { useNewUrlParser: true })
//     .then(() => console.log('Connected to MongoDB...'))
//     .catch(err => console.error('Could not connect to mongodb'))
app.use(express.json());
app.use('/api/todos', todos);
app.use('/api',authRoutes);

if(process.env.NODE_ENV === 'PRODUCTION'){
	app.use(express.static('client/build'))
}

app.use(express.static(path.join(__dirname,'client','build')));

app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname,'client','build'));
})

const port =  4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));