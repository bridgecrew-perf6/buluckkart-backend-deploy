import { db } from '../../../../../models';


export default {

    /* Add user api start here................................*/

    async addpickupAreasSettings(req, res, next) {
        console.log(req.body)
       
        try {
            const {SelectCity,Zone,PickupAddress,PickupPhone,PickupEmail,PickupLat, PickupLng, AutoFill, MinimumOrderAmount, AdditionalNote,allowcustomers}= req.body;
            const pickupAreasSettingsDetails = await db.pickupAreasSettings.create({
               SelectCity:SelectCity,
               Zone:Zone,
               PickupAddress:PickupAddress,
               PickupPhone:PickupPhone,
               PickupEmail:PickupEmail,
               PickupLat:PickupLat,
               PickupLng:PickupLng,
               AutoFill:AutoFill,
               MinimumOrderAmount,
               AdditionalNote:AdditionalNote,
               allowcustomers:allowcustomers
            });
            res.status(200).send({
                status: 200,
                message: 'Data Save Successfully',
                data: pickupAreasSettingsDetails
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
async getpickupAreasSettings(req, res) {
    try {
        const pickupAreasSettingsDetails = await db.pickupAreasSettings.findOne({ where: { id: req.params.id } });
        res.status(200).send({
            status: 200,
            message: 'Data fetched Successfully',
            data: pickupAreasSettingsDetails
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
    async getpickupAreasSettingsall(req, res){
        try {
            // const ItemDetails = await productModel.findAll();
        const ItemDetails = await db.pickupAreasSettings.findAll()
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
    async updatepickupAreasSettings(req, res){
        try {
            const {SelectCity,Zone,PickupAddress,PickupPhone,PickupEmail,PickupLat, PickupLng, AutoFill, MinimumOrderAmount, AdditionalNote,allowcustomers}= req.body;
            const updatepickupAreasSettings =await db.pickupAreasSettings.update({
                    SelectCity:SelectCity,
                    Zone:Zone,
                    PickupAddress:PickupAddress,
                    PickupPhone:PickupPhone,
                    PickupEmail:PickupEmail,
                    PickupLat:PickupLat,
                    PickupLng:PickupLng,
                    AutoFill:AutoFill,
                    MinimumOrderAmount,
                    AdditionalNote:AdditionalNote,
                    allowcustomers:allowcustomers
        },
        {where: {id: req.params.id} });
        return res.status(201).send({
            status: 200,
            message: 'Data update Successfully',
            pickupAreasSettings: updatepickupAreasSettings,
            
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
    async deletepickupAreasSettings(req, res){
        try {
            const pickupAreasSettingsDetails =  await db.pickupAreasSettings.destroy({
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