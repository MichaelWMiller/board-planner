var router = require("express").Router()
var Boards = require("../models/board")

// createBoard - by userId
router.post("/api/boards/", (req, res, next) => {
    // req.body.userId = req.session.uid; // Get the userId from the logged-in user's session
    Boards.create(req.body)
        .then(board => {
            res.send(board);
        })
        .catch(next)
})

// deleteBoard
router.delete("/api/boards/:boardId", (req, res, next) => {
    Boards.findOneAndRemove({ userId: req.session.uid, _id: req.params.boardId })
        .then(board => {
            if (!board) {
                res.status(401).send({ error: "Not authorized to remove board" })
            } else {
                res.send({ message: "Successfully deleted board" })
            }
        })
        .catch(next)
})

// updateBoard
router.put("/api/boards/:boardId", (req, res, next) => {
    Boards.findByIdAndUpdate(req.params.boardId, req.body, { new: true })
        .then(board => {
            res.send({ message: "Successfully updated board", data: board })
        })
        .catch(next)
})

// getBoardsByUserId
router.get("/api/users/:userId/boards", (req, res, next) => {
    Boards.find({userId: req.params.userId})
        .then(boards => {
            return res.send(boards)
        })
        .catch(next)
})

module.exports = { router }