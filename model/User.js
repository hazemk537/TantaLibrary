//users coolection in mongodb shell ?
const mongoose =reqiure('mongoose')
const UserSchema=new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    });


    const User=mongoose.model('User',UserSchema)

module.exports=User //todo