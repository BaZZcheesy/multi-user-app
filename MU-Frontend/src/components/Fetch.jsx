import axios from "axios";
import React, { useState, useEffect } from "react";
import MainNav from './MainNavigation'

const baseURL = "http://localhost:8080"

const Public = () => {
    const [items, setItems] = useState(null);
    
    useEffect(() => {
        axios.get(baseURL + "/public/items")
            .then((response) => {
                setItems(response.data);
            });
    }, []);

    if (!items) {
        return <p>no data fetched</p>;
    }


    const liste = items.map(item => <dl>
        <dt>{item.key}</dt>
        <dd>{item.value}</dd>
    </dl>);


    return (
        <>
        <MainNav />
            <div>
                <h1>Public Area Data</h1>
                <div>
                    {liste}
                </div>
            </div>
        </>

    )
};

export default Public;