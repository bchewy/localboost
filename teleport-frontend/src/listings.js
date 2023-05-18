// import { db } from "./firebase-config";

// import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc,}
// from "firebase/firestore";

// const ListingsCollectionRef = collection(db, "listings");
// class Listings{
//   addListings = (newListing) => {
//     return addDoc(ListingsCollectionRef, newListing);
//   }
//   getAllListings = () => {
//     return getDocs(ListingsCollectionRef);
//   }
//   getListings = (id) => {
//     const listingDoc = doc(db, "listings", id);
//     return getDoc(listingDoc);
//   }
// }

// export default new Listings();

import React, { useEffect, useRef, useState } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import "./App.css";

function App() {
  const productNameRef = useRef();
  const productSizeRef = useRef();
  const [products, setProducts] = useState();

  const productsCollectionRef = collection(db, "products");

  const createProduct = async () => {
    const name = productNameRef.current.value;
    const size = productSizeRef.current.value;

    await addDoc(productsCollectionRef, {
      productName: name,
      productSize: size,
    });
  };

  const updateProduct = async (id, size) => {
    const productDoc = doc(db, "products", id);

    await updateDoc(productDoc, {
      productSize: size + 1,
    });
  };

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
  };

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAllProducts();
  }, []);

  console.log(products);

  if (!products) {
    return <>Loading...</>;
  }

  return (
    <div className="App">
      Product Name
      <input type="text" ref={productNameRef} />
      <br />
      Product Size
      <input type="text" ref={productSizeRef} />
      <button onClick={createProduct}>Submit</button>
      <p>Products</p>
      {products.map((product) => (
        <div key={product.id}>
          Name : {product.productName}
          Size : {product.productSize}
          <button
            onClick={() => {
              updateProduct(product.id, product.productSize);
            }}
          >
            + 1
          </button>
          <button
            onClick={() => {
              deleteProduct(product.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
