const express = require("express");
const { transactionController } = require("../controllers");
const routers = express.Router();

routers.get("/get-history", transactionController.getTransactionHistory);
routers.get("/get-detail", transactionController.detailTransactionHistory);
routers.get("/get-transaction", transactionController.getAllTransaction);
routers.get(
  "/detail-transaction/:id",
  transactionController.getDetailTransaction
);
module.exports = routers;
