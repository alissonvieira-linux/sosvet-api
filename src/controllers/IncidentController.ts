import { Request, Response } from 'express';
import Org from '../models/Org';
import Incident from '../models/Incident';

class IncidentController {
  async create(req: Request, res: Response) {
    const { title, description, value } = req.body;
    const { id } = req.params;

    if (!title || !description || !value) {
      return res.sendStatus(400);
    }

    const incident = await Incident.create({
      org_id: id,
      title,
      description,
      value
    });

    return res.json(incident);
  }

  async index(req: Request, res: Response) {
    
  }
}

export default new IncidentController();