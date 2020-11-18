import { Router } from 'express';
import OrgController from './controllers/OrgController';

const router = Router();

router.post('/orgs', OrgController.create);7
router.get('/orgs', OrgController.index);

export default router;