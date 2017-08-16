import express, {Router} from 'express';
import {allRules, getRetirementDate} from '../controllers/retirementController';

const retirementRoute = Router();

retirementRoute.route('/rules')
    .get(allRules)
    .post(getRetirementDate);

export default retirementRoute;