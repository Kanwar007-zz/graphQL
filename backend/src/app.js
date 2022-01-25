const { request, response } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
mongoose.connect('mongodb+srv://admin:admin@cluster0.xk5z0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', )
.then(()=>{console.log('connected data base')})
.catch(error=()=>{
    console.log('error');
})
app.get('/',(request,response)=>{
    response.send('back end call')
})
app.listen(4000,()=>{
    console.log('server is running');
})

const schema=buildSchema(`
  type Query {
      name : string
  }
`)
const root = { name: () => 'Pushpa' };
app.use('/graphql',graphqlHTTP({
    schema,
    rootValue: root,
    graphiql:true
}))
