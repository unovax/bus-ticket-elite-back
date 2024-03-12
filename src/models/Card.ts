import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    },
    card_number: {
        type: String,
        required: true
    },
    remember: {
        type: Boolean,
        default: false
    },
});

const Card = mongoose.model("Card", cardSchema);
export default Card;