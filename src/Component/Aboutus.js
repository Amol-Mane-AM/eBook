import { useState } from "react";
import { useForm } from "react-hook-form";

function Aboutus() {

    // const [uname,setUsername] = useState(() => {

    // }, []);   Singel data set
    const [error, setError] = useState({});

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(`Form submitted with data:`, data);

    }


    return (
        <>

            <p>Contact Us Page</p>

            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '400px', margin: 'auto' }}>

                <label style={{ color: 'black' }}><b>Name</b> &nbsp;&nbsp;
                    <input type="text" placeholder="Name" {...register('uname', {
                        minLength: {
                            value: 3,
                            message: 'Minimum length should be 3',
                        },
                        maxLength: {
                            value: 10,
                            message: 'Maximum length should be 10',
                        },
                        required: 'Password cannot be blank or null',
                    }
                    )} style={{ width: '300px' }} />
                    <span style={{ color: 'red' }}>{errors.uname && errors.uname.message}</span>
                </label>

                <label style={{ color: 'black' }}><b>Email</b> &nbsp;&nbsp;
                    <input type="email" placeholder="Email" {...register('email', {
                        required: 'Email cannot be blank or null',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email format',
                        }
                    })} style={{ width: '300px' }} />

                    <span style={{ color: 'red' }}>{errors.email && errors.email.message}</span>
                </label>

                <label style={{ color: 'black' }}><b>Pass</b> &nbsp;&nbsp;
                    <input type="text" placeholder="PASSWORD" {...register('password', {
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{6,12}$/,
                            message:
                                'Password must contain uppercase, lowercase, number, special char',
                        },
                        required: 'Password cannot be blank or null',
                    })} style={{ width: '300px' }} />


                    <span style={{ color: 'red' }}>{errors.password && errors.password.message}</span>
                </label>

                <label style={{ color: 'black' }}><b>Age</b> &nbsp;&nbsp;
                    <input type="text" placeholder="Age" {...register('age', {
                        min: {
                            value: 18,
                            message: 'Minimum should be 18',
                        },
                        max: {
                            value: 60,
                            message: 'Maximum should be 60',
                        },
                        required: 'Age cannot be blank or null',
                    })} style={{ width: '300px' }} />

                    <span style={{ color: 'red' }}>{errors.age && errors.age.message}</span>
                </label>

                <label style={{ color: 'black' }}><b>Message</b></label>
                <textarea placeholder="Message" cols={40} {...register('message')} ></textarea>

                <select name="country" {...register('country')} style={{ width: '100%', padding: '8px', marginTop: '10px' }}>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>

                </select>

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                    <input
                        type="checkbox"
                        {...register('terms')}
                        style={{ width: '16px', height: '16px', marginRight: '8px' }}
                    />
                    <label htmlFor="terms">I agree to terms and conditions</label>
                </div>


                <button type="submit">Submit</button>

            </form>
            <br /><br />
            {/* <p>Data : {JSON.stringify(formdata)} </p> */}

        </>
    );
}

export default Aboutus;