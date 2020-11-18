import { Request, Response } from 'express';
import Org from '../models/Org';

class OrgController {
  async create(req: Request, res: Response) {
    const {
      name,
      cep,
      latitude,
      longitude,
      email,
      phone,
      type
    } = req.body;

    if (!name || !cep || !latitude || !longitude || !email || !phone || !type) {
      return res.sendStatus(400);
    }

    const org = await Org.create({
      name,
      cep,
      latitude,
      longitude,
      email,
      phone,
      type
    });

    return res.json(org);
  }

  async index(req: Request, res: Response) {
    const orgs = await Org.find();

    return res.json(orgs);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const org = await Org.findById({ _id: id });

    return res.json(org);
  }
}

export default new OrgController();