import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Panel from "./components/Panel";
import { backend } from "./components/Constants";
import Link from "next/link";
import Footer from "./components/Footer";
import image1 from "../public/data/storeFrontProducts/15.png";
import image2 from "../public/data/storeFrontProducts/17.png";
import image3 from "../public/data/storeFrontProducts/18.png";

export default function Storefront() {
  //should hold the store id
  let urlString, url, storeID;

  let [products, setProducts] = useState("");
  let [bans, setBans] = useState(null);
  let [user, setUser] = useState(null);
  let [error, setError] = useState("");
  let [storeName, setStoreName] = useState("");
  let [storeDescription, setDescriptionName] = useState("");
  let [owner, setOwner] = useState("");
  let [ownerId, setOwnerId] = useState("");
  let [IdOfStore, setIdOfStore] = useState("");

  const images = [image1, image2, image3];

  useEffect(() => {
    urlString = window.location.href;
    url = new URL(urlString);
    storeID = url.searchParams.get("storeID");
    //console.log(storeID);

    getStoreAttributes();
    getStoreProducts();

    let userJson = sessionStorage.getItem("user");
    let user = userJson ? JSON.parse(userJson) : null;

    setUser(user);
    setIdOfStore(storeID);

    if (user && user.vchUsername !== null) {
      fetchBanRequests();
    }
  }, []);

  const getStoreAttributes = () => {
    let success = false;
    fetch(`${backend}/storefront/owner/${storeID}`, {
      method: "GET",
    })
      .then((res) => {
        if (res.status === 200) {
          success = true;
        } else {
          setError("No store found");
        }
        return res.json();
      })
      .then((data) => {
        if (success) {
          //console.log(data);
          setStoreName(data.name);
          setDescriptionName(data.description);
          setOwnerId(data.ownerID);
          setOwner(data.ownerName);
        }
      });
  };

  const getStoreProducts = () => {
    let success = false;
    fetch(`${backend}/products/${storeID}`, {
      method: "GET",
    })
      .then((res) => {
        if (res.status === 200) {
          success = true;
        } else {
          setError("Couldn't find products");
        }
        return res.json();
      })
      .then((data) => {
        if (success) {
          setProducts(data);
        }
      });
  };

  const AddProductToCart = (event, aID) => {
    event.preventDefault();
    let success = false;
    let data = {
      userId: user.aID,
      productId: aID,
      storeId: IdOfStore,
      nQuantity: 1,
      nActive: 1,
    };
    fetch(`${backend}/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 201) {
        success = true;
        alert("Item added to cart");
      }
      return res.json();
    });
  };

  // this doesn't work
  const fetchBanRequests = () => {
    // Fetch ban requests from the backend
    fetch(`${backend}/product/1`)
      .then((res) => res.json())
      .then((data) => {
        setBans(data);
        //console.log(data);
      })
      .catch((error) => console.error("Error fetching ban requests:", error));
  };

  return (
    <>
      <Panel title={storeName}>
        <div className="bold-text">
          <Link href="/user-profile" as={`/user-profile?userID=${ownerId}`}>
            {owner}
          </Link>
        </div>
        <div>
          <p>{storeDescription}</p>
        </div>
        <br />

        <div className="box">
          <div className="heading">Products</div>
          {products && products.length > 0 ? (
            <div className="all-products flex">
              {products.map((t, i) => (
                <div className="product" key={i}>
                  <img src={images[i].src} />
                  <div className="product-name">{t.vchName}</div>
                  <div className="product-description">{t.txtDescription}</div>
                  <div className="product-price">
                    ${`${t.fPrice.toFixed(2)}`}
                  </div>
                  <div className="product-inventory">
                    {t.nInventory === 0 ? "Out of stock" : ""}
                  </div>
                  <button
                    className="delete-product-button button button-small"
                    onClick={(event) => AddProductToCart(event, t.aID)}
                    key={t.aID}
                  >
                    Add to Cart
                  </button>
                  <Link classname="report-icon" href="/report">
                    <i class="bi bi-exclamation-circle"></i>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="indent bottom-margin">Products Coming Soon!</div>
            </>
          )}
        </div>
        <div>
          <Link className="report-icon" href="/report">
            <i class="bi bi-exclamation-circle"></i>
          </Link>
        </div>
        <br />
        <br />
        <br />
        <br />
      </Panel>
      <Footer></Footer>
    </>
  );
}
