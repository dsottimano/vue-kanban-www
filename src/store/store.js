import axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})


// REGISTER ALL DATA HERE 
let state = {
  boards: [],
  activeBoard: {},
  activeBoardData: {},
  boardAddMessage : '',
  tasks: {},
  error: {},
  user: {},
  loginModal: false,
  showBoardModal: false,
  showListModal: false,
  showLoginModal: false,
  loggedInState: false
}

let handleError = (err) => {
  state.error = err
}

export default {
  state,
  actions: {
    switchModal (property) {
      state[property] = !state[property]

    },
    //gets all the userboards for logged in user
    getBoards(callback) {
      api('userboards')
        .then(res => {
          state.boards = res.data.data
          if (callback) {
            callback()
          }
        })
        .catch(handleError)
    },
    getBoard(id) {
      state.activeBoardData = ''
      api('userboards/' + id)
        .then(res => {
          console.log(res.data.data[0])
          state.activeBoardData = res.data.data[0]
        })
        .catch(handleError)
    },
    //gets the userboard by id and returns the lists
    getLists(id) {
      api('userboards/' + id + '/lists')
        .then(res => {
          state.activeBoard = res.data.data
        })
        .catch(handleError)
    },
    getAllLists() {
      api('lists')
        .then(res => {
          state.activeBoard = res.data.data
        })
        .catch(handleError)
    },
    getTasks(id) {
      Vue.set(state.tasks, id, [])
      api('userboards/list/' + id + '/tasks')
        .then(res => {
          console.log('setting tasks for list', id)
          state.tasks[id] = res.data.data
        }).catch(handleError)

    },
    createBoard(board) {
      api.post('/boards', board)
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    },
    createList(title, desc,id) {
      let payload = {
        name : title,
        description : desc, 
        boardId : id
      }
      api.post('lists/', payload)
        .then(res => {
        this.getLists(id)
        })
        .catch(handleError)
    },
    removeBoard(board) {
      api.delete('boards/' + board._id)
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    },
    removeList(list) {
      api.delete('lists/' + list)
        .then(res => {
          this.getAllLists()
        })
        .catch(handleError)
    },
    login(email, password) {
      api.post('http://localhost:3000/login', {
        email: email,
        password: password
      }).then(res => {
        state.user = res.data.data.name
        state.loggedInState = true
      }).catch(handleError)
    },
    logout(callback) {
      api.post('http://localhost:3000/logout')
        .then(res => {
          console.log("successfully logged out")
          state.user = {}
          state.loggedInState = false
          callback()
        }).catch(handleError)
    },
    authenticate() {
      api.get('http://localhost:3000/authenticate')
        .then(res => {
          state.user = res.data.data.name
          state.loggedInState = state.user ? true : false
          return true
        }).catch(handleError)
    }

  }
}
