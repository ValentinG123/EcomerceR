import firebaseApp from '../Firebase/firebase';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(firebaseApp);

export default function Logout(){
    signOut(auth)
} 