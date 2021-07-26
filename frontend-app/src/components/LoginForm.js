// Import Library
import { useState } from 'react';
import { useHistory } from 'react-router';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
// Import Styling
import './LoginForm.css';
// Import Image
import LoginImage from '../assets/login.jpg';

function LoginForm() {
    const apiBaseURI = process.env.REACT_APP_BASE_URI_DEV;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(true);
    
    let history = useHistory();

    const handleLogin = async () => {
        const payload = {
            username: username,
            password: password,
        }
        try{
            const res = await axios.post(`${apiBaseURI}/login`, payload);
            if(res.data.message === 'success'){
                setSuccess(true);
                history.push('/joblist')
            }
        }catch(err){
            console.error(err);
            setSuccess(false);
        }
        console.log('helo')
    }
    return (
        <div className="wrapper">
            <div className="content">
                <img src={LoginImage} alt="Login-Illustration"/>
                <form className="login-form">
                    <h1>Welcome!</h1>
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {!success? 
                        <p>please enter a correct username and password</p>
                        :
                        ''
                    }
                    <Button className="btn btn-lg submit-btn" onClick={handleLogin}>
                        Login
                    </Button>
                     
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
