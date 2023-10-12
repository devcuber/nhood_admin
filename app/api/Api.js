import axios from 'axios';

const base = 'http://localhost';
const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
}

const api_config = require('@api/config.json');
const login_url = api_config['base'] + api_config['login']
const news_url = api_config['base'] + api_config['news']
const resume_url = api_config['base'] + api_config['resume']
const summary_url = api_config['base'] + api_config['summary']

class Api {
    constructor() {
        this.request = axios.create({ baseURL: base, headers });
    }

    async LogIn(username, password) {
        value = {'username' : username,'password' : password}
        result = await this.request({ url: login_url, data: value, method: 'post' })
            .catch(function (error) {
                if (error.response) {
                    alert('usuario o contraseña no son correctos')
                } else if (error.request) {
                    alert('Error de conexión')
                } else {
                    alert('error')
                }
            })
        if (result && result != undefined)
            return result.data
        return null

    }
    async getNews(id) {
        result = await this.request({ url: news_url + id })
            .catch(function (error) {
                if (error.response) {
                    alert('Error')
                } else if (error.request) {
                    alert('Error de conexión')
                } else {
                    alert('error')
                }
            })
        if (result && result != undefined)
            return result.data
        return {'rows':[]}
    }

    async getResume(id) {
        result = await this.request({ url: resume_url + id })
            .catch(function (error) {
                if (error.response) {
                    alert('Error')
                } else if (error.request) {
                    alert('Error de conexión')
                } else {
                    alert('error')
                }
            })
        if (result && result != undefined)
            return result.data
        return {'rows':[]}
    }

    async getSummary(id) {
        result = await this.request({ url: summary_url + id })
            .catch(function (error) {
                if (error.response) {
                    alert('Error')
                } else if (error.request) {
                    alert('Error de conexión')
                } else {
                    alert('error')
                }
            })
        if (result && result != undefined)
            return result.data
        return {}
    }


}

export default Api;