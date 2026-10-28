import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ApiData = () => {
    const [Dataval, setDataval] = useState([]);
    const [Text, setText] = useState('');

    useEffect(() => {
        GetData()
    }, [])
    const GetData = async () => {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        console.log(data);
        setDataval(data)
    }
    const filterData = Dataval.filter((key) => {
        return key.title.toLowerCase().includes(Text) ||
            key.category.toLowerCase().includes(Text)
    })

    return (
        <div>
            <h2>Product API</h2>
            <input type="text" value={Text}
                placeholder='Search Product....'
                onChange={(e) => setText(e.target.value)}
                className='border-2 mt-2.5 p-1 mb-3 w-2xs'
            />
            <table className="w-full border-collapse border border-gray-400">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-400 px-4 py-2 text-left">Product ID</th>
                        <th className="border border-gray-400 px-4 py-2 text-left">Product Name</th>
                        <th className="border border-gray-400 px-4 py-2 text-left">Price</th>
                        <th className="border border-gray-400 px-4 py-2 text-left">Category</th>
                        <th className="border border-gray-400 px-4 py-2 text-left">Image</th>
                    </tr>
                </thead>

                <tbody>
                    {filterData.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2">
                                {item.id}
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                                {item.title}
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                                {item.price}$
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                                {item.category}
                            </td>
                            <td className="border border-gray-400 px-4 py-3">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-contain"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ApiData;
