import { Router } from 'express';
import { getGameUser } from '../controllers/game.controllers.js';

const router = Router();

router.get("/game/:id", getGameUser);

export default router;
