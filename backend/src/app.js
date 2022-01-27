const { request, response } = require('express');
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql');
//const { buildSchema } = require('graphql');
const movieSchema = require('./schema/schema')
const resolvers= require('./resolvers/Resolvers')

const cors = require('cors')

mongoose.connect('url of mongo db', )
.then(()=>{console.log('connected data base')})
.catch(error=()=>{
    console.log('error'+error);
})
app.get('/',(request,response)=>{
    response.send('back end call')
})
app.listen(4000,()=>{
    console.log('server is running');
})
app.use(cors());
//const schema=buildSchema(`
//  type Query {
  //    name : String
 // }
//`)
//const rootValue = { name: 
 //   () => {
 //   return 'Pushpa';
 //  }    
//};
app.use('/graphql',graphqlHTTP({
    schema:movieSchema,
    rootValue:resolvers,
    graphiql:true
}))
