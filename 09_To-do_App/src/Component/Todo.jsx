import React from 'react';
import { useState } from 'react';
const Todo = () => {
    const [Input, setInput] = useState("")
    const [Tasks, setTask] = useState([])
    function handlesubmit(e) {
        e.preventDefault()
        setTask([...Tasks, Input])
        setInput("")
    }
    function deletetask(index) {
        setTask(Tasks.filter((_, i) => i !== index))
    }
    return (
        <>
            <div className="container">
                <h2>To-do App</h2>
                <input type="text"
                    placeholder='Enter your task'
                    value={Input}
                    onChange={(e) => setInput(e.target.value)}

                />
                <button onClick={handlesubmit}>Add ✔</button>
                <div className="text">
                    {
                        Tasks.map((task, index) => (
                            <div className="task">
                                <p>{task}</p>
                                <span
                                    onClick={() =>
                                        deletetask(index)
                                    }>
                                    ❌
                                </span>

                            </div>
                        ))
                    }

                </div>

            </div></>
    )
}
export default Todo;
