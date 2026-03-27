import { Router } from 'express';
import { getRoot, getMarco, getPing, getUsers, getLogin } from '../controllers/server.controllers.js';

const router = Router();

router.get('/', getRoot);
router.get('/marco', getMarco);
router.get('/ping',getPing);
router.get('/users', getUsers);
router.get('/login', getLogin);

export default router;