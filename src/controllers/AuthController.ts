import { Request, Response } from 'express';
import User from '../models/User';

const AuthController = {
    login: async (req:Request, res:Response) => {
        try {
            const user = await User.findOne({username: req.body.username});
            if (!user) return res.status(200).json({message: 'Username or password is wrong', error: true});
            if (user.password !== req.body.password) return res.status(200).json({message: 'Username or password is wrong', error: true});
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    register: async (req:Request, res:Response) => {
        try {
            if(req.body.password !== req.body.confirmPassword) return res.status(200).json({message: 'Passwords do not match', error: true});
            if(await User.where({username: req.body.username}).countDocuments()) return res.status(200).json({message: 'Username already exists', error: true});
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default AuthController;