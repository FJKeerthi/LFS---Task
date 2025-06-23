const express = require("express");
const router = new express.Router();
const userController = require("../controllers/userControllers");
const reportController = require("../controllers/reportControllers");
const userUpload = require("../multerConfig/userConfig");

// user routes for get user data and upload images

// user routes for get user data and upload images
router.post("/register", userUpload.array("userimg"), userController.ImageUpload);
router.get("/getUser", userController.getUserdata);

// report routes for get reports and download images
router.get("/getReport", reportController.getReportdata);

module.exports = router;