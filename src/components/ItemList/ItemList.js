import React, {useState, useEffect} from "react";


import axios from 'axios';

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

//COMPONENTS
import Item from "./Item";
import Spinner from "../Spinner/Spinner";

/*
const ItemList = () => {
    //Estado
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
        fetch('https://fakestoreapi.com/products') 
        .then((response) => response.json()) 
        .then((json) => setProducts(json));

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

    }, []);

    

    return (
        <div>

            
            {products.map((product) => {
                return(
                    <div key={product.id}>
                        {isLoading ? <Spinner /> : <Item data={product} key={product.id} />}
                        
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;

*/


const ItemList = () => {
    //Estado
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {

        axios('https://breakingbadapi.com/api/characters').then((res) => setProducts(res.data));

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

    }, []);

    

    return (
        <div className="divItemListContainer">

            
            {products.map((product) => {
                return(
                    /*
                    <div key={product.id}>
                        {isLoading ? <Spinner /> : <Item data={product} key={product.id} />}
                    </div>
                    */

                    <div key={product.id}>
                        {isLoading ? <Spinner /> : 
                        <Link to={`/detail/${product.char_id}`} className='Link'>
                            <Item data={product} key={product.char_id} />
                        </Link>}
                        {/* 
                    <Link to={`/detail/${product.id}`} className='Link'>
                        <ItemDetail data={product} />
                    </Link>
                        */}
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;

