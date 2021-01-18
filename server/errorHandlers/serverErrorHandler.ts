import { Request, Response, NextFunction } from "express";

export default (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log("Server error", err);
    res.status(500).json({errorCode: "ERR-001", message: "Internal Server Error"});
}

//RequestHandler, ErrorRequestHandler,