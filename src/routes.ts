import { Router } from 'express';
import OrgController from './controllers/OrgController';
import UserController from './controllers/UserController';

const router = Router();

// Orgs Routes
router.post('/orgs', OrgController.create);
router.get('/orgs', OrgController.index);

// User Routes
router.post('/users', UserController.create);

export default router;