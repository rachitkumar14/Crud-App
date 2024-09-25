
const app=require('./app.js');

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Hogya server connected ${PORT}`);
})
module.exports=app;