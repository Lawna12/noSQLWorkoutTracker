const express = require('express');
const path = require('path');
const router = new express.Router();
const db = require("../models");
const {Types: {ObjectId}} = require('mongoose');



router.get("/exercise", (req, res) => {
    res.sendFile(path.resolve("public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.resolve("public/stats.html"));
});
