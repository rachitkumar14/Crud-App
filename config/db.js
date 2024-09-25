
const mongoose= require('mongoose');

const connectToDb=async()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
        console.log(`Connected to database ${conn.connection.host}`)
    })
    .catch((err)=>{
        console.log('Error in connection of database');
    })
}
module.exports=connectToDb;