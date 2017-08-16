import axios from 'axios';

let baseUrl = 'http://127.0.0.1:3001/api/v1';
let instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const fetch = (type, data) => {
    return new Promise((resolve, reject) => {
        instance[type](data.route, data.data)
            .then(response => {
                resolve(response.data);
            })
            .catch(reject);
    });

};


export const post = data => fetch('post', data);
export const get = data => fetch('get', data);
export const put = data => fetch('put', data);