import React, { useState, useEffect, useContext } from "react"

import { Context } from "../context"

import dynamic from "next/dynamic"
import { useRouter } from "next/router"


const ChatEngine = dynamic( () => import("react-chat-engine")
	.then( module => module.ChatEngine ) )

const MessageFormSocial = dynamic( () => import("react-chat-engine")
	.then( module => module.MessageFormSocial ) )


export default function Home() {
	const router = useRouter()

	const { username, secret } = useContext(Context)
	const [ showChat, setShowChat ] = useState(false)
	

	useEffect( () => {
		if (typeof document !== undefined) {
			setShowChat(true)
		}
	}, [] )
	
	useEffect( () => {
		if (username === "" || secret === "") {
			router.push("/")
		}
	}, [ username, secret ] )
	

	if (!showChat) return <div />
	

	return (
        <ChatEngine
			height="100vh"
        	projectID="a5987e81-5871-45a8-bc92-77f001bdad43"
        	userName={ username }
        	userSecret={ secret }
        	renderNewMessageForm={ () => <MessageFormSocial /> }
        />
	)
}
