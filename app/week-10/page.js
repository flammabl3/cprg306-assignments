"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

import Layout  from "./layout";



export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const returnScreen = () => {
        if (!user) {
            return(
                <button onClick={() => {gitHubSignIn()}} className="bg-purple-800 w-20 rounded-md self-center p-2 m-2">Login</button>
            )
        }
        return(
            <div className="flex flex-col items-center">
                <p className="text-center font-bold text-2xl">
                    Welcome, {user.displayName} { user.email && user.email}
                </p>
                <div className="flex flex-row items-center">
                    <button onClick={() => {firebaseSignOut()}} className="bg-purple-800 w-20 rounded-md self-center p-2 m-2">Logout</button>
                    <a href="week-10/shopping-list"><button className="bg-purple-800 w-20 rounded-md self-center p-2 m-2">App</button></a>
                </div>
            </div>
        )
    }

    return (
        <Layout>
            <main className="flex flex-col items-center justify-center min-h-screen min-w-full">
                {returnScreen()}
            </main>
        </Layout>
    )
}