import exp from 'constants';
import express from 'express';
import { getUserBoards, postAddNewBoard, postAddNewTicketByBoardID, updateTicketByID, deleteBoard, deleteTicket} from './boardsCtrl';

const router = express.Router();

router
 .get("", getUserBoards)
 .post("/add", postAddNewBoard)
 .post("/addTicket/:id", postAddNewTicketByBoardID)
 .patch("/:id", updateTicketByID)
 .delete("", deleteBoard)
 .delete("/:id", deleteTicket)


export default router;