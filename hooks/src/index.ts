import express from 'express';
import { PrismaClient } from '@prisma/client' 
const client =new PrismaClient();
const app = express();

app.use(express.json());
// end point
// password logic

app.post("/hooks/catch/:userId/:zapId",async (req,res)=>{
    const {userId, zapId} = req.params;
    const body = req.body;
    // store in db a new trigger 
    await client.$transaction(async tx=>{
        const run=await tx.zapRun.create({
            data:{
                zapId:zapId,
                metadata: body
            }
        });
        await  tx.zapRunOutbox.create({
            data:{
                zapRunid:run.id,
                
            }
        })
    })
    
    // push it on to a queue (kafks/redis)



    res.json({ success: true });

})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});