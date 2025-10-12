import  { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'

const UseAuth = () => {
    const authInfo = useContext(AuthContext);

    return  authInfo
}

export default UseAuth