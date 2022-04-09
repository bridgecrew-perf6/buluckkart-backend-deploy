import { db} from '../../../../../models';
 const CityManageSetting = db.citySettings


export default {

    /* Add user api start here................................*/

    async addCityManageSetting(req, res, next) {
        console.log(req.body)
       
        try {
            const {City}= req.body;
            const CityManageSettingDetails = await CityManageSetting.create({City:City });
            
            res.status(200).send({
                status: 200,
                message: 'Data Save Successfully',
                data: CityManageSettingDetails
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
async getCityManageSetting(req, res) {
    try {
        const CityManageSettingDetails = await CityManageSetting.findOne({ where: { id: req.query.id } });
        res.status(200).send({
            status: 200,
            message: 'Data fetched Successfully',
            data: CityManageSettingDetails
        });
    
      }catch(err){
            res.send(err)
            console.log(err)
        }
},
    async getCityManageSettingall(req, res){
        try {
            // const ItemDetails = await productModel.findAll();
        const ItemDetails = await CityManageSetting.findAll()
            res.status(200).send({
                status: 200,
                message: 'Data fetched Successfully',
                data: ItemDetails
            });
        
        }catch(err){
            res.send(err)
            console.log(err)
        }
    },
    async updateCityManageSetting(req, res){
        try {
            const {City,cityId}= req.body;
            const updateCityManageSetting =await CityManageSetting.update({
                    City:City
        },
        {where: {id: cityId} });
        return res.status(201).send({
            status: 200,
            message: 'Data update Successfully',
            CityManageSetting: updateCityManageSetting,
            
        });
          }catch(err){
            res.send(err)
            console.log(err)
        }
    },
    async deleteCityManageSetting(req, res){
        try {
          await CityManageSetting.destroy({
            where: {id: req.query.id}
            });
            await res.status(200).send({
                message:"delete successfull"
            })
         }catch(err){
            res.send(err)
            console.log(err)
        }
    }

}