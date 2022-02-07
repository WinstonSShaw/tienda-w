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

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//COMPONENTS
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);

    console.log(item);

    let id = useParams();
    let userId = id.id;

    console.log(userId);

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${userId}`).then((res) => setItem(res.data));
    }, [userId]);

    return (
        <div >
            {item.map((it) => {
				return (
					<div key={it.id}>
                        <Link to={`/detail/${it.id}`} className='Link'>
                            <ItemDetail data={it} key={it.id} />
                        </Link>
					</div>
				);
			})}
        </div>

    )
}

export default ItemDetailContainer;