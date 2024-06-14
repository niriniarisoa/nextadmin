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
    },
    notifications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notification"
    }],
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction"
    }]
}, {
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
    },
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction"
    }],
    maintenance: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Maintenance"
    }
}, {
    timestamps: true
});

const transactionSchema = new mongoose.Schema({
    materialId: { type: mongoose.Schema.Types.ObjectId, ref: 'Material', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['in', 'out'], required: true },
    quantity: { type: Number, required: true },
    date: { type: Date, default: Date.now }
  },
  {
    timestamps: true
});
  

const notificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    seen: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true
});

const maintenanceSchema = new mongoose.Schema({
    materialId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Material",
        required: true,
    },
    status: { // 'new', 'used', 'damaged', 'in_repair'
        type: String,
        required: true,
        enum: ['new', 'used', 'damaged', 'in_repair']
    },
    lastMaintenanceDate: {
        type: Date,
    },
    nextMaintenanceDate: {
        type: Date,
    },
    maintenanceReport: {
        type: String,
    },
}, {
    timestamps: true
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Material = mongoose.models.Material || mongoose.model("Material", materialSchema);
export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);
export const Notification = mongoose.models.Notification || mongoose.model("Notification", notificationSchema);
export const Maintenance = mongoose.models.Maintenance || mongoose.model("Maintenance", maintenanceSchema);