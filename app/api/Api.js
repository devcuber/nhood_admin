import axios from 'axios';

const base = 'http://localhost';
const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
}

const id = '123'

class Api {
    constructor() {
        this.request = axios.create({ baseURL: base, headers });
    }

    LogIn(username, password) {
        return {
            id : '42',
            name : 'Casa 42'
        }
        value = {
            'username' : username,
            'password' : password
        }
        return this.request({ url: 'Login', data: value, method: 'post' })
    }
    getNews() {
        return require('@test-data/news.json');
        return this.request({ url: 'News/' + id })
    }
    getFinantialResume() {
        return require('@test-data/finantial_resume.json');
        return this.request({ url: 'Resume/' + id })
    }
    getBalance() {
        return require('@test-data/summary_data.json');
        return this.request({ url: 'Balance/' + id })
    }


}

export default Api;