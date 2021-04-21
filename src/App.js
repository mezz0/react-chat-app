import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload();
    }

    return (
        <div>
            <ChatEngine
                height='100vh'
                projectID='d24e2c72-07f1-4fea-80d6-39ba4ebedf3c'
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
            <button onClick={handleLogout} style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
                Log out
            </button>
        </div>
        
    )
}

export default App;