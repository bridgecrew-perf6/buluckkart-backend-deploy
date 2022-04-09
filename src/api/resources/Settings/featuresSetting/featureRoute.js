import express from 'express';
import  featureCtrl from './featureCtrl';
import { sanitize } from '../../../../middleware/sanitizer';



export const featureRouter = express.Router();   

featureRouter.route('/add').post(sanitize(), featureCtrl.addfeatureSettings);

featureRouter.route('/getall').get(sanitize(), featureCtrl.getfeatureSettingsall);
featureRouter.route('/getby/:id').get(sanitize(), featureCtrl.getfeatureSettings);
featureRouter.route('/delete/:id').delete(sanitize(), featureCtrl.deletefeatureSettings);
featureRouter.route('/update/:id').put(sanitize(), featureCtrl.updatefeatureSettings);
















