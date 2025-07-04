import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext"; // Importing the ThemeContext

function Contact() {

   const theme = useContext(ThemeContext);
console.log(theme); // Log the theme context to see its properties


    // const [uname,setUsername] = useState(() => {

    // }, []);   Singel data set
    const [error, setError] = useState({});


    const [formdata, setFormdata] = useState({
        "uname": '',  // Multiple data set
        "email": '',
        "password": '',
        "message": '',
        "country": '',
        "terms": false  // Checkbox data 

    });



    const handleSubmit = (event) => {
        event.preventDefault();
        setError({});  // Reset error state
        if (formdata.uname === '' || formdata.uname === null || formdata.uname.length < 3 || formdata.uname.length > 20 || !/^[a-zA-Z]+$/.test(formdata.uname) || formdata.uname.includes(' ')) {
            setError({ uname: 'Name can not be blank or null' });
        }
        if (formdata.email === '' || formdata.email === null) {
            setError((prevError) => ({ ...prevError, email: 'Email can not be blank or null' }));
        }
        if (formdata.password === '' || formdata.password === null || formdata.password.length < 3 || formdata.password.length > 10 || formdata.password.includes(' ')) {
            setError((prevError) => ({ ...prevError, password: 'Password can not be blank or null or range will be between 3 to 10' }));
        }
        
        if (formdata.message === '' || formdata.message === null) {
            setError((prevError) => ({ ...prevError, message: 'Message can not be blank or null' }));
        }
        if (formdata.country === '') {
            setError((prevError) => ({ ...prevError, country: 'Please select a country' }));
        }
        if (!formdata.terms) {
            setError((prevError) => ({ ...prevError, terms: 'You must agree to the terms and conditions' }));
        }
    }

    const handelchange = (event) => {
         setError({}); 
        setFormdata({
            ...formdata,   //set privious data
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        });
    }

    return (
        <>

<div style={theme}> {/* Apply theme styles here */}
            <p>Contact Us Page</p>

            <form onSubmit={handleSubmit} style={{ width: '400px', margin: 'auto' }}>

                <input type="text" placeholder="Name" name="uname" value={formdata.uname} onChange={handelchange} />
                <span style={{ color: 'red' }}>{error && error.uname}</span>

                <input type="email" placeholder="Email" name="email" value={formdata.email} onChange={handelchange} />
                <span style={{ color: 'red' }}>{error && error.email}</span>

                <input type="text" placeholder="PASSWORD" name="password" value={formdata.password} onChange={handelchange} />
                <span style={{ color: 'red' }}>{error && error.password}</span>

                <textarea placeholder="Message" name="message" cols={40} value={formdata.message} onChange={handelchange} ></textarea>
                <span style={{ color: 'red' }}>{error && error.message}</span>

                <select name="country" value={formdata.country} onChange={handelchange}>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>

                </select>
                <span style={{ color: 'red' }}>{error && error.country}</span>  

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                    <input
                        type="checkbox"
                        name="terms"
                        checked={formdata.terms}
                        onChange={handelchange}
                        style={{ width: '16px', height: '16px', marginRight: '8px' }}
                    />
                    <label htmlFor="terms">I agree to terms and conditions</label>
                </div>
                <span style={{ color: 'red' }}>{error && error.terms}</span>    


                <button type="submit">Submit</button>

            </form>
            <br /><br />
            <p>Data : {JSON.stringify(formdata)} </p>
</div>
        </>
    );
}

export default Contact;