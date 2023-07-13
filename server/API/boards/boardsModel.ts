import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    permittedUsers: {
        type: Array
    },
    ticketsIds: {
        type: Array
    }
    
});

const BoardModel = mongoose.model('board', BoardSchema);
export default BoardModel

