import Mock from 'mockjs'; // import mockjs module
let Todos = []; // define the data we need
const COUNT = [1, 2, 3, 4, 5]; // define the quantity we need

for(let i=1; i<=COUNT.length; i++){
    Todos.push(Mock.mock({ // Mock.mock(template): generates simulation data from a data template
        id: Mock.Random.guid(), // random id
        title: Mock.Random.first(), // Randomly generate a common English name.
        isDelete: false,
        locked: Mock.Random.boolean(), 
        record: COUNT.map(()=>{ // 화살표 함수(arrow function) function(){} 하고 같은뜻
            return{
                text: Mock.Random.cparagraph(2), // Randomly generate a piece of Chinese text
                isDelete: false,
                checked: Mock.Random.boolean()
            };
        })
    }));
}
export{
    Todos
};