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

router.get('/api/workouts/', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(error => {
        res.json(error)
    })
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .then(dbRanges => {
        res.json(dbRanges);
    })
    .catch(error => {
        res.json(error);
    });
});
