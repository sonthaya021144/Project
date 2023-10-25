import { useState } from 'react';

function login() {
    const [input, setInputs] = useState({});
    
    const handleChange = (Event) =>{
        const name = Event.target.name;
        const value = Event.target.value
        setInputs(value =>({...value, [name]: value}))
    }

    const handleSubmit = (Event) => {
        Event.preventDefault();
        console.log(input)
    }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Username:
          <input
            type="texe" 
            name="username"
            value={input.username || ""}
            onChange={handleChange} 
            />
        </label>
        <label>Password:
          <input
            type="password" 
            name="password"
            value={input.age || ""}
            onChange={handleChange} 
            />
        </label>
      </form>
    </div>
  )
}

export default login