import { Request, Response } from 'express';
import Purchase from '../models/Purchase';
import { getFolio } from '../utils/Common';

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
            req.body.folio = getFolio();
            const purchase = await Purchase.create(req.body);
            res.status(201).json(purchase);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    readQr : async (req:Request, res:Response) => {
        try {
            const folio = req.params.folio;
            const purchase = await Purchase.findOne({folio: folio});
            if(purchase){
                if(purchase.quantity <= 1){
                    await Purchase.deleteOne({ folio: folio });
                    res.status(200).json({message: 'Compra eliminada'});
                }
                else{
                    purchase.quantity = purchase.quantity - 1;
                    await purchase.save();
                    res.status(200).json(purchase);
                }
            }else{
                res.status(404).json({message: 'Compra no encontrada'});
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
export default PurchaseController;