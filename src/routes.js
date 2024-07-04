
import { Router } from 'express';

import { v4 } from 'uuid';

import User from './app/models/User'

const routes = new Router();

routes.get('/', async (request, response) => {

  const user = await User.create({
    id: v4(),
    name: 'Cristian',
    email: 'cristianssilva.20@gmail.com',
    password_hash: '12345'
  });

  return response.status(201).json(user);
});
export default routes