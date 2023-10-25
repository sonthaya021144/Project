import React from "react";
import {useNavigate, userNavigate} from 'react-router-dom'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Register(){
    const navigate =useNavigate
    const MySwal = withReactContent(Swal)
    const [input, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

      const handleSubmit = (event) => {
        event.preventDafault();
        console.log(input);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "fname": input.fname,
          "lname": input.lname,
          "username": input.username,
          "password": input.password,
          "email": input.email,
          "avatar": input.avatar
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://www.melivecode.com/api/users/create", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.status === 'ok'){
                MySwal.fire({
                    html: <i>{result.message}</i>,
                    icon: 'success'
                  }).then((value)=> {
                    navigate('/')
                  })
            }else{
                MySwal.fire({
                    html: <i>{result.message}</i>,
                    icon: 'error'
            })
          }
        })
          .catch(error => console.log('error', error));
      }

    return (
        <div>
        <form onSubmit={handleSubmit}>
             <label>Fname:
                <input
                type="text"
                name="Fname"
                value={input.Fname || ""}
                onChange={handleChange}
                />
             </label>
             <label>Lname:
                <input
                type="text"
                name="Lname"
                value={input.Lname || ""}
                onChange={handleChange}
                />
             </label>
              <label>username:
                <input
                type="text"
                name="username"
                value={input.username || ""}
                onChange={handleChange}
                />
            </label>
            <label>Password:
                <input
                type="Password"
                name="Password"
                value={input.Password || ""}
                onChange={handleChange}
                />
             </label>
             <label>Email:
                <input
                type="text"
                name="email"
                value={input.email || ""}
                onChange={handleChange}
                />
             </label>
             <label>Avatar:
                <input
                type="text"
                name="Avatar"
                value={input.Avatar || ""}
                onChange={handleChange}
                />
             </label>
        </form>
        </div>
    )
}

export default Register