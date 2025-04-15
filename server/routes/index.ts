import { Router } from "express";
import chatRouter from "./chat.route";

const router: Router = Router();

router.use('/chat', chatRouter)

export default router;
