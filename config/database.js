if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb+srv://zaini:235896abc@cluster0.rhk32.mongodb.net/todos?retryWrites=true&w=majority'}
  } else {
    module.exports = {mongoURI: 'mongodb+srv://zaini:235896abc@cluster0.rhk32.mongodb.net/todos?retryWrites=true&w=majority'}
  }