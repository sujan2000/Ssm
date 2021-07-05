import React, {useState, useEffect} from 'react';
import fire from './fire';
import LoginPage from './components/LoginPage';
import './App.css';
import NavBar from './components/NavBar';
import axios from 'axios';




const App = () => {
  const [articles,setArticles] = useState('');
  const [user, setUser] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [userNameError, setUserNameError] = useState('');

  const clearInput = () =>{
    setUserName('');
    setEmail('');
    setPassword('');
  }
  const clearError =() => {
    setUserNameError('');
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () =>{
    clearInput();
    fire 
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err=>{
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-diabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
          default:
            break;
      }
    });
  };

  const handleSignup =()=> {
    clearError();
    fire 
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err => {
      switch (err.code) {
        case "auth/username-already-in-use":
           setUserNameError(err.message);
           break;
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
         default:
           break; 
      }
    });
  };

  const handleLogout =() =>{
    fire.auth().signOut();
    setUser('');
  };

  const authListner =()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        clearInput();
        setUser(user);
      }else{
       setUser('');
      }
    });
  };


  useEffect(()=>{
    authListner();
  }, []);

    
  useEffect(()=>{
        const fetchItems = () =>{
        const result = axios.get(`https://conduit.productionready.io/api/articles`)
        console.log(result.data)
        setArticles(result.data)
      }
      fetchItems()
  },[])

   return (
    <div className="App">
    
      {user ? (
     <NavBar 
     handleLogout={handleLogout}
     articles={articles}
     setArticles={setArticles}
     username={username}
     />
      ):(
        <LoginPage
        username={username} 
        setUserName={setUserName}
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        userNameError = {userNameError}
        emailError={emailError}
        passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;
