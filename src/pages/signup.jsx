import React, { useReducer, useState } from 'react'
import { Button, Stack, TextField } from '@mui/material'

const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
};

const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'UPDATE_NAME':
            return {
              ...state,
                name: action.payload
            };
        case 'UPDATE_EMAIL':
            return {
              ...state,
                email: action.payload
            };
        case 'UPDATE_PASSWORD':
            return {
              ...state,
                password: action.payload
            };
        default:
            return state;
    }
}

const SignupPage = () => {

    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE)

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const updateNameHandler = (event) => {
        dispatch({
            type: 'UPDATE_NAME',
            payload: event.target.value
        })
    }

    const updateEmailHandler = (event) => {
        dispatch({
            type: 'UPDATE_EMAIL',
            payload: event.target.value
        })
    }

    const updatedPasswordHandler = (event) => {
        dispatch({
            type: 'UPDATE_PASSWORD',
            payload: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://651bf577194f77f2a5af24b0.mockapi.io/users', { 
                body: JSON.stringify(state),
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' } 
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }




 return(        
    <form onSubmit={handleSubmit}>
        <Stack alignItems='center' justifyContent='center' gap={2} sx={{ height: '100vh' }}>
        <h2>Signup</h2>
                <TextField value={state.name} onChange={updateNameHandler} name='name' placeholder='Name' label='Name' />
                <TextField value={state.email} onChange={updateEmailHandler} name='email' placeholder='Email' label='Email' type='email' />
                <TextField value={state.password} onChange={updatedPasswordHandler} name='password' placeholder='Password' label='Password' type='password' />
                <Button type='submit' variant='contained'>Signup</Button>
            <div> Already have an account ? <a href = '/login' > Login </a></div>
        </Stack>
    </form>
 )
} 


export default SignupPage