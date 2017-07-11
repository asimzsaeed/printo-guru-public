/**
 * Created by asimz on 08/01/2017.
 */
import { Router, Response, Request } from 'express';
import * as uuid from 'node-uuid';
import { AppService }  from '../services/app.service';
let appService = new AppService();

const jobRouter: Router = Router();

jobRouter.post('/', (request: Request, response: Response) => {
    console.log('job Posted>>', request.body)
    response.json({
        id: uuid.v4(),
        job: request.body,
    });


});

jobRouter.post('/app', (request: Request, response: Response) => {

    appService.submitAppData()
        .then((result) => {
            response.json({
                id: uuid.v4(),
                job: request.body,
            });
        });
});


export { jobRouter }
