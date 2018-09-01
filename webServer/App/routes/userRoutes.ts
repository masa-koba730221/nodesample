
import * as Express from 'express';

export class UserRoutes {
    constructor(app: Express.Application) {
        app.get('/user', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {

            next();
        });
    }
}
