var router = require("express").Router()
var Comments = require("../models/comment")

//  createComment

router.post("/api/comments", (req, res, next) => {
    Comments.create(req.body)
        .then(comment => {
            res.send(comment)
        })
        .catch(next)
})

// deleteComment
router.delete("/api/comments/:commentId", (req, res, next) => {
    Comments.findByIdAndRemove(req.params.commentId)
        .then(commt => {
            res.send({ message: "Successfully deleted comment" })
        })
        .catch(next)
})

// updateComment (put)
router.put("/api/comments/:commentId", (req, res, next) => {
    Comments.findByIdAndUpdate(req.params.commentId, req.body, ({ new: true }))
        .then(commt => {
            res.send({ message: "Successfully updated list", data: commt })
        })
        .catch(next)
})

// getCommentsByTaskId
router.get("/api/tasks/:taskId/comments", (req, res, next) => {
    Comments.find({ taskId: req.params.taskId })
        .then(comments => {
            return res.send(comments)
        })
        .catch(next)
})

// Get comments by boardId
router.get('/api/boards/:boardId/comments', (req, res, next) => {
    Comments.find({boardId: req.params.boardId})
        .then(comments => {
            return res.send(comments)
        })
})

//TEST ONLY
router.get("/api/comments", (req, res, next) => {
    Comments.find()
        .then(comments => {
            return res.send(comments)
        })
        .catch(next)
})



module.exports = { router };