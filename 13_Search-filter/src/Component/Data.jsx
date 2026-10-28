import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Data = () => {
    const [Dataval, setData] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(data);
        setData(data)
    }
    const filterData = Dataval.filter((key) => {
        return key.name.toLowerCase().includes(search.toLowerCase()) ||
            key.email.toLowerCase().includes(search.toLowerCase())
            ;


    })
    return (
        <div>
            <h2>Api Data</h2>
            <div className='mt-5 p-1.5'>
                <input type="text"
                    placeholder='Search User'
                    value={search} onChange={(e) => setSearch(e.target.value)}
                    className='border-2 mt-2 p-2' />
            </div>
            <div>
                {filterData.map((Dataval) => {
                    return (
                        <div key={Dataval}>
                            <h3 className='mt-3.5 ml-2.5  font-semibold field-sizing-content col-end-2'>{Dataval.id}:  {Dataval.name}{Dataval.email}</h3>
                            {/* <p></p> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Data;
//  'https://fakestoreapi.com/products'
