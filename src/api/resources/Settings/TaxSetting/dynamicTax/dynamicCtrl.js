import { db } from '../../../../../models';

export default {

    /* Add user api start here................................*/

    async addtexDynamicSettings(req, res, next) {
    
        try {
            console.log(req.body)
            const {Sort,FixedChargeLabel,FixedChargeAmount} = req.body
            const texDynamicSettingsDetails = await db.texDynamicSettings.create({
                Sort:Sort,
                FixedChargeLabel:FixedChargeLabel,
                FixedChargeAmount:FixedChargeAmount
            });
            res.status(200).send({
                status: 200,
                message: 'Data Save Successfully',
                data: texDynamicSettingsDetails
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
async gettexDynamicSettings(req, res) {
    try {
        const texDynamicSettingsDetails = await db.texDynamicSettings.findOne({ where: { id: req.params.id } });
        res.status(200).send({
            status: 200,
            message: 'Data fetched Successfully',
            data: texDynamicSettingsDetails
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
    async gettexDynamicSettingsall(req, res){
        try {
            // const ItemDetails = await productModel.findAll();
        const ItemDetails = await db.texDynamicSettings.findAll()
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
    async updatetexDynamicSettings(req, res){
        try {
             const { Sort,FixedChargeLabel , FixedChargeAmount } = req.body
            const updatetexDynamicSettings =await db.texDynamicSettings.update({
                Sort:Sort,
                FixedChargeLabel:FixedChargeLabel ,
                FixedChargeAmount:FixedChargeAmount
        },
        {where: {id: req.params.id} });
        return res.status(201).send({
            status: 200,
            message: 'Data update Successfully',
            texDynamicSettings: updatetexDynamicSettings,
            
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
    async deletetexDynamicSettings(req, res){
        try {
            const texDynamicSettingsDetails =  await db.texDynamicSettings.destroy({
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