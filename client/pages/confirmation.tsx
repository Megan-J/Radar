import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Panel from "./components/Panel";
import { backend } from "./components/Constants";
import Link from "next/link";
import Footer from "./components/Footer";

// interface Product {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//   }
//key={product.id}
export default function Confirmation() {
  let [bans, setBans] = useState("");
  let [user, setUser] = useState("");
  let [cart, setCart] = useState("");
  let [items, setItems] = useState("");
  let [products, setProducts] = useState("");
  let [stores, setStores] = useState("");
  let [order, setOrder] = useState("");
  let [orderItems, setOrderItems] = useState("");
  let [addresses, setAddresses] = useState("");

  const router = useRouter();

  useEffect(() => {
    console.log(sessionStorage);
    let userJson = sessionStorage.getItem("user");
    let productsJson = sessionStorage.getItem("products");
    let cartJson = sessionStorage.getItem("cart");
    let storesJson = sessionStorage.getItem("stores");
    let orderJson = sessionStorage.getItem("order");
    let orderItemsJson = sessionStorage.getItem("orderItems");
    let addressesJson = sessionStorage.getItem("addresses");

    let user = userJson ? JSON.parse(userJson) : null;
    let products = productsJson ? JSON.parse(productsJson) : null;
    let cart = cartJson ? JSON.parse(cartJson) : null;
    let stores = storesJson ? JSON.parse(storesJson) : null;
    let order = orderJson ? JSON.parse(orderJson) : null;
    let orderItems = orderItemsJson ? JSON.parse(orderItemsJson) : null;
    let addresses = addressesJson ? JSON.parse(addressesJson) : null;

    setUser(user);
    console.log("user:");
    console.log(user);
    if (user && user.vchUsername !== null) {
      let initials = "";
      if (user.vchUsername != null) {
        initials = user.vchFirstName.charAt(0) + user.vchLastName.charAt(0);
        initials = initials.toUpperCase();
      }

      if (orderJson) setOrder(order);
      if (productsJson) setProducts(products);
      if (cartJson) setCart(cart);
      if (storesJson) setStores(stores);
      if (orderItemsJson) setOrderItems(orderItems);
      if (addressesJson) setAddresses(addresses);
    }
  }, []);

  let orderID, cost, tax, shippingCost, shippingAddrID, billingAddrID, date;
  try {
    orderID = order.aID;
    cost = order.fCostTotal;
    tax = order.fTaxTotal;
    shippingCost = order.fShippingTotal;
    shippingAddrID = order.nShippingAddressID;
    billingAddrID = order.nBillingAddressID;
    date = order.dtInsertDate;
  } catch (e) {
    orderID = "";
    cost = "";
    tax = "";
    shippingCost = "";
    shippingAddrID = "";
    billingAddrID = "";
    date = "";
  }
  let shippingAddr, billingAddr;

  return (
    <>
      <Panel title="Thank you">
        <div className="box">
          <br />
          <div className="center">Your order was placed successfully!</div>
          <br />

          <div className="flex items-center justify-center">
            <Link href="/" className="button-small">
              Return to Home
            </Link>
          </div>
          <br />
        </div>
      </Panel>
      <Footer></Footer>
    </>
  );
}
