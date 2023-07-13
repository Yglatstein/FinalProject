
import BoardModel from "./boardsModel";
import jwt from "jwt-simple";
import CardModel from "./cardModel";
const saltRounds = 10;

export async function getUserBoards(req, res){
    try{
        const secret = process.env.SECRET;
        const {userID} = req.cookies
        const jwtUserId = jwt.decode(userID, secret);
        const { userId } = jwtUserId;
        
        
        
    }catch (error){
        res.status(500).send({error: error.message})
    }
}

export async function postAddNewBoard(req, res){
    try{
        const secret = process.env.SECRET;
        const {userID} = req.cookies
        const jwtUserId = jwt.decode(userID, secret);
        const { userId } = jwtUserId;
        
        const { title } = req.body;
        const boardDB = new BoardModel({ title, permittedUsers: null, ticketsIds: [] });
        await boardDB.save();
        res.send({success: true, board: boardDB})
        
    }catch (error){
        res.status(500).send({error: error.message})
    }
}

export async function postAddNewTicketByBoardID(req, res){
    try{
        const secret = process.env.SECRET;
        const {userID} = req.cookies
        const jwtUserId = jwt.decode(userID, secret);
        const { userId } = jwtUserId;

        const { title, boardID } = req.body
        const ticketDB = new CardModel({ title, boardID, description: "", lables:[], tasks:[], date:"" });
        await ticketDB.save();
        res.send({success: true, ticket: ticketDB})
        
    }catch (error){
        res.status(500).send({error: error.message})
        
    }
}

export async function updateTicketByID(req, res){
    try{
        const secret = process.env.SECRET;
        const {userID} = req.cookies
        const jwtUserId = jwt.decode(userID, secret);
        const { userId } = jwtUserId;


        //res.send({success: true, ticket: ticketDB})
        
    }catch (error){
        res.status(500).send({error: error.message})
    }
}

export async function deleteBoard(req, res){
    try{
        const secret = process.env.SECRET;
        const {userID} = req.cookies
        const jwtUserId = jwt.decode(userID, secret);
        const { userId } = jwtUserId;
        
        
        
    }catch (error){
        res.status(500).send({error: error.message})
    }
}

export async function deleteTicket(req, res){
    try{
        const secret = process.env.SECRET;
        const {userID} = req.cookies
        const jwtUserId = jwt.decode(userID, secret);
        const { userId } = jwtUserId;
        
        
        
    }catch (error){
        res.status(500).send({error: error.message})
    }
}
