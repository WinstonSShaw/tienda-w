import React, {useState, useEffect} from "react";


import axios from 'axios';

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//COMPONENTS
import Item from "./Item";
import Spinner from "../Spinner/Spinner";


const ItemList = () => {
    //Estado
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {

        axios('https://fakestoreapi.com/products').then((res) => setProducts(res.data));

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

    }, []);

    

    return (
        <div className="divItemListContainer">

            
            {products.map((product) => {
                return(

                    <div key={product.id}>
                        {isLoading ? <Spinner /> : 
                        <Link to={`/detail/${product.id}`} className='Link'>
                            <Item data={product} key={product.id} />
                        </Link>}
                        
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;

