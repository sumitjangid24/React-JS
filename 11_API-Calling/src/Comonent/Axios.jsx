import axios from 'axios'
import React, { useEffect, useState } from 'react';

const Axios = () => {
    const [Dataval, setData] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        GetData()
    }, [])
    const GetData = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(data);

        setData(data)
        setloading(false)
    }

    return (
        <div>
            <h2>Click button and show API data</h2>
            <button onClick={GetData}>Click</button>

            {
                loading ? (
                    <div>
                        <p>Loading</p>
                    </div>) : (
                    <div>
                        {Dataval.map((Dataval) => {
                            return (
                                <div key={Dataval}>
                                    <h3>{Dataval.title}</h3>
                                    <p>{Dataval.body}</p>
                                </div>
                            )
                        })}
                    </div>)
            }
        </div>
    );
}

export default Axios;
