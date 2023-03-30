const mongoose=require('mongoose')
const ConsolasBD = new mongoose.Schema(
    {
        Nombre:{type:String},
        Precio:{type:Number},
        descripcion:{type:String},
        Imagen:{type:String},
        Contacto:{type:Number}

    },
    //no poner version de mongo
    {versionKey:false,
    timestamps:true}
)
module.exports =mongoose.model('Consolas',ConsolasBD);