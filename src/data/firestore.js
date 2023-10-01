import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// ...

const uploadImageToFirebase = async (selectedImage, imageName) => {
    try {
        const storage = getStorage();
        const storageRef = ref(storage, 'PostImages/' + imageName);

        // Convertit l'image en blob
        const response = await fetch(URL.createObjectURL(selectedImage));
        const blob = await response.blob();

        // Convertit le blob en ArrayBuffer avec le bon type de contenu
        const arrayBuffer = await new Response(blob, { type: blob.type }).arrayBuffer();

        // Télécharge le blob vers Firebase Storage
        await uploadBytes(storageRef, arrayBuffer);

        // Récupère l'URL de téléchargement de l'image
        const imageUrl = await getDownloadURL(storageRef);

        return imageUrl;
    } catch (error) {
        console.error('Erreur lors du téléchargement de l\'image:', error);
        throw error;
    }
};

export { uploadImageToFirebase };


const convertImageToArrayBuffer = async (localUri) => {
    try {
        const response = await fetch(localUri);
        const blob = await response.blob();

        // Convertit le blob en ArrayBuffer
        const arrayBuffer = await new Response(blob).arrayBuffer();
        // Vous pouvez maintenant utiliser arrayBuffer comme nécessaire
        return arrayBuffer;
    } catch (error) {
        throw new Error(`Erreur lors de la conversion de l'image en ArrayBuffer : ${error.message}`);
    }
};

export { convertImageToArrayBuffer };




const firebaseConfig = {
    apiKey: "AIzaSyBrghzEzaaI_HgZbnRzKUlaHGNKizVF2aU",
    authDomain: "myflajooapp-15652.firebaseapp.com",
    projectId: "myflajooapp-15652",
    storageBucket: "myflajooapp-15652.appspot.com",
    messagingSenderId: "210714148369",
    appId: "1:210714148369:web:c2ab1fb38a1bbe53de7bb0",
    measurementId: "G-ZLPG5SHLYZ"
};

// Initialisez l'application Firebase
const app = initializeApp(firebaseConfig);

// Obtenez des références vers les services dont vous avez besoin
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
