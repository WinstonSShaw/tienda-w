import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';


//COMPONENTS
import ItemDetail from './ItemDetail';
import Spinner from '../../components/Spinner/Spinner';

// FIRBASE - FIRESTORE
import {
	collection,
	query,
	where,
	getDocs,
	documentId,
} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';



const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    let id = useParams();
    let userId = id.id;

    useEffect(() => {
        const getItemData = async () => {
            const q = query(collection(db, 'tienda'), where (documentId(), '==', userId));

            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id, comprar: 0});
            });
            setItem(docs);

        };

        getItemData();

        setTimeout(() => {
			setIsLoading(false);
		}, 1000);
    }, [userId]);

    return (
        <div >
            {isLoading ? ( <Spinner />) : 
            (item.map((data) => {
                return <ItemDetail data={data} key={data.id} />
            }))
            }
            
        </div>

    );
}

export default ItemDetailContainer;

