import React, {useState, useEffect} from "react";
import Item from "./Item";


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
                        {isLoading ? "Cargando" : <Item data={product} key={product.id} />}
                        {/* <Item data={product} key={product.id} />  */}
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;