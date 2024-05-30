import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        minlength:3,
        maxlength:20,
    },
    email:{
        type: String,
        required: true,
        unique:true,
        minlength:3,
        // maxlength:30,
    },
    password:{
        type: String,
        required: true,
        minlength:3,
      
    },
    phone:{
        type: String, 
        required: true,
        minlength:10,
        maxlength:10,
    },
    image:{
        type:String,
        required:false,
    },
    titre:{
        type:Boolean,
        default:false,
    },
    status:{
        type:Boolean,
        default:true,
    },
    address:{
        type: String,
    },
    departement:{
        type: String,
    }
},
{
    timestamps: true
});

const materialSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique:true,
    },
     cat:{
        type:String,
    },
     depart:{
        type:String,
    },
     stat:{
        type:String,
    },
     location:{
        type:String,
    }
    
},
{
    timestamps: true
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Material = mongoose.models.Material || mongoose.model("Material", materialSchema);
