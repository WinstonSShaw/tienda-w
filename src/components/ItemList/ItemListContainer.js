import React from "react";

import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    return (
        <div>
            <h2 className="ItemListContainer"> {props.greeting}</h2>;
            <ItemList />;
        </div>
    
    
    );
            
};

export default ItemListContainer;