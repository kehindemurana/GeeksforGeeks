// import Express
const express = require('express');
const  app = express();
const PORT = 4000


app.use(express.static('./public'))
// Define a route
app.get('/home', function(req, res){
 
    res.send('<h1>GeeksforGeeks</h1>')
});

// Start the server
app.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
    
})


