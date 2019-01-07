import axios from 'axios';

export const getTodoList = params => { // wrap a function called getTodoList
    return axios.get('/todo/list', {// request path '/todo/list'
        params: params
    });
};

export const addTodo = params => {
    return axios.post('/todo/addTodo', params).then(res => res.data);
}