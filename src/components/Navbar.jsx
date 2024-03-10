import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-between bg-blue-200 w-full p-4'>
     <Link to='/'>
      <h1 className='text-center text-2xl font-bold'>
        Autentificação com Google Firebase
      </h1></Link>
      {user?.displayName ? (
        <button onClick={handleSignOut}>Sair</button>
      ) : (
        <Link to='/signin' className='text-white font-semibold bg-blue-600 hover:bg-blue-500 py-3 px-10'>Login</Link>
      )}
    </div>
  );
};

export default Navbar;
