import express from 'express';
import  staticTaxCtrl from './staticTaxCtrl';
import { sanitize } from '../../../../../middleware/sanitizer';


export const staticTaxRouter = express.Router();   

staticTaxRouter.route('/add').post(sanitize(), staticTaxCtrl.addtexStaticSettings);

staticTaxRouter.route('/getall').get(sanitize(), staticTaxCtrl.gettexStaticSettingsall);
staticTaxRouter.route('/getby/:id').get(sanitize(), staticTaxCtrl.gettexStaticSettings);
staticTaxRouter.route('/delete/:id').delete(sanitize(), staticTaxCtrl.deletetexStaticSettings);
staticTaxRouter.route('/update/:id').put(sanitize(), staticTaxCtrl.updatetexStaticSettings);





