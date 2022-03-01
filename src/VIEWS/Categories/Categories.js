import React, {useState, useEffect} from "react";

// REACT ROUTER DOM
import { useParams } from "react-router-dom";

// FIREBASE
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig";

// COMPONENTS
import Item from "../../components/ItemList/Item";

const Categories = () => {
    const [categoryData, setCategoryData] = useState([]);

    const category = useParams();

    const categoryClass = category.category;

    useEffect(() => {
        const getCategoryData = async () => {
            const q = query(collection(db, 'tienda'), where('category', '==', categoryClass) );

            const docs = [];
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id, comprar: 0});
            });

            setCategoryData(docs);
        };

        getCategoryData();



    }, [categoryClass]);

    return (
        <div>
            {categoryData.map((data) => {
                return (
                    <div>
                        <Item data={data} key={data.id} />
                    </div>
                );
            })}
        </div>
    );
};

export default Categories;