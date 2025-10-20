import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { Navigate, useLocation } from 'react-router'; 

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
      return (
        <div className="flex justify-center items-center h-48">
          <button className="btn btn-ghost loading text-primary text-lg">
            Loading Auth...
          </button>
        </div>
      );
    }

    if (!user) {
      return <Navigate to="/login" state={location?.pathname} />;
    }

  return  children
}

export default PrivateRouter