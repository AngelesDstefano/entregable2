const express = require('express');

const app = express ( );

const PORT = 9000

app.use (express.json)

app.get('/',(req,res) =>{
    res.status (200).json({message:'ok'})
})



app.listen (9000, ( ) => {
    console.log('server started at port ${}')
})