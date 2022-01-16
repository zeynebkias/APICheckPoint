import React from 'react'
import axios from 'axios'
import {useEffect , useState} from 'react'

function AxiosComponent() {

    const [posts , setPost] = useState([])

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users') 
.then(res => {
    setPost(res.data) // data motcle
})

})



    return (
        <div>
             <p>DATA</p>
       <ul>
           {posts.map((post) =>(<li key={post.id}>{post.name}</li>))} 
       </ul>
        </div>
    )
}

export default AxiosComponent;
