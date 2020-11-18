import { Router } from 'express';
import OrgController from './controllers/OrgController';
import UserController from './controllers/UserController';
import IncidentController from './controllers/IncidentController';

const router = Router();

// Orgs Routes
router.post('/orgs', OrgController.create);
router.get('/orgs', OrgController.index);
router.get('/orgs/:id', OrgController.show);

// Incidents routes
router.post('/incidents/:id', IncidentController.create);
router.get('/incidents', IncidentController.index);

// User Routes
router.post('/users', UserController.create);

export default router;