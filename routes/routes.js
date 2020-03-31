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
    }).catch(err => {
        res.json(err)
    })
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .then(dbRanges => {
        res.json(dbRanges);
    })
    .catch(err => {
        res.json(err);
    });
});

router.post('/api/workouts', (req, res) => {
    db.Workout.create(req.body)
    .then(done => {
        res.json(done);
    })
    .catch(err => {
        res.json(err)
    });
});

router.put('/api/workouts/:_id', (req, res) => {
    db.Workout.updateOne({"_id": ObjectId(req.params.id)}, {$push: {'exercises': req.body}})
    .then(dbUpdate => {
        res.json(dbUpdate);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;
