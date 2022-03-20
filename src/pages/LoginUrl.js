import React, { useState, useEffect } from "react";
import atraparInicioSesion from '../functions/getLogin';
import firebaseApp from "../Firebase/firebase";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import { useUserContext } from '../context/userContext'


const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const LoginUrl = () => {
    // const {usuario, setUsuario} = useUserContext();
    // console.log(usuario.email)
    // const [arrayTareas, setArrayTareas] = useState(null);
  // const fakeData = [
  //   { id: 1, descripcion: "tarea falsa 1", url: "https://picsum.photos/420" },
  //   { id: 2, descripcion: "tarea falsa 2", url: "https://picsum.photos/420" },
  //   { id: 3, descripcion: "tarea falsa 3", url: "https://picsum.photos/420" },
  // ];

  // async function buscarDocumentOrCrearDocumento(idDocumento) {
  //   //crear referencia al documento
  //   const docuRef = doc(firestore, `usuarios/${idDocumento}`);
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
  //   async function fetchTareas() {
  //     const tareasFetchadas = await buscarDocumentOrCrearDocumento(
  //       usuario.email
  //     );
  //     setArrayTareas(tareasFetchadas);
  //   }

  //   fetchTareas();
  // }, []);



    useEffect(() => {
        atraparInicioSesion(window.location.href)
    },[])
  return <div>
      Cargando...
  </div>;
};

export default LoginUrl;
