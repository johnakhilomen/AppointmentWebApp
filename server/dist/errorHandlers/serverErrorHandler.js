"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    console.log("Server error", err);
    res.status(500).json({ errorCode: "ERR-001", message: "Internal Server Error" });
};
//RequestHandler, ErrorRequestHandler,
