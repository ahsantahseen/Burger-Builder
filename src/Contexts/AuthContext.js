import React,{useContext,useState,useEffect} from 'react'
import {auth} from "../firebase"

const AuthContext=React.createContext()
export const useAuth=()=>{
    return useContext(AuthContext)
}
export const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser]=useState();
    
    const [loading,setloading]=useState(true);
    
    const signUp=(email,password)=>{
        return(auth.createUserWithEmailAndPassword(email,password))
    }
    const Login=(email,password)=>{
        return(auth.signInWithEmailAndPassword(email,password))
    }
    const Logout=()=>{
        return(auth.signOut())
    }
    const passwordreset=(email)=>{
        return(auth.sendPasswordResetEmail(email));
    }
    const updateEmail=(email)=>{
       return (currentUser.updateEmail(email))
    }
    const updatePassword=(password)=>{
        
        return(currentUser.updatePassword(password))
    }
    useEffect(() => {
        const unsubscribe=auth.onAuthStateChanged( //What this unsub.. method will do it contains a method 
                                                    //which is being returned by the auth.onState methos 
                                                    //and it will unsubscribe that method after we umount this component
            user=>{ 
                 
                setCurrentUser(user)
                setloading(false)  
            }
            
        )
        return unsubscribe
        
    }, [])
    const value={
        signUp,
        Login,
        Logout,
        passwordreset,
        updateEmail,
        updatePassword,
        currentUser
        
    }
    return (
        <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}
