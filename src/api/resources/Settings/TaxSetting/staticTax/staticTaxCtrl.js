import { db } from '../../../../../models';

export default {

    /* Add user api start here................................*/

    async addtexStaticSettings(req, res, next) {
        console.log(req.body)
        try {
            const { EnambleTex, GSTNumber, GSTState ,AllowCustomerGST,ApplyDiscountOnOrder,SetTax ,fixChargeId } = req.body
            const texStaticSettingsDetails = await db.texStaticSettings.create({
                 EnambleTex:EnambleTex,
                 GSTNumber:GSTNumber,
                 GSTState:GSTState ,
                 AllowCustomerGST:AllowCustomerGST,
                 ApplyDiscountOnOrder:ApplyDiscountOnOrder,
                 SetTax:SetTax ,
                 fixChargeId:fixChargeId
            });
            res.status(200).send({
                status: 200,
                message: 'Data Save Successfully',
                data: texStaticSettingsDetails
            });
        }
        catch (error) {
            return res.status(400).send({
                message: 'Unable to insert data',
                errors: error,
                status: 400
            });
        }
    },


   // get single  by id
async gettexStaticSettings(req, res) {
    try {
        const texStaticSettingsDetails = await db.texStaticSettings.findOne({ where: { id: req.params.id } ,
           include: [{ model: db.texDynamicSettings}]});
    
               
        res.status(200).send({
            status: 200,
            message: 'Data fetched Successfully',
            data: texStaticSettingsDetails
        });
    }
    catch (error) {
        return res.status(400).send({
            message: 'Unable to fetch data',
            errors: error,
            status: 400
        });
    }
},
    async gettexStaticSettingsall(req, res){
        try {
        // const ItemDetails = await productModel.findAll();
        const ItemDetails = await db.texStaticSettings.findAll({
                include: [{ model: db.texDynamicSettings}]
        })
        
            res.status(200).send({
                status: 200,
                message: 'Data fetched Successfully',
                data: ItemDetails
            });
        
        }
        catch (error) {
            return res.status(400).send({
                message: 'Unable to fetch data',
                errors: error,
                status: 400
            });
        }
    },
    async updatetexStaticSettings(req, res){
        try {
            const { EnambleTex, GSTNumber, GSTState ,AllowCustomerGST,ApplyDiscountOnOrder,SetTax ,fixChargeId} = req.body
            const updatetexStaticSettings =await db.texStaticSettings.update({
                 EnambleTex:EnambleTex,
                 GSTNumber:GSTNumber,
                 GSTState:GSTState ,
                 AllowCustomerGST:AllowCustomerGST,
                 ApplyDiscountOnOrder:ApplyDiscountOnOrder,
                 SetTax:SetTax ,
                 fixChargeId:fixChargeId
        },
        {where: {id: req.params.id} });
        return res.status(201).send({
            status: 200,
            message: 'Data update Successfully',
            texStaticSettings: updatetexStaticSettings,
            
        });
        }
        catch (error) {
            return res.status(400).send({
                message: 'Unable to update data',
                errors: error,

                status: 400
            });
        }
    },
    async deletetexStaticSettings(req, res){
        try {
            const texStaticSettingsDetails =  await db.texStaticSettings.destroy({
            where: {id: req.params.id}
            });
            await res.status(200).send({
                message:"delete successfull"
            })
        }
        catch (error) {
            return res.status(400).send({
                message: 'Unable to update data',
                errors: error,
                status: 400
            });
        }
    }

}