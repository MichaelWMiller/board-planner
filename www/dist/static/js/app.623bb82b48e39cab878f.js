webpackJsonp([1],{"+s+b":function(t,s){},"1vYy":function(t,s){},IWEX:function(t,s){},"Ie7+":function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App",mounted:function(){this.$store.dispatch("authenticateUser")}},o,!1,function(t){e("rPCL")},null,null).exports,n=e("/ocq"),r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"topbar bgcolor row"},[t.user._id?e("div",{staticClass:"col-sm-4 menu p-4"},[e("a",{staticClass:"btn btn-info text-light",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.showBoardsList(s)}}},[t._v("Home")])]):t._e(),t._v(" "),e("div",{class:{"col-sm-4":t.user._id,"col-sm-12":!t.user._id}},[e("h1",{staticClass:"text-center text-light py-4"},[t._v("Board-Planner")])]),t._v(" "),t.user._id?e("div",{staticClass:"col-sm-4 logout p-4"},[e("a",{staticClass:"btn btn-danger text-light",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.logout(s)}}},[t._v("LOGOUT")])]):t._e()])},staticRenderFns:[]};var d=e("VU/8")({name:"TopBar",data:function(){return{}},computed:{user:function(){return this.$store.state.user}},methods:{showBoardsList:function(){this.$router.push("Home")},logout:function(){this.$store.dispatch("logoutUser")}}},r,!1,function(t){e("dYeF")},"data-v-322bfbd8",null).exports,c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"errorMsg bg-danger my-2 py-3"},[s("span",{staticClass:"h3 d-block text-center text-white"},[this._t("default")],2)])},staticRenderFns:[]};var l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"signIn container"},[e("div",{staticClass:"signInForm"},[e("form",{staticClass:"border border-secondary p-4",on:{submit:function(s){s.preventDefault(),t.submit(s)}}},[e("h4",{staticClass:"text-center"},[t._v("Sign In")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"ml-4",attrs:{for:"email"}},[t._v("Email:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",id:"email"},domProps:{value:t.user.email},on:{input:function(s){s.target.composing||t.$set(t.user,"email",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"ml-4",attrs:{for:"password"}},[t._v("Password:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-info px-4",attrs:{type:"submit"}},[t._v("I want in!")])]),t._v(" "),e("div",{staticClass:"text-center pt-4"},[e("a",{staticClass:"text-muted",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.showRegisterForm(s)}}},[t._v("Register!")])])])])},staticRenderFns:[]};var u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"register container mt-4"},[e("form",{staticClass:"border border-secondary p-4",attrs:{action:"#"},on:{submit:function(s){s.preventDefault(),t.submit(s)}}},[e("h4",{staticClass:"text-center"},[t._v("Register")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"username"}},[t._v("Name: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",id:"username"},domProps:{value:t.user.name},on:{input:function(s){s.target.composing||t.$set(t.user,"name",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",id:"email"},domProps:{value:t.user.email},on:{input:function(s){s.target.composing||t.$set(t.user,"email",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v("Password: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-info px-4",attrs:{type:"submit"}},[t._v("Submit")])]),t._v(" "),e("div",{staticClass:"text-center pt-4"},[e("a",{staticClass:"text-muted",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.showSignInForm(s)}}},[t._v("Sign In")])])])},staticRenderFns:[]};var m={name:"Welcome",components:{topBar:d,errorMsg:e("VU/8")({name:"ErrorMsg"},c,!1,function(t){e("shHC")},"data-v-d4333f90",null).exports,signIn:e("VU/8")({name:"SignIn",data:function(){return{user:{password:"",email:""}}},methods:{submit:function(){this.$store.dispatch("loginUser",this.user)},showRegisterForm:function(){this.$emit("showRegisterForm")}}},l,!1,function(t){e("oICh")},"data-v-797fe7d0",null).exports,register:e("VU/8")({name:"Register",data:function(){return{user:{name:"",email:"",password:""}}},methods:{submit:function(){this.$store.dispatch("registerUser",this.user)},showSignInForm:function(){this.$emit("showSignInForm")}}},u,!1,function(t){e("iW91")},"data-v-a2b495f2",null).exports},data:function(){return{showSignIn:!0}},computed:{authError:function(){return this.$store.state.authError}}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"welcome"},[e("div",{staticClass:"container-fluid pb-5"},[e("topBar"),t._v(" "),t._m(0),t._v(" "),t.authError.error?e("errorMsg",[t._v(t._s(t.authError.message))]):t._e(),t._v(" "),t.showSignIn?e("signIn",{on:{showRegisterForm:function(s){t.showSignIn=!1}}}):t._e(),t._v(" "),t.showSignIn?t._e():e("register",{on:{showSignInForm:function(s){t.showSignIn=!0}}})],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"welcome-message container"},[s("h1",{staticClass:"text-center m-5"},[this._v("Welcome to Board-Planner!")]),this._v(" "),s("p",[this._v("We are a startup that is aimed at helping people plan out their projects...")]),this._v(" "),s("p",{staticClass:"p-4"},[this._v("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolores alias id, quaerat quos dolore earum ducimus\n        eaque velit dignissimos. Doloremque blanditiis aliquid nesciunt! Delectus, aperiam quisquam? Atque dolores autem\n        explicabo porro facere accusamus sint libero, reprehenderit soluta labore voluptatem!\n      ")])])}]};var h=e("VU/8")(m,v,!1,function(t){e("apRP")},"data-v-ec2e1f90",null).exports,p=e("bOdI"),f=e.n(p),b={name:"Comments",data:function(){return{showCommentEdit:!1,updatedComment:{body:this.comment.body,taskCommentOwners:{}}}},computed:{getUserId:function(t){return this.$store.dispatch("getCommentByUser",t),this.$store.state.taskCommentOwners}},props:["comment"],methods:{deleteComment:function(){console.log("delete comment"),this.$store.dispatch("deleteComment",this.comment)},editComment:function(){var t=this.comment;t.body=this.updatedComment.body,this.$store.dispatch("updateComment",t),this.showCommentEdit=!1}}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comments"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-1 commentTools"},[e("a",{staticClass:"text-danger",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.deleteComment(s)}}},[e("span",{staticClass:"fas fa-trash"})]),t._v(" "),e("p",{staticClass:"ml-4"},[t._v("{User.id}")])]),t._v(" "),e("div",{staticClass:".col comment-body"},[t.showCommentEdit?t._e():e("span",{staticClass:"d-block mb-2 pr-4 pb-2 rounded",on:{click:function(s){t.showCommentEdit=!0}}},[t._v(t._s(t.comment.body))]),t._v(" "),t.showCommentEdit?e("input",{directives:[{name:"model",rawName:"v-model",value:t.updatedComment.body,expression:"updatedComment.body"}],staticClass:"form-content d-block rounded pl-3",attrs:{type:"text"},domProps:{value:t.updatedComment.body},on:{input:function(s){s.target.composing||t.$set(t.updatedComment,"body",s.target.value)}}}):t._e(),t._v(" "),t.showCommentEdit?e("button",{staticClass:"btn btn-success btn-sm mb-2",on:{click:t.editComment}},[t._v("save")]):t._e(),t._v(" "),t.showCommentEdit?e("button",{staticClass:"btn btn-danger btn-sm mb-2",on:{click:function(s){t.showCommentEdit=!1}}},[t._v("cancel")]):t._e()])])])},staticRenderFns:[]};var g={name:"TaskEditForm",components:{comment:e("VU/8")(b,_,!1,function(t){e("IWEX")},"data-v-4cc3e40a",null).exports},data:function(){return{showModal:!0,taskDescription:this.task.description,commentDescription:""}},props:["task","list","board"],computed:{taskComments:function(){var t=this;return this.$store.state.boardComments.filter(function(s){return s.taskId===t.task._id})}},methods:{close:function(){this.$emit("closeTaskEditForm")},saveTaskDescription:function(){console.log("task description",this.taskDescription);var t=this.task;t.description=this.taskDescription,this.$store.dispatch("editTask",t)},saveCommentDescription:function(){var t={body:this.commentDescription,listId:this.task.listId,taskId:this.task._id,boardId:this.$store.state.activeBoard._id};console.log("comment",t),this.$store.dispatch("createComment",t),this.commentDescription=""}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"taskEditForm"},[t.showModal?e("div",[e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[e("div",{staticClass:"col"},[e("h3",[t._v("Edit Form")])]),t._v(" "),e("div",{staticClass:"div"},[e("p",{attrs:{"class:":"text-wrap"}},[t._v("Board Name: "+t._s(t.board.title))]),t._v(" "),e("p",{attrs:{"class:":"text-wrap"}},[t._v(" List:"+t._s(t.list.title))]),t._v(" "),e("p",{attrs:{"class:":"text-wrap"}},[t._v(" Task Name:"+t._s(t.task.title))])])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("h5",[t._v("Task Description:")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.taskDescription,expression:"taskDescription"}],staticClass:"p-1",domProps:{value:t.taskDescription},on:{input:function(s){s.target.composing||(t.taskDescription=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-sm btn-success",on:{click:t.saveTaskDescription}},[t._v("save")])]),t._v(" "),e("div",{staticClass:"col-6"},[e("h5",[t._v("Attachments?")]),t._v(" "),e("input",{staticClass:"p-1",attrs:{type:"file",id:"myFile"}})])]),t._v(" "),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col commentBody"},[e("h5",[t._v("Add Comment")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentDescription,expression:"commentDescription"}],staticClass:"p-1",domProps:{value:t.commentDescription},on:{input:function(s){s.target.composing||(t.commentDescription=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-sm btn-success",on:{click:t.saveCommentDescription}},[t._v("save")])])]),t._v(" "),e("div",{staticClass:"row existing"},[e("h6",[t._v("Existing Comments:")])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},t._l(t.taskComments,function(t){return e("comment",{attrs:{comment:t}})}))])]),t._v(" "),e("div",{}),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:" btn btn-success",on:{click:t.close}},[t._v("OK")])])])])])])],1):t._e()])},staticRenderFns:[]};var w=e("VU/8")(g,C,!1,function(t){e("h6Ln")},"data-v-2175e838",null).exports,B={name:"TaskCard",components:{taskEditForm:w},props:["task","list","board"],data:function(){return{updatedTask:{title:this.task.title},showQuickieEdit:!1,showTaskEditForm:!1}},computed:{taskComments:function(){var t=this;return this.$store.state.boardComments.filter(function(s){return s.taskId===t.task._id})}},methods:{toggleQuickieEdit:function(){this.showQuickieEdit=!this.showQuickieEdit},editTaskName:function(){var t=this.task;t.title=this.updatedTask.title,console.log("line 52:",t),this.$store.dispatch("editTask",t),this.showQuickieEdit=!1},deleteTask:function(){this.$store.dispatch("deleteTask",this.task),this.showQuickieEdit=!1},openTaskEditForm:function(){this.showTaskEditForm=!0},closeTaskEditForm:function(){this.showTaskEditForm=!1},dragStart:function(){this.$store.dispatch("setDraggedTask",this.task)}}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"taskCard"},[e("div",{staticClass:"row py-1 px-3 mb-2"},[t.showQuickieEdit?t._e():e("div",{staticClass:"task-title col-9 d-inline-block task-txt rounded-left",attrs:{draggable:"true"},on:{click:t.openTaskEditForm,closeTaskCard:t.closeTaskEditForm,dragstart:t.dragStart}},[t._v(t._s(t.task.title))]),t._v(" "),t.showQuickieEdit?e("input",{directives:[{name:"model",rawName:"v-model",value:t.updatedTask.title,expression:"updatedTask.title"}],staticClass:"task-title col-9 d-inline-block rounded-left",attrs:{type:"text"},domProps:{value:t.updatedTask.title},on:{input:function(s){s.target.composing||t.$set(t.updatedTask,"title",s.target.value)}}}):t._e(),t._v(" "),e("div",{staticClass:"edit-toggle col-3 d-inline-block d-flex justify-content-center align-items-center rounded-right",on:{click:t.toggleQuickieEdit}},[t._m(0)]),t._v(" "),t.showQuickieEdit?e("div",{staticClass:"quickieEdit-btns d-flex w-100 mt-1"},[e("button",{staticClass:"btn btn-sm btn-success",on:{click:t.editTaskName}},[t._v("save")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-danger ml-auto",on:{click:t.deleteTask}},[t._v("delete task")])]):t._e()]),t._v(" "),t.showTaskEditForm?e("taskEditForm",{attrs:{board:t.board,list:t.list,task:t.task},on:{closeTaskEditForm:t.closeTaskEditForm}}):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fas fa-pencil-alt"})])}]};var E={name:"List",components:{taskCard:e("VU/8")(B,k,!1,function(t){e("1vYy")},"data-v-6da2bb84",null).exports},props:["list"],data:function(){var t;return t={task:{title:""},showDeleteListDropdown:!1,updatedList:{title:this.list.title}},f()(t,"showDeleteListDropdown",!1),f()(t,"showListTitleEdit",!1),t},computed:{board:function(){return this.$store.state.activeBoard},listTasks:function(){var t=this;return this.$store.state.boardTasks.filter(function(s){return s.listId===t.list._id})}},methods:{addNewTask:function(){var t={title:this.task.title,description:"A new task",listId:this.list._id,boardId:this.board._id};this.$store.dispatch("createTask",t),this.task.title=""},toggleDeleteListDropdown:function(){this.showDeleteListDropdown=!this.showDeleteListDropdown},editListTitle:function(){var t=this.list;t.title=this.updatedList.title,this.$store.dispatch("updateList",t),this.showListTitleEdit=!1},deleteList:function(){this.showDeleteListDropdown=!1,this.$store.dispatch("deleteList",this.list)},dragover:function(){},taskDrop:function(){var t={draggedTask:this.$store.state.draggedTask,dropListId:this.list._id};this.$store.dispatch("updateTask",t)}}},x={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"spacer px-2"},[e("div",{staticClass:"list-bg listComponent rounded p-3",on:{drop:t.taskDrop,dragover:function(s){s.preventDefault(),t.dragover(s)}}},[e("div",{staticClass:"list-heading"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"list-title"},[t.showListTitleEdit?t._e():e("span",{staticClass:"d-block mb-2 pr-4 pb-2 rounded",on:{click:function(s){t.showListTitleEdit=!0}}},[t._v(t._s(t.list.title))]),t._v(" "),t.showListTitleEdit?e("input",{directives:[{name:"model",rawName:"v-model",value:t.updatedList.title,expression:"updatedList.title"}],staticClass:"form-content d-block rounded pl-3",attrs:{type:"text"},domProps:{value:t.updatedList.title},on:{input:function(s){s.target.composing||t.$set(t.updatedList,"title",s.target.value)}}}):t._e(),t._v(" "),t.showListTitleEdit?e("button",{staticClass:"btn btn-success btn-sm mb-2",on:{click:t.editListTitle}},[t._v("save")]):t._e(),t._v(" "),t.showListTitleEdit?e("button",{staticClass:"btn btn-danger btn-sm mb-2",on:{click:function(s){t.showListTitleEdit=!1}}},[t._v("cancel")]):t._e()]),t._v(" "),e("a",{staticClass:"delete-list-toggle ml-auto px-2 rounded elipse-color text-muted",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.toggleDeleteListDropdown(s)}}},[e("i",{staticClass:"fas fa-ellipsis-h"})])]),t._v(" "),t.showDeleteListDropdown?e("div",{staticClass:"delete-list-dropdown d-block mb-3"},[e("button",{staticClass:"btn btn-danger btn-sm btn-block",on:{click:t.deleteList}},[t._v("delete   list")])]):t._e()]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[t._l(t.listTasks,function(s){return e("taskCard",{attrs:{board:t.board,list:t.list,task:s}})}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.task.title,expression:"task.title"}],staticClass:"form-control mt-3 task-txt border-success",attrs:{type:"text"},domProps:{value:t.task.title},on:{input:function(s){s.target.composing||t.$set(t.task,"title",s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-success px-3 mt-2",on:{click:t.addNewTask}},[t._v("Add Task")])],2)])])])},staticRenderFns:[]};var L=e("VU/8")(E,x,!1,function(t){e("pGP8")},"data-v-af3111a0",null).exports,$={name:"BoardPreview",components:{list:L},data:function(){return{isModalVisible:!1}},props:["board","lists"],methods:{close:function(){this.$emit("closeBoardPreview")},gotoBoard:function(t){this.$emit("close"),console.log("board",t),this.$store.dispatch("sendingActiveBoard",t),this.$router.push("Board")},deleteBoard:function(t){this.$store.dispatch("deleteBoard",t),this.close()}}},T={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"boardPreview"},[e("transition",{attrs:{name:"modal-fade"}},[e("div",{staticClass:"modal-backdrop"},[e("div",{staticClass:"modal",attrs:{role:"dialog"}},[e("header",{staticClass:"modal-header"},[e("h5",[t._v(t._s(t.board.title))])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{attrs:{name:"section body"}},[e("div",{staticClass:"card-Body"},[t._v("\n              "+t._s(t.board.description)+"\n            ")])])]),t._v(" "),e("div",{staticClass:"row boardList p-3"},[e("h5",{staticClass:"p-3"},[t._v("Board Lists:")]),t._v(" "),e("ol",{},t._l(t.lists,function(s){return e("li",{staticClass:"listEntry mt-4"},[e("div",{staticClass:"col"},[t._v("\n                "+t._s(s.title)+"\n              ")]),t._v(" "),e("div",{staticClass:"col"},[t._v("\n                "+t._s(s.description)+"\n              ")])])}))]),t._v(" "),e("footer",{staticClass:"modal-footer"},[e("div",{staticClass:"col"},[e("button",{staticClass:"btn btn-alert btnDelete",attrs:{type:"button"},on:{click:function(s){t.deleteBoard(t.board)}}},[t._v("Delete!")])]),t._v(" "),e("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.close}},[t._v("Close me!")]),t._v(" "),e("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(s){t.gotoBoard(t.board)}}},[t._v("Edit Board")])])])])])],1)},staticRenderFns:[]};var D={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"background d-flex align-items-center justify-content-center"},[e("form",{staticClass:"bg-light border border-secondary rounded p-4",attrs:{action:"#"},on:{submit:function(s){s.preventDefault(),t.submit(s)}}},[e("h4",{staticClass:"text-center"},[t._v("Create a New Board")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"newBoardTitle"}},[t._v("Title: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.board.title,expression:"board.title"}],staticClass:"form-control",attrs:{type:"text",id:"newBoardTitle"},domProps:{value:t.board.title},on:{input:function(s){s.target.composing||t.$set(t.board,"title",s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"newBoardDesc"}},[t._v("Description: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.board.description,expression:"board.description"}],staticClass:"form-control",attrs:{type:"text",id:"newBoardTitleDesc"},domProps:{value:t.board.description},on:{input:function(s){s.target.composing||t.$set(t.board,"description",s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-default px-4",attrs:{type:"button"},on:{click:t.close}},[t._v("Cancel")]),t._v(" "),e("button",{staticClass:"btn btn-info px-4 ml-3",attrs:{type:"submit"}},[t._v("Submit")])])])},staticRenderFns:[]};var y={name:"BoardList",components:{boardPreview:e("VU/8")($,T,!1,function(t){e("+s+b")},"data-v-505f4cf4",null).exports,list:L,addBoardForm:e("VU/8")({name:"AddBoardForm",data:function(){return{board:{title:"",description:""}}},methods:{submit:function(){this.$store.dispatch("createBoard",this.board),this.close()},close:function(){this.$emit("closeAddBoardForm")}}},D,!1,function(t){e("fGbA")},"data-v-32a7c0d1",null).exports,taskEditForm:w},data:function(){return{isBoardPreviewVisible:!1,isAddBoardFormVisible:!1,activeBoardId:""}},computed:{userBoards:function(){return this.$store.state.userBoards},boardLists:function(){return this.$store.state.boardLists}},methods:{getBoardLists:function(t){this.$store.dispatch("getBoardLists",t._id)},showBoardPreview:function(t){this.getBoardLists(t),this.activeBoardId=t._id,this.isBoardPreviewVisible=!0},showBoard:function(t){return this.isBoardPreviewVisible&&t._id===this.activeBoardId},closeBoardPreview:function(){this.isBoardPreviewVisible=!1},showAddBoardForm:function(){this.isAddBoardFormVisible=!0},closeAddBoardForm:function(){this.isAddBoardFormVisible=!1}},mounted:function(){this.$store.dispatch("getUserBoards")}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"boardlist"},[e("h1",{staticClass:"p-3"},[t._v("My Boards")]),t._v(" "),e("div",{staticClass:"row page"},[t._l(t.userBoards,function(s){return e("div",{staticClass:"col boards"},[e("div",{staticClass:"boardPreview",staticStyle:{width:"18rem"},on:{click:function(e){t.showBoardPreview(s)}}},[e("div",{staticClass:"card card-bg"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title text-center m-4"},[t._v(t._s(s.title))]),t._v(" "),e("hr"),t._v(" "),e("p",{staticClass:"m-1 ml-2 pb-4"},[t._v(t._s(s.description))])])])]),t._v(" "),t.showBoard(s)?e("boardPreview",{attrs:{board:s,lists:t.boardLists},on:{closeBoardPreview:t.closeBoardPreview}}):t._e()],1)}),t._v(" "),e("div",{staticClass:"col new-board",on:{click:t.showAddBoardForm}},[t._m(0)])],2),t._v(" "),t.isAddBoardFormVisible?e("addBoardForm",{on:{closeAddBoardForm:t.closeAddBoardForm}}):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card",staticStyle:{width:"18rem"}},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[this._v("Add New Board")])])])}]};var I=e("VU/8")(y,P,!1,function(t){e("ycP+")},"data-v-7603c5e7",null).exports,F={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"collab-panel container-fluid bg-dark text-light"},[e("div",{staticClass:"invites"},[e("h4",{},[t._v("Invite another user to contribute to this board:")]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("invitee email: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newCollab.email,expression:"newCollab.email"}],staticClass:"form-control",attrs:{type:"text",id:"email"},domProps:{value:t.newCollab.email},on:{input:function(s){s.target.composing||t.$set(t.newCollab,"email",s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn",on:{click:t.addCollaborator}},[t._v("invite")])]),t._v(" "),e("div",{staticClass:"collaborators p-5"},[e("h6",[t._v("board owner: "+t._s(t.boardOwner))]),t._v(" "),e("h6",[t._v("board collaborators:")]),t._v(" "),t._l(t.boardCollaborators,function(s){return e("span",{staticClass:"px-3"},[t._v(t._s(s))])})],2)])},staticRenderFns:[]};var U={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shared-board-panel container-fluid bg-dark text-light"},t._l(t.sharedBoards,function(s){return e("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v(t._s(s.title))])}))},staticRenderFns:[]};var A={name:"Navbar",components:{collabPanel:e("VU/8")({name:"CollabPanel",data:function(){return{newCollab:{email:""}}},computed:{boardOwner:function(){return this.$store.state.boardOwner.name},boardCollaborators:function(){return this.$store.state.activeBoard.collaborators.map(function(t){return t.name})}},methods:{addCollaborator:function(){var t={board:this.$store.state.activeBoard,collaboratorEmail:this.newCollab.email};this.$store.dispatch("addBoardCollaborator",t)}},mounted:function(){this.$store.dispatch("getBoardOwner",this.$store.state.activeBoard)}},F,!1,function(t){e("hQQL")},"data-v-72e47726",null).exports,shardBoardPanel:e("VU/8")({name:"SharedBoardPanel",data:function(){return{}},computed:{sharedBoards:function(){return this.$store.state.sharedBoards}},methods:{},mounted:function(){this.$store.dispatch("getSharedBoards",this.$store.state.user._id)}},U,!1,function(t){e("tEfA")},"data-v-10c5ec5a",null).exports},data:function(){return{showCollabPanel:!1,showShardBoardPanel:!1}},computed:{isHomeRoute:function(){return"/Home"===this.$route.path||"/home"===this.$route.path},isBoardRoute:function(){return"/Board"===this.$route.path||"/board"===this.$route.path}},methods:{showBoardsList:function(){this.$router.push("Home")},toggleCollabPanel:function(){this.showCollabPanel=!this.showCollabPanel},toggleShardBoardPanel:function(){this.showShardBoardPanel=!this.showShardBoardPanel},logout:function(){this.$store.dispatch("logoutUser")}}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"navbar container-fluid bg-dark row text-light"},[e("div",{staticClass:"homelink navlink col-4 text-center py-4",on:{click:t.showBoardsList}},[t._v("\n      Home\n    ")]),t._v(" "),t.isHomeRoute?e("div",{staticClass:"sharedPanelToggle navlink col-4 text-center py-4",on:{click:t.toggleShardBoardPanel}},[t._v("\n      Shared Boards\n    ")]):t._e(),t._v(" "),t.isBoardRoute?e("div",{staticClass:"collabPanelToggle navlink col-4 text-center py-4",on:{click:t.toggleCollabPanel}},[t._v("\n      Collaborators\n    ")]):t._e(),t._v(" "),e("div",{staticClass:"logout navlink col-4 text-center py-4",on:{click:t.logout}},[t._v("\n      Logout\n    ")])]),t._v(" "),t.showCollabPanel?e("collabPanel"):t._e(),t._v(" "),t.showShardBoardPanel?e("shardBoardPanel"):t._e()],1)},staticRenderFns:[]};var S=e("VU/8")(A,R,!1,function(t){e("Ie7+")},"data-v-6cdea3c9",null).exports,N={name:"Home",components:{topBar:d,boardList:I,navbar:S},data:function(){return{showBoardsList:!0}}},V={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("topBar",{on:{showBoardsList:function(s){t.showBoardsList=!0}}}),t._v(" "),e("navbar"),t._v(" "),t.showBoardsList?e("boardList"):t._e()],1)},staticRenderFns:[]};var O=e("VU/8")(N,V,!1,function(t){e("kw3M")},"data-v-8e07f390",null).exports,H={name:"Board",components:{list:L,topBar:d,navbar:S},data:function(){return{showAddListDropdown:!1,newList:{title:""},showBoardTitleEdit:!1,showBoardDescEdit:!1,updatedBoard:{title:"",description:""}}},computed:{activeBoard:function(){return this.$store.state.activeBoard},boardLists:function(){return this.$store.state.boardLists}},methods:{showBoardList:function(){this.$router.push("Home")},createList:function(){var t={title:this.newList.title,description:"A new task-list",boardId:this.activeBoard._id};this.$store.dispatch("createList",t),this.showAddListDropdown=!1},toggleBoardEdit:function(){this.showBoardTitleEdit=!this.showBoardTitleEdit},toggleBoardDescEdit:function(){this.showBoardDescEdit=!this.showBoardDescEdit},editBoardTitle:function(){var t=this.activeBoard;t.title=this.updatedBoard.title,t.description=this.updatedBoard.description,this.$store.dispatch("updateBoard",t),this.showBoardTitleEdit=!1},editBoardDesc:function(){var t=this.activeBoard;t.description=this.updatedBoard.description,t.title=this.updatedBoard.title,this.$store.dispatch("updateBoard",t),this.showBoardDescEdit=!1}}},M={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"board bg-color"},[e("topBar"),t._v(" "),e("navbar"),t._v(" "),e("div",{staticClass:"boardList container-fluid p-3"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"board-title"},[t.showBoardTitleEdit?t._e():e("h5",{staticClass:"text-white mx-4"},[t._v("You are currently on your "+t._s(t.activeBoard.title)+" board!")]),t._v(" "),t.showBoardTitleEdit?e("input",{directives:[{name:"model",rawName:"v-model",value:t.updatedBoard.title,expression:"updatedBoard.title"}],staticClass:"board-title-input",attrs:{type:"text"},domProps:{value:t.updatedBoard.title},on:{input:function(s){s.target.composing||t.$set(t.updatedBoard,"title",s.target.value)}}}):t._e(),t._v(" "),t.showBoardTitleEdit?e("button",{staticClass:"btn btn-success btn-sm mb-2",on:{click:t.editBoardTitle}},[t._v("save")]):t._e(),t._v(" "),t.showBoardTitleEdit?e("button",{staticClass:"btn btn-danger btn-sm mb-2",on:{click:function(s){t.showBoardTitleEdit=!1}}},[t._v("cancel")]):t._e()]),t._v(" "),e("div",{},[e("a",{staticClass:"ml-auto px-2 rounded text-white",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.toggleBoardEdit(s)}}},[e("i",{staticClass:"fas fa-ellipsis-h"})])])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"board-desc"},[t.showBoardDescEdit?t._e():e("h6",{staticClass:"text-white mx-4"},[t._v("Description: "+t._s(t.activeBoard.description))]),t._v(" "),t.showBoardDescEdit?e("input",{directives:[{name:"model",rawName:"v-model",value:t.updatedBoard.description,expression:"updatedBoard.description"}],staticClass:"board-desc",attrs:{type:"text"},domProps:{value:t.updatedBoard.description},on:{input:function(s){s.target.composing||t.$set(t.updatedBoard,"description",s.target.value)}}}):t._e(),t._v(" "),t.showBoardDescEdit?e("button",{staticClass:"btn btn-success btn-sm mb-2",on:{click:t.editBoardDesc}},[t._v("save")]):t._e(),t._v(" "),t.showBoardDescEdit?e("button",{staticClass:"btn btn-danger btn-sm mb-2",on:{click:function(s){t.showBoardDescEdit=!1}}},[t._v("cancel")]):t._e()]),t._v(" "),e("div",{},[e("a",{staticClass:"ml-auto px-2 rounded text-white",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.toggleBoardDescEdit(s)}}},[e("i",{staticClass:"fas fa-ellipsis-h"})])])])]),t._v(" "),e("div",{staticClass:"list"},[e("div",{staticClass:"row mx-4"},[t._l(t.boardLists,function(t){return e("list",{staticClass:"col-3 mt-4",attrs:{list:t}})}),t._v(" "),e("div",{staticClass:"col-3 mt-4"},[t.showAddListDropdown?t._e():e("button",{staticClass:"add-list-toggle add-list btn btn-block",on:{click:function(s){t.showAddListDropdown=!0}}},[t._v("Add a list...")]),t._v(" "),t.showAddListDropdown?e("div",{staticClass:"add-list-dropdown p-2 rounded"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"list-title form-control",attrs:{type:"text"},domProps:{value:t.newList.title},on:{input:function(s){s.target.composing||t.$set(t.newList,"title",s.target.value)}}}),t._v(" "),e("div",{staticClass:"add-list-btns d-flex w-100 mt-1"},[e("button",{staticClass:"btn btn-sm px-3 btn-success",on:{click:t.createList}},[t._v("save")]),t._v(" "),e("button",{staticClass:"btn btn-sm px-3 btn-danger ml-auto",on:{click:function(s){t.showAddListDropdown=!1}}},[t._v("cancel")])])]):t._e()])],2)])],1)},staticRenderFns:[]};var Q=e("VU/8")(H,M,!1,function(t){e("uSeM")},"data-v-70093d77",null).exports;a.a.use(n.a);var W=new n.a({routes:[{path:"/",name:"Welcome",component:h},{path:"/home",name:"Home",component:O},{path:"/board",name:"Board",component:Q}]}),q=e("NYxO"),Y=e("mtWM"),j=e.n(Y),G=!window.location.host.includes("localhost")?"//board-planner.herokuapp.com/":"//localhost:3000/",X=j.a.create({baseURL:G+"api/",timeout:3e3,withCredentials:!0}),z=j.a.create({baseURL:G+"auth/",timeout:3e3,withCredentials:!0}),J=j.a.create({baseURL:G,timeout:3e3,withCredentials:!0});a.a.use(q.a);var K=new q.a.Store({state:{user:{},authError:{error:!1,message:""},userBoards:[],sharedBoards:[],activeBoard:{},boardOwner:{},boardLists:[],boardTasks:[],boardComments:[],draggedTask:{},taskCommentOwners:[]},mutations:{setUser:function(t,s){t.user=s},setAuthError:function(t,s){t.authError={error:s.error,message:s.message}},setActiveBoard:function(t,s){t.activeBoard=s},setUserBoards:function(t,s){t.userBoards=s},setBoardLists:function(t,s){t.boardLists=s},setBoardTasks:function(t,s){t.boardTasks=s},setBoardComments:function(t,s){t.boardComments=s},setDraggedTask:function(t,s){t.draggedTask=s},setBoardOwner:function(t,s){t.boardOwner=s},setSharedBoards:function(t,s){t.sharedBoards=s},setUserInfo:function(t,s){t.taskCommentOwners=userInfo}},actions:{registerUser:function(t,s){var e=t.commit;t.dispatch;z.post("register",s).then(function(t){var s=t.data;console.log("newUser:",s),e("setUser",s),e("setAuthError",{error:!1,message:""});var a={title:"Untitled Board",desctiption:"Your first board! Click here to customize and start planning you project!",userId:s._id};e("setUserBoards",[a]),W.push({name:"Home"})}).catch(function(t){console.log(t),e("setAuthError",{error:!0,message:"Register failed: Invalid username, email, or password given"})})},loginUser:function(t,s){var e=t.commit,a=t.dispatch;z.post("login",s).then(function(t){var s=t.data;console.log("logged-in user:",s),e("setUser",s),e("setAuthError",{error:!1,message:""}),a("getUserBoards"),W.push({name:"Home"})}).catch(function(t){console.log(t),e("setAuthError",{error:!0,message:"Log-in failed: Invalid username or password"})})},authenticateUser:function(t){var s=t.commit;t.dispatch;z.get("authenticate").then(function(t){var e=t.data;console.log("returning user:",e),s("setUser",e),W.push({name:"Home"})}).catch(function(t){console.error(t)})},logoutUser:function(t){var s=t.commit;t.dispatch;z.delete("logout").then(function(){console.log("User logged out"),s("setUser",{}),s("setAuthError",{error:!1,message:""}),s("setActiveBoard",{}),s("setUserBoards",[]),s("setBoardLists",[]),s("setBoardTasks",[]),s("setBoardComments",[]),W.push({name:"Welcome"})}).catch(function(t){console.log(t)})},getUserBoards:function(t){var s=t.commit;t.dispatch;J.get("myBoards").then(function(t){var e=t.data;s("setUserBoards",e)})},getBoardLists:function(t,s){var e=t.commit;t.dispatch;X.get("boards/"+s+"/lists").then(function(t){var s=t.data;e("setBoardLists",s)}).catch(function(t){console.log(t)})},getBoardTasks:function(t,s){var e=t.commit;t.dispatch;X.get("boards/"+s+"/tasks").then(function(t){var s=t.data;e("setBoardTasks",s)}).catch(function(t){console.log(t)})},getBoardComments:function(t,s){var e=t.commit;t.dispatch;console.log("boardID",s),X.get("boards/"+s+"/comments").then(function(t){var s=t.data;e("setBoardComments",s)}).catch(function(t){console.log(t)})},sendingActiveBoard:function(t,s){var e=t.commit,a=t.dispatch;e("setActiveBoard",s),a("getBoardLists",s._id),a("getBoardTasks",s._id),a("getBoardComments",s._id)},createBoard:function(t,s){t.commit;var e=t.dispatch;X.post("boards",s).then(function(t){t.data;e("getUserBoards")}).catch(function(t){console.log(t)})},deleteBoard:function(t,s){t.commit;var e=t.dispatch;X.delete("boards/"+s._id).then(function(t){e("getUserBoards")}).catch(function(t){console.log(t)})},updateBoard:function(t,s){t.commit;var e=t.dispatch;X.put("boards/"+s._id,s).then(function(t){var s=t.data.data;console.log("updated board:",s),e("sendingActiveBoard",s)}).catch(function(t){console.log(t)})},createTask:function(t,s){t.commit;var e=t.dispatch;X.post("tasks",s).then(function(t){var s=t.data;e("getBoardTasks",s.boardId)}).catch(function(t){console.log(t)})},editTask:function(t,s){t.commit;var e=t.dispatch;X.put("tasks/"+s._id,s).then(function(t){var s=t.data.data;e("getBoardTasks",s.boardId)}).catch(function(t){console.log(t)})},deleteTask:function(t,s){t.commit;var e=t.dispatch;X.delete("tasks/"+s._id).then(function(t){e("getBoardTasks",s.boardId)}).catch(function(t){console.log(t)})},createList:function(t,s){t.commit;var e=t.dispatch;X.post("lists",s).then(function(t){var s=t.data;e("getBoardLists",s.boardId)}).catch(function(t){console.log(t)})},updateList:function(t,s){t.commit;var e=t.dispatch;X.put("lists/"+s._id,s).then(function(t){var s=t.data.data;console.log("updated list:",s),e("getBoardLists",s.boardId)}).catch(function(t){console.log(t)})},deleteList:function(t,s){t.commit;var e=t.dispatch;X.delete("lists/"+s._id).then(function(t){e("getBoardLists",s.boardId)}).catch(function(t){console.log(t)})},setDraggedTask:function(t,s){var e=t.commit;t.dispatch;e("setDraggedTask",s)},updateTask:function(t,s){t.commit;var e=t.dispatch,a=s.draggedTask._id,o=s.draggedTask.boardId,i={listId:s.dropListId};X.put("tasks/"+a,i).then(function(t){t.data.data;e("getBoardLists",o),e("getBoardTasks",o)}).catch(function(t){console.log(t)})},createComment:function(t,s){t.commit;var e=t.dispatch;X.post("comments",s).then(function(t){var s=t.data;console.log("new comment:",s),e("getBoardComments",s.boardId)}).catch(function(t){console.log(t)})},deleteComment:function(t,s){t.commit;var e=t.dispatch;X.delete("comments/"+s._id).then(function(t){e("getBoardComments",s.boardId)}).catch(function(t){console.log(t)})},updateComment:function(t,s){t.commit;var e=t.dispatch;X.put("comments/"+s._id,s).then(function(t){var s=t.data.data;e("getBoardComments",s.boardId)}).catch(function(t){console.log(t)})},getCommentByUser:function(t,s){t.commit;var e=t.dispatch;console.log(s),X.get("users/"+s.userId,s).then(function(t){e("setUserInfo",s)}).catch(function(t){console.log(t)})},updateBoardCollaborators:function(t,s){var e=t.commit;t.dispatch;X.put("boards/"+s._id,s).then(function(t){var a=t.data.data;console.log("updated board:",a),e("setActiveBoard",s)}).catch(function(t){console.log(t)})},addBoardCollaborator:function(t,s){t.commit;var e=t.dispatch;X.get("users/email/"+s.collaboratorEmail).then(function(t){var a=t.data;console.log("board:",o),console.log("collaborator:",a);var o=s.board;o.collaborators.push(a),e("updateBoardCollaborators",o)}).catch(function(t){console.log(t)})},getBoardOwner:function(t,s){var e=t.commit;t.dispatch;X.get("users/"+s.userId+"/info").then(function(t){var s=t.data;console.log("board owner:",s),e("setBoardOwner",s)}).catch(function(t){console.log(t)})},getSharedBoards:function(t,s){var e=t.commit;t.dispatch;X.get("user/"+s+"/shared").then(function(t){var s=t.data;console.log("shared boards:",s),e("setSharedBoards",s)}).catch(function(t){console.log(t)})}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:W,store:K,components:{App:i},template:"<App/>"})},apRP:function(t,s){},dYeF:function(t,s){},fGbA:function(t,s){},h6Ln:function(t,s){},hQQL:function(t,s){},iW91:function(t,s){},kw3M:function(t,s){},oICh:function(t,s){},pGP8:function(t,s){},rPCL:function(t,s){},shHC:function(t,s){},tEfA:function(t,s){},uSeM:function(t,s){},"ycP+":function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.623bb82b48e39cab878f.js.map