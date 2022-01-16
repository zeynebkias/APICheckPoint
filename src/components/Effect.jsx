import React from 'react'
import {useEffect , useState} from 'react'


function Effect() {

    const [dataList, setData] = useState([]);


useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())  //json // first promise
.then((data) => { setData(data) }) // useState // second promise 
.catch(err => {

}) ;

},[]);

    return (
        <div>
        <p>DATA</p>
       <ul>
           {dataList.map((user) =>(<li key={user.id}>{user.name}</li>))} 
       </ul>
            
        </div>
    )
}

export default Effect;
