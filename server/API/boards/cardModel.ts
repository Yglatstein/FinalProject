import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    lables: {
        type: Array,
    },
    date: {
        type: String,
    },
    tasks: {
        type: Array
    },
    boardID: {
        type: String
    },
});

const CardModel = mongoose.model('card', CardSchema);
export default CardModel

