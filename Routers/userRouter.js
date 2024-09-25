
const express=require('express');
const {createUser, getUsers, deleteUser, updateUser}=require('../Controllers/userController')
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('hello Rachit bhai')
})
router.post('/createUser',createUser);
router.get('/getUsers',getUsers)
router.delete('/deleteUser/:id',deleteUser)
router.put('/updateUser/:id',updateUser)

module.exports=router