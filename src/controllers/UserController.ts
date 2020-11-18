import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
      return res.sendStatus(400);
    }

    const hash = bcrypt.hashSync(password, 8);

    const user = await User.create({
      name,
      email,
      password: hash
    });

    return res.json(user);
  }
}

export default new UserController();