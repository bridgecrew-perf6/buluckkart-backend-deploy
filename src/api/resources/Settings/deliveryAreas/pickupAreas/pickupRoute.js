import express from 'express';
import  pickupCtrl from './pickupCtrl';
import { sanitize } from '../../../../../middleware/sanitizer';



export const pickupRouter = express.Router();   

pickupRouter.route('/add').post(sanitize(),pickupCtrl.addpickupAreasSettings);

pickupRouter.route('/getall').get(sanitize(), pickupCtrl.getpickupAreasSettingsall);
pickupRouter.route('/getby/:id').get(sanitize(), pickupCtrl.getpickupAreasSettings);
pickupRouter.route('/delete/:id').delete(sanitize(), pickupCtrl.deletepickupAreasSettings);
pickupRouter.route('/update/:id').put(sanitize(), pickupCtrl.updatepickupAreasSettings);
















