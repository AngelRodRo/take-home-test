const express = require("express");

const router = express.Router();
const gitController = require("../controllers/git");

router.get("/", gitController.getCommits);

module.exports = router;
