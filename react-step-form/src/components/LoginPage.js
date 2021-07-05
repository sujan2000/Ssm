import React from "react";

const LoginPage = (props) => {

  const {
  username,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignup,
  hasAccount,
  setHasAccount,
  userNameError,
  emailError,
  passwordError,
  addData,
   }=props;

    return(
    <section className="login">
    <div className="loginContainer">
        <label>Username</label>
        <input
        type="text"
        required
        value={username}
        onChange={(e)=>setUserName(e.target.value)}
        />
        <p className="errorMsg">{userNameError}</p>
        <label>Email</label>
        <input 
        type="text" 
        autoFocus 
        required 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input 
        type="password"
        required
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div>
        <button onClick={addData}>Login</button>
        </div>
        <div className="btnContainer">
         {hasAccount ? (
             <>
             <button onClick={handleLogin}>Sign in</button>
             <p>Don't have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
             </>
         ):(
            <>
             <button onClick={handleSignup}>Sign up</button>
             <p>Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
             </>
         )}
        </div>
    </div>
    </section>
    )}

export default LoginPage;