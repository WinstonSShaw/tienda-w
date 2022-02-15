import React from "react";

import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    return (
        <div >
            <h2 className="ItemListContainer"> {greeting}</h2>
            <ItemList />
        </div>
    
    
    );
            
};

export default ItemListContainer;