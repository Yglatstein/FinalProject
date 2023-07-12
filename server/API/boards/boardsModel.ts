import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
    ID: {
        type: String, 
        required: true, 
    },
    title: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: false
    },
});

// id: 1651319523126.113,
//     title: "Doing",
//     tickets: [
//       {
//         id: 1651319672685.5078,
//         title: "Task3",
//         labels: [{ color: "#9975bd", text: "Database" }],
//         date: "",
//         tasks: [
//           { id: 1651319728301.3855, completed: false, text: "restore db" },
//         ],
//       },
//     ]


const BoardModel = mongoose.model('board', BoardSchema);
export default BoardModel

