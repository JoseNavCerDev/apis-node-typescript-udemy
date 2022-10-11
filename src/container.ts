import { createContainer, asClass } from 'awilix';
import { TestService } from './services/test.service';
import { scopePerRequest } from 'awilix-express';
import express from 'express';

export default (app: express.Application) => {
    const container = createContainer();

    container.register({
        testService: asClass(TestService).scoped()
    });

    app.use(scopePerRequest(container));
};