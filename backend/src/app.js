const { request, response } = require('express');
const express = require('express');
const app = express();
app.get('/',(request,response)=>{
    response.send('back end call')
})
app.listen(4000,()=>{
    console.log('server is running');
})

