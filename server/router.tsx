import express from 'express';

import { register, code, login, verifyJWT, isAuth} from './controllers/credential';

const router = express.Router();

router.post('/login', login)
router.post('/register', register)
router.post('/sendCode', code)
router.get('/isUserAuth', verifyJWT, isAuth);

export default router;