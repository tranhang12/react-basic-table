import React, {useState} from 'react';

function SearchForm() {

    const [inputField , setInputField] = useState({
        id: "",
        first_name: '',
        last_name: '',
        date_of_birth: '',
        country: '',
        phone: '',
    })

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    const submitButton = (e) =>{
        console.log(e.target.value)
    }

    return (
        <div>
            <label>ID:</label>{" "}
            <input 
            type="text" 
            name="id" 
            onChange={inputsHandler} 
            placeholder="ID" 
            value={inputField.id}/>

            <br/>

            <label>First Name:</label>{" "}
            <input 
            type="text" 
            name="first_name" 
            onChange={inputsHandler} 
            placeholder="First Name" 
            value={inputField.first_name}/>

            <br/>

            <label>Last Name:</label>{" "}
            <input 
            type="text" 
            name="last_name" 
            onChange={inputsHandler} 
            placeholder="First Name" 
            value={inputField.last_name}/>

            <br/>

            <label>Date of Birth: </label>{" "}
            <input 
            type="date" 
            name="date_of_birth" 
            onChange={inputsHandler} 
            placeholder="Date of Birth" 
            value={inputField.date_of_birth}/>

            <br/>

            <label>Country:</label>{" "}
            <input 
            type="text" 
            name="country" 
            onChange={inputsHandler} 
            placeholder="Country" 
            value={inputField.country}/>

            <br/>

            <label>Phone:</label>{" "}
            <input 
            type="phone" 
            name="phone" 
            onChange={inputsHandler} 
            placeholder="Phone" 
            value={inputField.phone}/>

            <br/>
            <button onClick={submitButton}>Search</button>
        </div>
    )
}

export default SearchForm