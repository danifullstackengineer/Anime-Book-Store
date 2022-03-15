import express from 'express';

import { register, code} from './controllers/credential';

const router = express.Router();

router.post('/register', register)
router.post('/sendCode', code)

export default router;