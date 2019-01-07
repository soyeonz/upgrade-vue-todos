import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';
import {Todos} from './data/todoList';

export default{
    // mock start
    start(){ // initialization function
        // this sets the mock adapter on the default instance
        let mock = new MockAdapter(axios); // create a MockAdapter instance(axios-mock-adapter)
        // get the todo list
        mock.onGet('/todo/list').reply(config => {// config refers to the value passed in the foreground
            // Q) 왜 꼭 바꿔줘야하는지? 그냥 그대로 쓰면 안되는거? 
            let mockTodo = Todos.map(tode => {// reorganize the Todos array and turn it into the data we want
                return{
                    id: tode.id,
                    title: tode.title,
                    count: tode.record.filter((data)=>{
                        if(data.checked==false) return true;
                        return false;
                    }).length,// filter to data in the record where 'checked' is true because they have been completed
                    locked: tode.locked,
                    isDelete: tode.isDelete
                };
            }).filter(tode => {
                if(tode.isDelete === true) return false;// filter out 'isDelete' to true because it has been deleted
                return true;
            });
            // Promise 객체 생성
            return new Promise((resolve, reject) => {
                // 0.2초 후 resolve()를 호출 
                // resolve() 가 호출되면 대기(pending)상태에서 이행(fulfilled)상태로 넘어감
                setTimeout(() => {
                    resolve([200, {
                        todos: mockTodo // return state 200, and returns data todos
                    }]);
                }, 200);
            });
        });

        // add a todo
        mock.onPost('/todo/addTodo').reply(config => {
            Todos.push({
                id: Mock.Random.guid(),
                title: 'newList',
                isDelete: false,
                locked: false,
                record: []
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200]);
                }, 200);
            });
        });
    }
};