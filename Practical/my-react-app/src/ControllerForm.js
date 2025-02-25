import { useState } from "react"

function ControllerForm(){
    const [formData, setFormData] = useState({ name: "" , email:""})


    const handleChange = function(event){
        const { name, value } = event.target;
        // console.log(value);
        setFormData({ ...formData, [name]: value});
    }

    const handleSubmit = function(event){
        event.preventDefault();
        alert(`Name : ${formData.name} Email : ${formData.email}`)
    }   

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type = "email" name = "email" value = {formData.email} onChange={handleChange} placeholder="Enter name"></input>

            <button type="submit">Submit</button>
        </form>
    )

    

}

export default ControllerForm;