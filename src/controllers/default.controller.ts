import { route, GET } from 'awilix-express';
import { Request, Response } from 'express';

@route('/')
export class Defaultcontroller {
    @GET()
    public index (req: Request, res: Response): void {
        res.send({
            NODE_ENV : process.env.NODE_ENV || 'development',
            APP_ENV : process.env.APP_ENV || 'development'
        });
    }
    
}