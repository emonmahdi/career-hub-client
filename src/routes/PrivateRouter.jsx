import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { Navigate, useLocation } from 'react-router'; 

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
      return (
        <div className="text-center mt-10 text-gray-600 font-medium">
          Loading Auth......
        </div>
      );
    }

    if (!user) {
      return <Navigate to="/login" state={location?.pathname} />;
    }

  return  children
}

export default PrivateRouter