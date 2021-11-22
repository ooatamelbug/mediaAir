import { Router } from 'express'; 
import { loginUser } from './authLogController';

const router = Router({ mergeParams: true });



export default router;