/*
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

//LINK ROUTER DOM
//import { Link } from 'react-router-dom';

//COMPONENTS
import ItemDetail from './ItemDetail';
import Spinner from '../../components/Spinner/Spinner';



const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    console.log(item);

    let id = useParams();
    let userId = id.id;

    console.log(userId);

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${userId}`).then((res) => setItem(res.data));

        setTimeout(() => {
			setIsLoading(false);
		}, 1000);
    }, [userId]);

    return (
        <div >
            {isLoading ? ( <Spinner />) : 
            <div key={item.id}>
                            <ItemDetail data={item} />
			</div>
            }
            
        </div>

    )
}

export default ItemDetailContainer;

*/



import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';

//LINK ROUTER DOM
//import { Link } from 'react-router-dom';

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
    

    console.log(item);

    let id = useParams();
    let userId = id.id;

    console.log(userId);

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

