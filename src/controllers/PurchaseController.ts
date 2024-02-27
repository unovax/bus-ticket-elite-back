import { Request, Response } from 'express';
import Purchase from '../models/Purchase';

const PurchaseController = {
    getPurchases: async (req:Request, res:Response) => {
        try {
            const purchases = await Purchase.find();
            /* const purchases = await Purchase.find(); */
            res.status(200).json(purchases);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    createPurchase : async (req:Request, res:Response) => {
        try {
            const purchase = await Purchase.create(req.body);
            res.status(201).json(purchase);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}
export default PurchaseController;