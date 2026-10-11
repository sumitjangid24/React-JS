import React, { useState } from 'react';

const FetchData = () => {
    const [post, setPost] = useState([])
    const getdata = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await resp.json();
        console.log(data);

        setPost(data)

    };
    return (
        <div>
            <h2>Click button and show API data</h2>
            <button onClick={getdata}>Click</button>

            {post.map((post) => (
                <div key={post.userId}>
                    <h3>Title</h3>
                    <h4>{post.title}</h4>
                    <h3>Body</h3>
                    <p>{post.body}</p>
                </div>
            ))
            }
        </div>
    );
}

export default FetchData;
