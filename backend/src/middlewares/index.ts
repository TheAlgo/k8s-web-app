import { Request, Response, NextFunction } from 'express';
import { merge } from 'lodash';
import { getUserBySessionToken } from '../db/users';

export const isAuthenticated = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const COOKIE_KEY_NAME : string = process.env.COOKIE_KEY_NAME || 'astuto-app' ;
        const sessionToken = req.cookies[COOKIE_KEY_NAME];
        if (!sessionToken) {
            return res.sendStatus(403);
        }

        const existingUser = await getUserBySessionToken(sessionToken);

        if (!existingUser) {
            return res.sendStatus(403);
        }

        merge(req, { identity: existingUser });
        next();
    } catch (error) {
        next(error);
    }
};
