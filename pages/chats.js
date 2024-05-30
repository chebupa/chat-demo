import React, { useState, useEffect, useContext } from "react"

import { Context } from "../context"

import dynamic from "next/dynamic"
import { useRouter } from "next/router"


const ChatEngine = dynamic( () => import("react-chat-engine").then( module => module.ChatEngine ) )
const MessageFormSocial = dynamic( () => import("react-chat-engine").then( module => module.MessageFormSocial ) )


export default function Home() {
	const router = useRouter()
	const [ showChat, setShowChat ] = useState(false)

	useEffect( () => {
		if (typeof document !== undefined) {
			setShowChat(true)

			if (!localStorage.getItem("username") && !localStorage.getItem("secret")) {
				router.push("/")
			}
		}
	}, [] )

	if (!showChat) return <></>
	
	return (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

			<ChatEngine
				height="100vh"
				projectID="3b00fba3-856e-49b5-a15a-2d50a5f1dda1"
				userName={ localStorage.getItem("username") }
				userSecret={ localStorage.getItem("secret") }
				renderNewMessageForm={ () => <MessageFormSocial /> }
        	/>
		</>
	)
}
