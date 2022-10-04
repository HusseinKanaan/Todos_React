import { useState } from "react"
import './Todos.css'
const Todos = () => {
        const [add, setAdd] = useState('')
    /* const [first, setfirst] = useState('')  */
    return (
        
        <div>
            <div className='todoContainer'>
                <input type="text" />
                <button className='plusBtn' onClick={''}>+</button>
                <section className='inputContainer'>
                    <input type='hidden'/>Baue ein Haus<input/>
                    <input type="text" />
                    <input type="text" />Ruf Elon an<input/>
                </section>

            </div>
        </div>
    )

}

export default Todos;