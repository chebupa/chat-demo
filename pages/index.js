import { Context } from "../context"

import React, { useContext } from "react"
import axios from "axios"
import { useRouter } from "next/router"


export default function Auth() {
	const router = useRouter()
	const { username, setUsername, secret, setSecret } = useContext(Context)


	function onSubmit(e) {
		e.preventDefault()
		
		if (username.length === 1 || secret.length === 1) return
		
		axios
			.put(
				"https://api.chatengine.io/users/",
				{ username, secret },
				{ headers: { "Private-Key": "341384ca-6db0-4767-bf5f-1fc80b9f1bd4" } }
			)
			.then( r => {
				router.push("/chats")
			})
	}


	return (
    	<div className="background">
    		<div className="auth-container">
        		<form className="auth-form" onSubmit={ e => onSubmit(e) }>

          		<div className="auth-title">
					NextJS Chat
				</div>

          		<div className="input-container">
            		<input
              			placeholder="Email"
              			className="text-input"
              			onChange={ e => setUsername(e.target.value) }
            		/>
          		</div>

        		<div className="input-container">
            		<input
              			type="password"
              			placeholder="Password"
              			className="text-input"
              			onChange={ e => setSecret(e.target.value) }
            		/>
	        	</div>

        		<button type="submit" className="submit-button">
            		Login / Sign Up
          		</button>
        	</form>
      	</div>
    </div>
  )
}
