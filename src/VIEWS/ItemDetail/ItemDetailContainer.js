/*
import React from "react";



//COMPONENTS

const ItemDetailContainer = () => {
    return (
        <div>

        </div>

    );
}

export default ItemDetailContainer;
*/

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
        axios(`https://breakingbadapi.com/api/characters/${userId}`).then((res) => setItem(res.data));

        setTimeout(() => {
			setIsLoading(false);
		}, 1000);
    }, [userId]);

    return (
        <div >
            {isLoading ? ( <Spinner />) :
            (<div>
                {item.map((prod) => {
				return (
					<div key={prod.id}>
                            <ItemDetail data={prod} />
					</div>
				    );
			    })}
            </div>)}
            
        </div>

    )
}

export default ItemDetailContainer;