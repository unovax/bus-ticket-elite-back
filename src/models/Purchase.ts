import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    price: {
        type: Number,
        default: 0
    },
    route: {
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
        default: 100
    },
    /* user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    } */
});

const Purchase = mongoose.model("Purchase", purchaseSchema);
export default Purchase;