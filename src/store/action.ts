import { Actions, Screens } from '../types/store'; // Importa ek tipado que hay en el store
import { getSongs } from '../utils/firebase';
// import { getProducts } from '../utils/firebase';

export const navigate = (screen: Screens) => { // Acción de navegar entre screens y lo exporta
	return {
		action: Actions.NAVIGATE, 
		payload: screen,
	};
};

export const getProductsAction = async () => {
	const products = await getSongs(); //Firestore. La información que viene desde el Firestore
	return {
		action: Actions.GETPRODUCTS,
		payload: products,
	};
};

