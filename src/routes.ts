import { NextFunction, Request, Response, Router } from 'express';

const users = (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({
      id: 852405082435,
      email: 'username@mail.com',
      name: 'Grzegorz',
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const creases = (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.send([
      {
        creatorId: 852405082435,
        createdAt: new Date(),
        amount: 4800,
      },
    ]);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const health = (_req: Request, res: Response) => {
  res.send({ ok: true });
};

const routes: Router = Router();

export default async (): Promise<Router> => {
  routes.get('/health-status', health);
  routes.get('/users/:id', users);
  routes.get('/creases/:userId', creases);
  return routes;
};
