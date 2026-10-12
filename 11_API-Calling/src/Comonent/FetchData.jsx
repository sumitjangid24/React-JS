import React, { useEffect, useState } from 'react';

const FetchData = () => {


    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getdata();
    }, [])
    const getdata = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await resp.json();
        // console.log(data);

        setPost(data)
        setLoading(false)

    };
    return (
        <div>
            <h2>Click button and show API data</h2>
            <button onClick={getdata}>Click</button>

            {
                loading ? <div>
                    <p>Loading Data...</p>
                </div> :
                    <div>
                        {post.map((post) =>
                        (
                            <div key={post.id}>
                                <p>{post.title}</p>
                                <p>{post.body}</p>
                            </div>
                        ))}

                    </div>

            }
        </div >
    );
}

export default FetchData;
