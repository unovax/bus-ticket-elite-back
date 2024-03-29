import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    deadline: {
        type: Date,
        default: Date.now
    },
    price: {
        type: Number,
        default: 0
    },
    city: {
        type: String,
        default: ""
    },
    quantity: {
        type: Number,
        default: 1
    },
    total : {
        type: Number,
        default: 0
    },
    folio : {
        type: Number,
        required: true
    },
    /* user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    } */
});

const Purchase = mongoose.model("Purchase", purchaseSchema);
export default Purchase;