import {makeAutoObservable} from "mobx"

class Store {
    currentUser = null
    currentToken = null
    error = null
    url = 'http://95.217.133.188:8888/api'

    constructor() {
        makeAutoObservable(this)
    }

    login(login, password) {
        let loginData = {
            login: login,
            password: password
        };

        fetch(`${this.url}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
            .then(async (res) => {
                let data = await res.json()
                if (data.code === undefined) {
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('currentUser', JSON.stringify(data.currentUser))
                    this.currentUser = data.currentUser
                    this.currentToken = data.token
                } else {
                    this.error = data
                }
            })
    }

    logout() {
        this.currentUser = null
        this.currentToken = null
        this.error = null
        localStorage.clear()
    }
}

export default new Store()