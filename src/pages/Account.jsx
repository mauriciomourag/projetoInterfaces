import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from '../firebase';
import { useState } from "react";

const Account = () => {
  const { logOut, user } = UserAuth();
  const [imgURL, setImgURL] = useState("");
  const [progressPorcent, setPorgessPorcent] = useState(0);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }       
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    if (!file) return;


    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPorgessPorcent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
        });
      }
    );
  };

  return (
    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-2xl font-bold pt-12'>Minha Conta</h1>
      <div className='m-5 p-2'>
        <p className='font-semibold'>Seja Bem-Vindo, {user?.displayName}</p>
      </div>
      <header className="Images-header">
        <form onSubmit={handleSubmit}>
          <input type="file" />
          <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>Enviar</button>
        </form>
        {!imgURL && <p className='text-blue-500 text-center text-2xl'>{progressPorcent}%</p>}
        {imgURL && <img src={imgURL} alt="Imagem" height={200} />}
      </header>
      <button onClick={handleSignOut} className='border py-2 px-5 mt-10 bg-red-500 hover:bg-red-400 text-white '>
        Logout
      </button>
    </div>
  );
};

export default Account;
