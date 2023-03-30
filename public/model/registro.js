const mongoose=require('mongoose')
const RegistroBD = new mongoose.Schema(
    {
        NombreU:{type:String},
        Apellidos:{type:String},
        Cedula:{type:Number},
        Correo:{type:String},
        Contraseña:{type:String}

    },
    //no poner version de mongo
    {versionKey:false,
    timestamps:true}
)
module.exports =mongoose.model('Registro_Usuarios',RegistroBD);