const mongoose = require("mongoose");

const rationSchema = mongoose.Schema({
    packetId:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    packetType:{
        type: String,
        required:true,
        trim: true,
        enum: ["Food", "Water"],
    },
    packetContent: {
        type:String
    },
    qty:{
        type: String,
        required: true,
        trim: true,
        enum: [
            "500 Calories",
            "1000 Calories",
            "1500 Calories",
            "2000 Calories",
            "1 Litres",
            "2 Litres",
          ],
    },
    expiry:{
        type: Date,
    },
    isActive:{
        type: Boolean,
        default: true,
    },
},
  {
    timestamps: true,
  }
);

const Ration = mongoose.model("Ration", rationSchema);

module.exports = Ration;