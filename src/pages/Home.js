import React, { useEffect, useState } from 'react'
import Montly from '../components/Cards/Montly'
import Main from '../components/Main/Main'
import SubMain from '../components/Main/SubMain'
import Instagram from '../components/Instagram/Instagram'
import Side from '../components/Side/Side'
import Products from '../components/Cards/Products'
import {useDispatch } from 'react-redux';

 import {useUserContext } from '../context/userContext'
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import firebaseApp from '../Firebase/firebase'

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Home = ({correoUsuario}) => {

    // const [arrayTareas, setArrayTareas] = useState(null);
    // const fakeData = [
    //   { id: 1, descripcion: "tarea falsa 1", url: "https://picsum.photos/420" },
    //   { id: 2, descripcion: "tarea falsa 2", url: "https://picsum.photos/420" },
    //   { id: 3, descripcion: "tarea falsa 3", url: "https://picsum.photos/420" },
    // ];

    // async function buscarDocumentOrCrearDocumento(idDocumento) {
    //   //crear referencia al documento
    //   const docuRef = doc(firestore, `favoritos/${idDocumento}`);
    //   // buscar documento
    //   const consulta = await getDoc(docuRef);
    //   // revisar si existe
    //   if (consulta.exists()) {
    //     // si sí existe
    //     const infoDocu = consulta.data();
    //     return infoDocu.tareas;
    //   } else {
    //     // si no existe
    //     await setDoc(docuRef, { tareas: [...fakeData] });
    //     const consulta = await getDoc(docuRef);
    //     const infoDocu = consulta.data();
    //     return infoDocu.tareas;
    //   }
    // }

    // useEffect(() => {
    //   if (correoUsuario === null) {
    //       async function fetchTareas() {
    //     const tareasFetchadas = await buscarDocumentOrCrearDocumento(
    //         correoUsuario.email
    //     );
    //     setArrayTareas(tareasFetchadas);
    //   }
    //   fetchTareas();
       
    // }else {
    //   console.log(alert,'hhola')
    // } 
    // }, []);

    
    return (
        <>
            <Main/>
            <SubMain/>
            <Montly/>
            <Side/>     
            <Products/>
            <Instagram/>
        </>
    )
}

export default Home
