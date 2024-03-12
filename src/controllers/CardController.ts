import { Request, Response } from 'express';
import Card from '../models/Card';

const CardController = {
    getCards: async (req:Request, res:Response) => {
        try {
            const cards = await Card.find();
            /* const cards = await Card.find(); */
            res.status(200).json(cards);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    createCard : async (req:Request, res:Response) => {
        try {
            const card = await Card.create(req.body);
            res.status(201).json(card);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}
export default CardController;