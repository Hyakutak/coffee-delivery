import { useState, useEffect } from "react";
import { Banner } from "./components/Banner";

export function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json', {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
          .then(res => setProducts(res.data))
    }, []);

    return (
        <main>
            <Banner />
        </main>
    );
}