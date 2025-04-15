import { Router } from "express";
import * as chatController from "../controller/chat.controller";

const router: Router = Router();

router.post('/', chatController.sendChat)

export default router;
