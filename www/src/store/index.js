// Vuex 'store': Sets and maintains front-end application 'state'

import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

var production = !window.location.host.includes('localhost')
var baseUrl = production ? '//board-planner.herokuapp.com/' : '//localhost:3000/'

var api = axios.create({
    baseURL: baseUrl + 'api/',
    timeout: 3000,
    withCredentials: true
})

var auth = axios.create({
    baseURL: baseUrl + 'auth/',
    timeout: 3000,
    withCredentials: true
})

var unconventionalRoutes = axios.create({
    baseURL: baseUrl,
    timeout: 3000,
    withCredentials: true
})

vue.use(vuex)

export default new vuex.Store({
    state: {
        user: {},
        authError: {
            error: false,
            message: ""
        },
        userBoards: [],
        sharedBoards: [],
        activeBoard: {},
        boardOwner: {},
        boardLists: [],
        boardTasks: [],
        boardComments: [],
        draggedTaskInfo: {},
        taskCommentOwners: []
    },

    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setAuthError(state, error) {
            state.authError = {
                error: error.error,
                message: error.message
            }
        },
        setActiveBoard(state, board) {
            state.activeBoard = board
        },
        setUserBoards(state, boardsArr) {
            state.userBoards = boardsArr
        },
        setBoardLists(state, lists) {
            state.boardLists = lists
        },
        setBoardTasks(state, tasks) {
            state.boardTasks = tasks
        },
        setBoardComments(state, comments) {
            state.boardComments = comments
        },
        setDraggedTaskInfo(state, info) {
            state.draggedTaskInfo = info
        },
        setBoardOwner(state, owner) {
            state.boardOwner = owner
        },
        setSharedBoards(state, boards) {
            state.sharedBoards = boards
        },
        setUserInfo(state, commentOwners) {
            console.log('at User Info', commentOwners)
            state.taskCommentOwners.push(commentOwners)
        }
    },

    actions: {
        // Auth
        registerUser({ commit, dispatch }, user) {
            auth.post('register', user)
                .then(res => {
                    var newUser = res.data
                    console.log('newUser:', newUser)
                    commit('setUser', newUser)
                    commit('setAuthError', { error: false, message: '' })

                    var defaultBoard = {
                        title: 'Untitled Board',
                        desctiption: 'Your first board! Click here to customize and start planning you project!',
                        userId: newUser._id
                    }
                    // commit('setActiveBoard', defaultBoard)
                    commit('setUserBoards', [defaultBoard])

                    router.push({
                        name: 'Home'
                    })
                })
                .catch(err => {
                    console.log(err)
                    commit('setAuthError', { error: true, message: 'Register failed: Invalid username, email, or password given' })
                })
        },

        loginUser({ commit, dispatch }, user) {
            auth.post('login', user)
                .then(res => {
                    var newUser = res.data
                    console.log('logged-in user:', newUser)
                    commit('setUser', newUser)
                    commit('setAuthError', { error: false, message: '' })
                    dispatch('getUserBoards')
                    router.push({
                        name: 'Home'
                    })
                })
                .catch(err => {
                    console.log(err)
                    commit('setAuthError', { error: true, message: 'Log-in failed: Invalid username or password' })
                })
        },

        authenticateUser({ commit, dispatch }) {
            auth.get('authenticate')
                .then(res => {
                    var sessionUser = res.data
                    console.log('returning user:', sessionUser)
                    commit('setUser', sessionUser)
                    router.push({
                        name: 'Home'
                    })
                })
                .catch(err => {
                    console.error(err)
                })
        },
        logoutUser({ commit, dispatch }) {
            auth.delete('logout')
                .then(() => {
                    console.log('User logged out')
                    commit('setUser', {})
                    commit('setAuthError', { error: false, message: '' })
                    commit('setActiveBoard', {})
                    commit('setUserBoards', [])
                    commit('setBoardLists', [])
                    commit('setBoardTasks', [])
                    commit('setBoardComments', [])
                    commit('setDraggedTaskInfo', {})
                    commit('setBoardOwner', {})
                    commit('setSharedBoards', [])
                    commit('setUserInfo', [])
                    router.push({
                        name: 'Welcome'
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        },

        // API
        getUserBoards({ commit, dispatch }) {
            unconventionalRoutes
                .get('myBoards')
                .then(res => {
                    var userBoards = res.data
                    //console.log('user boards:', userBoards)
                    commit('setUserBoards', userBoards)
                })
        },
        getBoardLists({ commit, dispatch }, boardId) {
            api
                .get(`boards/${boardId}/lists`)
                .then(res => {
                    var lists = res.data
                    // console.log('User Board Lists', lists)
                    commit('setBoardLists', lists)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getBoardTasks({ commit, dispatch }, boardId) {
            api
                .get(`boards/${boardId}/tasks`)
                .then(res => {
                    var tasks = res.data
                    // console.log('User Board Tasks', tasks)
                    commit('setBoardTasks', tasks)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getBoardComments({ commit, dispatch }, boardId) {
            console.log('boardID', boardId)
            api
                .get(`boards/${boardId}/comments`)
                .then(res => {
                    var comments = res.data
                    // console.log('User Board Comments', comments)
                    commit('setBoardComments', comments)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        sendingActiveBoard({ commit, dispatch }, board) {
            commit('setActiveBoard', board)
            dispatch('getBoardLists', board._id)
            dispatch('getBoardTasks', board._id)
            dispatch('getBoardComments', board._id)
        },
        createBoard({ commit, dispatch }, board) {
            api
                .post('boards', board)
                .then(res => {
                    var newBoard = res.data
                    // console.log('new board:', newBoard)
                    dispatch('getUserBoards')
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteBoard({ commit, dispatch }, board) {
            api
                .delete(`boards/${board._id}`)
                .then(res => {
                    var deletedBoard = board
                    //console.log('deleted board:', deletedBoard)
                    dispatch('getUserBoards')
                })
                .catch(err => {
                    console.log(err)
                })
        },
        updateBoard({ commit, dispatch }, board) {
            api
                .put(`boards/${board._id}`, board)
                .then(res => {
                    var updatedBoard = res.data.data
                    console.log('updated board:', updatedBoard)
                    dispatch('sendingActiveBoard', updatedBoard)
                    // dispatch('getBoardLists', updatedBoard.boardId)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        createTask({ commit, dispatch }, task) {
            api
                .post('tasks', task)
                .then(res => {
                    var newTask = res.data
                    //console.log('new task:', newTask)
                    dispatch('getBoardTasks', newTask.boardId)
                    dispatch('getBoardLists', newTask.boardId)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        editTask({ commit, dispatch }, task) {
            api
                .put(`tasks/${task._id}`, task)
                .then(res => {
                    var updatedTask = res.data.data
                    //console.log('updated task:', updatedTask)
                    dispatch('getBoardTasks', updatedTask.boardId)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteTask({ commit, dispatch }, task) {
            api
                .delete(`tasks/${task._id}`)
                .then(res => {
                    //console.log('deleted task')
                    dispatch('getBoardTasks', task.boardId)
                    dispatch('getBoardLists', task.boardId)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        createList({ commit, dispatch }, list) {
            api
                .post('lists', list)
                .then(res => {
                    var newList = res.data
                    //console.log('new list:', newList)
                    dispatch('getBoardLists', newList.boardId)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        updateList({ commit, dispatch }, list) {
            api
                .put(`lists/${list._id}`, list)
                .then(res => {
                    var updatedList = res.data.data
                    console.log('updated list:', updatedList)
                    dispatch('getBoardLists', updatedList.boardId)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteList({ commit, dispatch }, list) {
            api
                .delete(`lists/${list._id}`)
                .then(res => {
                    var deletedList = list
                    //console.log('deleted list:', deletedList)
                    dispatch('getBoardLists', deletedList.boardId)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        setDraggedTaskInfo({ commit, dispatch }, info) {
            commit("setDraggedTaskInfo", info)
        },
        handleTaskDrop({ commit, dispatch }, data) {
            var taskId = data.draggedTask._id
            var boardId = data.draggedTask.boardId
            var task = {
                listId: data.dropList._id
            }
            api.put(`tasks/${taskId}`, task)
                .then(() => {
                    // If drop-target list has NO tasks of its own
                    if (!data.dropTaskId) {
                        var taskIdsArray = [taskId]

                        var originTaskIdsArray = data.originList.taskIds
                        originTaskIdsArray.splice(originTaskIdsArray.indexOf(taskId), 1) // Remove dragged Task from old location in its original list
                        api.put(`lists/${data.originList._id}`, {taskIds: originTaskIdsArray}) // ...and update the original list's taskIds array
                            .then(() => {
                                // console.log('updated origin-list taskIds')
                            }).catch(err => {console.log(err)})
                    }

                    // If drop-target list DOES already have tasks of its own
                    if (data.dropTaskId) {
                        var taskIdsArray = data.dropList.taskIds
                        var dropLocationIndex = taskIdsArray.indexOf(data.dropTaskId)
                        
                        var originList = data.originList
                        if (originList._id === data.dropList._id) { // If dragging-&-dropping within the same list...
                            taskIdsArray.splice(taskIdsArray.indexOf(taskId), 1) // Remove dragged Task from old location in that same list
                        } else {
                            var originTaskIdsArray = data.originList.taskIds
                            originTaskIdsArray.splice(originTaskIdsArray.indexOf(taskId), 1) // Remove dragged Task from old location in its original list
                            api.put(`lists/${data.originList._id}`, {taskIds: originTaskIdsArray}) // ...and update the original list's taskIds array
                                .then(() => {
                                    // console.log('updated origin-list taskIds')
                                }).catch(err => {console.log(err)})
                        }
                        
                        taskIdsArray.splice(dropLocationIndex, 0, taskId) // Insert dragged Task at new location
                    }
                    
                    api.put(`lists/${data.dropList._id}`, {taskIds: taskIdsArray}) // Update the drop-target list's taskIds array
                        .then(res => {
                            // var updatedList = res.data.data
                            // console.log('updated list:', updatedList)
                            dispatch('getBoardLists', boardId)
                            dispatch('getBoardTasks', boardId)
                        }).catch(err => {console.log(err)})
                })
                .catch(err => {
                    console.log(err)
                })
        },
        createComment({ commit, dispatch }, comment) {
            api
                .post('comments', comment)
                .then(res => {
                    var newComment = res.data
                    console.log('new comment:', newComment)
                    dispatch('getBoardComments', newComment.boardId)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteComment({ commit, dispatch }, comment) {
            api
                .delete(`comments/${comment._id}`)
                .then(res => {
                    dispatch('getBoardComments', comment.boardId)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        updateComment({ commit, dispatch }, comment) {
            api
                .put(`comments/${comment._id}`, comment)
                .then(res => {
                    var updatedComment = res.data.data
                    dispatch('getBoardComments', updatedComment.boardId)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getCommentByUser({ commit, dispatch }, userInfo) {
            api
                .get(`users/${userInfo}/info`, userInfo)
                .then(res => {
                    var commentOwners = res.data
                    commit('setUserInfo', commentOwners)
                })
                .catch(err => {
                    console.log(err)
                })
        },

        updateBoardCollaborators({ commit, dispatch }, board) {
            api
                .put(`boards/${board._id}`, board)
                .then(res => {
                    var updatedBoard = res.data.data
                    console.log('updated board:', updatedBoard)
                    commit('setActiveBoard', board)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addBoardCollaborator({ commit, dispatch }, data) {
            api
                .get(`users/email/${data.collaboratorEmail}`)
                .then(res => {
                    var collaborator = res.data
                    console.log('board:', board)
                    console.log('collaborator:', collaborator)

                    var board = data.board
                    board.collaborators.push(collaborator)

                    dispatch('updateBoardCollaborators', board)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getBoardOwner({ commit, dispatch }, board) {
            api
                .get(`users/${board.userId}/info`)
                .then(res => {
                    var boardOwner = res.data
                    console.log('board owner:', boardOwner)
                    commit('setBoardOwner', boardOwner)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getSharedBoards({ commit, dispatch }, userId) {
            api
                .get(`user/${userId}/shared`)
                .then(res => {
                    var sharedBoards = res.data
                    console.log('shared boards:', sharedBoards)
                    commit('setSharedBoards', sharedBoards)
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }
})