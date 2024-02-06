import React, { useState } from 'react'

const Header = () => {
    const [signedin, setSignedin] = useState(false)

    const handleSignin = () => {
        setSignedin(true)
    }

    const handleSignout = () => {
        setSignedin(false)
    }
  return (
         <div>
           { signedin ? ( 
        <div>
            <button type="button" onClick={handleSignout}>Sign Out</button>
            <p>Welcome back, let's plan your next meal!</p>
        </div>) :
        
        (<div>
            <button type="button"onClick={handleSignin}>Sign In</button>
            <p>Sign in</p>
        </div>)
           }
        </div>
  )
}

export default Header;