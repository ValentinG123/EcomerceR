import firebaseApp from '../Firebase/firebase';
import {
  getAuth,
  signInWithEmailLink,
  isSignInWithEmailLink,
} from 'firebase/auth';

const auth = getAuth(firebaseApp);

export default function atraparInicioSesion(url) {
  if (isSignInWithEmailLink(auth, url)) {
    const correoRegistro = window.localStorage.getItem('correo');

    signInWithEmailLink(auth, correoRegistro, url)
      .then((result) => {
        console.log('exito', result);
        window.location.href = '/';
      })
      .catch((err) => {
        console.log('error', err);
      });
  } else {
    console.log('no es un enlace de inicio de sesion');
  }
}
