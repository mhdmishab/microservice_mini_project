"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    userId: { type: "string", required: true },
    product: { type: "string", required: true },
    quantity: { type: "number", required: true }
});
exports.default = (0, mongoose_1.model)('Order', orderSchema);
