const express = require("express");
const PagesController = require("../controllers/admin/positionController");

const positionRoute = express.Router();

positionRoute.get("/", PositionController.getPosition);

positionRoute.get("/editPosition/:id", PositionController.getEditPosition);

positionRoute.post("/editPosition/:id", PositionController.putEditPosition);

positionRoute.get("/deletePosition/:id", PositionController.deletePosition);

positionRoute.post("/position", PositionController.postPosition);

positionRoute.post("/page", PositionController.postPositionPage);

module.exports = positionRoute;
