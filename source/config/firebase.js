// Importamos las funciones necesarias desde la biblioteca de firebase y Constants de expo.
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import Constants from "expo-constants";

// Configuración de firebase con los valores extra de Constants de Expo.
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  measurementId: Constants.manifest.extra.measurementId,
};

// Inicializamos Firebase con la configuración proporcionada.
initializeApp(firebaseConfig);

// Obtenemos una instancia de Firestore que utilizaremos para interactuar con la base de datos.
export const baseDatos = getFirestore();
