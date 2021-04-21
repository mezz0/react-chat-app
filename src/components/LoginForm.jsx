import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [ userName, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()

        const authObject = {
            'Project-ID': 'd24e2c72-07f1-4fea-80d6-39ba4ebedf3c',
            'User-Name': userName,
            'User-Secret': password,
        }

        try {
            await axios.get('https://api.chatengine.io/chats', {
                headers: authObject
            });

            localStorage.setItem('username', userName)
            localStorage.setItem('password', password)

            window.location.reload();
        } catch (error) {
            setError('Incorrect Creds')
        }
    }
    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className='input'
                        placeholder='user name'
                        required
                    />
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='input'
                        placeholder='password'
                        required
                    />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>
                                Log in 
                            </span>
                        </button>
                        <h2 className='error'>{error}</h2>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;