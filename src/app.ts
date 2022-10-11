import express from 'express';
import * as dotenv from 'dotenv';
import { loadControllers } from 'awilix-express';

//Internal packages
import container from './container';
import { TestService } from './services/test.service';

//PROCESS VARIABLE Construction
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.APP_ENV || 'development';

//Package to manage environment variables
dotenv.config({
    path: `${__dirname}/../config/${process.env.APP_ENV}.env`
});

//This function is possible instaling @types/express
const app: express.Application = express();

//ENDPOINT GET example
app.get('/', (req,res) => {
    res.send({msg: "Message from express"});
});

//Charging controllers in APP express 
app.use(loadControllers(
    'controllers/*.ts',
    { cwd: __dirname }
));


export default app;
