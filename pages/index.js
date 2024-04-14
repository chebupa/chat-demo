import { Context } from "../context"

import axios from "axios"
import React, { useContext, useState } from "react"
import { useRouter } from "next/router"


export default function Auth() {
	
	const router = useRouter()

	const [ username, setUsername ] = useState()
	const [ secret, setSecret ] = useState()
	
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

				localStorage.setItem("username", username)
				localStorage.setItem("secret", secret)
			})
	}


	return (
		<form className="auth-form" onSubmit={ e => onSubmit(e) }>
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
			
          	<div className="auth-title">
				RKSI Chat
			</div>

			<div className="form-cont">
				<input
					type="username"
					placeholder="Имя пользователя"
					className="text-input"
					onChange={ e => setUsername(e.target.value) }
				/>

				<input
					type="password"
					placeholder="Пароль"
					className="text-input"
					onChange={ e => setSecret(e.target.value) }
				/>

				<button type="submit" className="submit-button">
					Войти
				</button>
			</div>
    	</form>
	)
}
