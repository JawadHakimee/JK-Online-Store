import React from 'react';
import styled from './login.module.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';



const Login = ()=> {
    const [isLogin, setIsLogin] = React.useState(true);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    return (
        <div>
            <Navbar />
            <form>
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                {!isLogin && (
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                )}
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button className={styled.btn} type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                <button className={styled.btn} onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                </button>
            </form>
            <Footer />
        </div>
    );
}

export default Login;