import { Router, Request, Response } from "express";

const router = Router();

router.post(
    "/upload",
    async(req: Request, res: Response)=>{
        res.send({
            message:"Api Working!"
        })
    }
)

export { router as videoRouter }