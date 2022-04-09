import express from 'express';
import  informationCtrl from './informationCtrl';
import { sanitize } from '../../../../middleware/sanitizer';
import upload from '../../../../awsavtar'


export const informationRouter = express.Router();   

informationRouter.route('/add').post(sanitize(),upload.single('photo'), informationCtrl.addstoreInformationSettings);

informationRouter.route('/getall').get(sanitize(), informationCtrl.getstoreInformationSettingsall);
informationRouter.route('/getby/:id').get(sanitize(), informationCtrl.getstoreInformationSettings);
informationRouter.route('/delete/:id').delete(sanitize(), informationCtrl.deletestoreInformationSettings);
informationRouter.route('/update/:id').put(sanitize(), informationCtrl.updatestoreInformationSettings);
















