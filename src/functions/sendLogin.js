import firebaseApp from '../Firebase/firebase';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';

const auth = getAuth(firebaseApp);

function enviarEnlaceLogin(correo) {
  const actionCodeSettings = {
    url: 'http://localhost:3000/loginurl',
    handleCodeInApp: 'true',
  };
  sendSignInLinkToEmail(auth, correo, actionCodeSettings)
    .then((response) => {
      console.log('exito', response);
    })
    .catch((error) => {
      console.log('error', error);
    });
}

export default enviarEnlaceLogin;
