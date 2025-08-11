import express from 'express';

const app = express();

// end point
// paassword logic

app.post("hooks/catch/:userId/:zapId",(req,res)=>{
    const {userId, zapId} = req.params;

    // store in db a new trigger 
    // push it on to a queue (kafks/redis)
    

})