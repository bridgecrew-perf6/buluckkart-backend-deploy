import express from 'express';
import  dynamicCtrl from './dynamicCtrl';
import { sanitize } from '../../../../../middleware/sanitizer';


export const dynamicTexRoute = express.Router();   

dynamicTexRoute.route('/add').post(sanitize(), dynamicCtrl.addtexDynamicSettings);

dynamicTexRoute.route('/getall').get(sanitize(), dynamicCtrl.gettexDynamicSettingsall);
dynamicTexRoute.route('/getby/:id').get(sanitize(), dynamicCtrl.gettexDynamicSettings);
dynamicTexRoute.route('/delete/:id').delete(sanitize(), dynamicCtrl.deletetexDynamicSettings);
dynamicTexRoute.route('/update/:id').put(sanitize(), dynamicCtrl.updatetexDynamicSettings);





