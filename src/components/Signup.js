import React, { useState } from 'react'



export default function Signup() {

    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
            confirmPassword: "",
            isChecked: false
        }
    )

    console.log(formData);

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function signUp(event) {
        event.preventDefault()
        formData.password === formData.confirmPassword
        ? console.log("Successfully signed up")
        : console.log("Passwords do not match");
        formData.isChecked && console.log("Thanks for signing up for our newsletter!");
    }

    return (
        <main className='signup__body'>
            <form onSubmit={signUp} className='signup__form'>
                <input
                    className='form__input'
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    className='form__input'
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    className="form__input"
                    type='password'
                    placeholder='Confirm password'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <div className='checkbox__container'>
                    <input
                        className='form__checkbox test'
                        type='checkbox'
                        id='isChecked'
                        name='isChecked'
                        checked={formData.isChecked}
                        onChange={handleChange}
                    />
                    <label className='test' htmlFor='isChecked'>I want to join the newsletter</label>
                </div>
                <button className='signup__button'>Sign up</button>
            </form>
        </main>
    )
}