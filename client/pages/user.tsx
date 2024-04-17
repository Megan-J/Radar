import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Panel from './components/Panel';
import { backend } from './components/Constants';

export default function index() {
    const router = useRouter();
    let [user, setUser] = useState(null);
    let [store, setStore] = useState(null);
    let [tracks, setTracks] = useState(null);
    let [music, setMusic] = useState(null);
    let [orders, setOrders] = useState(null);
    let [products, setProducts] = useState(null);
    let [following, setFollowing] = useState(null);
    let [followers, setFollowers] = useState(null);
    let [orderItem1, setOrderItem1] = useState(true);
    let [orderItem2, setOrderItem2] = useState(true);
    let [orderItem3, setOrderItem3] = useState(true);

    let [creatingStore, setCreatingStore] = useState(null);
    let [editingStore, setEditingStore] = useState(null);
    let [addingProduct, setAddingProduct] = useState(null);

    let [theStoreName, setTheStoreName] = useState("");
    let [theStoreDescription, setTheStoreDescription] = useState("");
    let [createStoreName, setCreateStoreName] = useState("");
    let [createStoreDescription, setCreateStoreDescription] = useState("");
    let [editStoreName, setEditStoreName] = useState("");
    let [editStoreDescription, setEditStoreDescription] = useState("");
    let [isEditingStoreName, setIsEditingStoreName] = useState(false);
    let [isEditingStoreDescription, setIsEditingStoreDescription] = useState(false);

    let [newProductName, setNewProductName] = useState("");
    let [newProductDescription, setNewProductDescription] = useState("");
    let [newProductPrice, setNewProductPrice] = useState("");
    let [newProductShipping, setNewProductShipping] = useState("");
    let [newProductInventory, setNewProductInventory] = useState("");
    let [editProductName, setEditProductName] = useState("");
    let [editProductDescription, setEditProductDescription] = useState("");
    let [editProductPrice, setEditProductPrice] = useState("");
    let [editProductShipping, setEditProductShipping] = useState("");
    let [editProductInventory, setEditProductInventory] = useState("");
    let [isEditingProductName, setIsEditingProductName] = useState(false);
    let [isEditingProductDescription, setIsEditingProductDescription] = useState(false);
    let [isEditingProductPrice, setIsEditingProductPrice] = useState(false);
    let [isEditingProductShipping, setIsEditingProductShipping] = useState(false);
    let [isEditingProductInventory, setIsEditingProductInventory] = useState(false);
    let [isEditingProductID, setIsEditingProductID] = useState(false);

    const handleChangeCreateStoreName = (event) => {
        setCreateStoreName(event.target.value);
    };

    const handleChangeCreateStoreDescription = (event) => {
        setCreateStoreDescription(event.target.value);
    };

    const handleChangeEditStoreName = (event) => {
        setEditStoreName(event.target.value);
        //editStoreName = event.target.value;
    };

    const handleChangeEditStoreDescription = (event) => {
        setEditStoreDescription(event.target.value);
        //editStoreDescription = event.target.value;
    };

    const handleStorePress = () => {
        setCreatingStore(true);
    }

    const handleAddProduct = () => {
        setAddingProduct(true);
    }

    const cancelAddProduct = () => {
        setAddingProduct(false);
    }

    const createStore = (e) => {
        e.preventDefault();
        let success = false;
        fetch(`${backend}/create-store`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nUserID: user.aID,
                vchName: createStoreName, 
                txtDescription: createStoreDescription
            }),
        })
        .then(res => {
            console.log(res);
            if (res.status === 200 || res.status === 201) {
                success = true;
            }
            return res.json();
        })
        .then(data => {
            console.log("returned:");
            console.log(data);
            if (success) {
                sessionStorage.setItem("store", JSON.stringify(data));
                setCreatingStore(false);
                setEditStoreName(data.vchName);
                setEditStoreDescription(data.txtDescription);
                setStore(data);
            }
            return data;
        });
    }

    const updateStore = (e) => {
        e.preventDefault();
        let success = false;
        console.log(e);
        console.log("sending:");
        let result = {
            aID: store.aID,
            nUserID: user.aID,
            vchName: e.target.vchName.value,
            txtDescription: e.target.txtDescription.value,
        };
        fetch(`${backend}/update-store`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result),
        })
        .then(res => {
            console.log(res);
            if (res.status === 200 || res.status === 201) {
                success = true;
            }
            return res.json();
        })
        .then(data => {
            console.log("returned:");
            console.log(data);
            if (success) {
                sessionStorage.setItem("store", JSON.stringify(data));
                setStore(data);
                setEditStoreName(data.vchName);
                setEditStoreDescription(data.txtDescription);
                console.log("store updated");
                console.log(data);
                setEditingStore(false);
            }
            return data;
        });
    }

    const handleSubmitProduct = (e) => {
        e.preventDefault();
        let success = false;
        let data = {
            'nUserID': user.aID,
            'nStoreID': store.aID,
            'vchName': newProductName,
            'txtDescription': newProductDescription,
            'fPrice': newProductPrice,
            'fShipping': newProductShipping,
            'nInventory': newProductInventory,
            'vchPrice': newProductPrice,
            'vchImagePath': '',
        };
        fetch(`${backend}/add-product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => {
            console.log(res);
            if (res.status === 200 || res.status === 201) {
                success = true;
                // clear the form
                setNewProductName("");
                setNewProductDescription("");
                setNewProductPrice("");
                setNewProductShipping("");
                setNewProductInventory("");
            }
            return res.json();
        })
        .then(data => { 
            console.log("returned:");
            console.log(data);
            if (success) {
                setProducts(data.products);
                console.log("products updated");
                console.log(data);
                setAddingProduct(false);
            }
            return data;
            })
    }

    const cancelCreateStore = () => {
        setCreatingStore(false);
    }

    const editStoreClicked = () => {
        setEditingStore(true);
    }

    const cancelEditStore = () =>{
        setEditingStore(false);
    }

    const deleteTrack = () => {
        console.log("delete track " + 1);
    }

    const unfollow = () => {
        console.log("unfollow " + 1);
    }

    const deleteProduct = (event, aID) => {
        console.log("delete product " + 1);
        event.preventDefault();
        let success = false;
        let data = {
            'aID': aID,
            'nUserID': user.aID,
            'nStoreID': store.aID,
        };
        console.log("sending to delete:");
        console.log(data);
        fetch(`${backend}/delete-product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => {
            console.log(res);
            if (res.status === 200 || res.status === 201) {
                success = true;
            }
            return res.json();
        })
        .then(data => {
            console.log("returned:");
            console.log(data);
            if (success) {
                setProducts(data.products);
                console.log("products updated");
                console.log(data);
            }
            return data;
        });
    }

    const updateStoreEdit = (e, field) => {
        console.log("update store edit");
        console.log("target value: " + e.target.value);
        console.log("store name:" + theStoreName);
        let success = false;
        let result = {
            'aID': store.aID,
            'nUserID': user.aID,
            'vchName': editStoreName,
            'txtDescription': editStoreDescription,
        };
        result[field] = e.target.value;
        console.log('result')
        console.log(result);
        fetch(`${backend}/update-store`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result),
        })
        .then(res => {
            console.log(res);
            if (res.status === 200 || res.status === 201) {
                success = true;
            }
            return res.json();
        })
        .then(data => {
            console.log("returned:");
            console.log(data);
            if (success) {
                sessionStorage.setItem("store", JSON.stringify(data));
                setStore(data);
                setEditStoreName(data.vchName);
                setEditStoreDescription(data.txtDescription);
                console.log("store updated");
                console.log(data);
            }
            return data;
        });
    }

    const updateProductEdit = (e, id, field) => {
        console.log("update product edit: "+ id + ", " + field);
        console.log("target value: " + e.target.value);
        let success = false;
        console.log(products)
        let p = products[id];
        let result = {
            'aID': p.aID,
            'nStoreID': store.aID,
            'vchName': p.vchName,
            'txtDescription': p.txtDescription,
            'fPrice': p.fPrice,
            'fShipping': p.fShipping,
            'nInventory': p.nInventory,
            'vchImagePath': '',
        };
        result[field] = e.target.value;
        console.log('sending:')
        console.log(result);
        fetch(`${backend}/update-product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result),
        })
        .then(res => {
            console.log(res);
            if (res.status === 200 || res.status === 201) {
                success = true;
            }
            return res.json();
        })
        .then(data => {
            console.log("returned:");
            console.log(data);
            if (success) {
//                sessionStorage.setItem("products", JSON.stringify(data));
                setProducts(data);
                console.log("product updated");
                console.log(data);
            }
            return data;
        });
    }

    useEffect(() => {
        let userJson = sessionStorage.getItem("user");
        let storeJson = sessionStorage.getItem("store");
        let tracksJson = sessionStorage.getItem("tracks");
        let musicJson = sessionStorage.getItem("music");
        let productsJson = sessionStorage.getItem("products");
        let followingJson = sessionStorage.getItem("following");
        let followersJson = sessionStorage.getItem("followers");

        let user = userJson ? JSON.parse(userJson) : null;
        let store = storeJson ? JSON.parse(storeJson) : null;
        let tracks = tracksJson ? JSON.parse(tracksJson) : null;
        let music = musicJson ? JSON.parse(musicJson) : null;
        let products = productsJson ? JSON.parse(productsJson) : null;  
        let following = followingJson ? JSON.parse(followingJson) : null;
        let followers = followersJson ? JSON.parse(followersJson) : null;

        setUser(user);
        console.log("user:");
        console.log(user);
        if (user && user.vchUsername !== null) {
            let initials = '';
            if (user.vchUsername != null) {
                initials = user.vchFirstName.charAt(0) + user.vchLastName.charAt(0);
                initials = initials.toUpperCase();
            }
            if (storeJson) setStore(store);
            if (store) {
                editStoreName = theStoreName = store.vchName;
                editStoreDescription = theStoreDescription = store.txtDescription;
            }
            if (tracksJson) setTracks(tracks);
            if (musicJson) setMusic(music);
            if (productsJson) setProducts(products);
            if (followingJson) setFollowing(following);
            if (followersJson) setFollowers(followers);
        }
    }, []);

    let firstName, lastName, userID;
    try {
        userID = user.aID;
        firstName = user.vchFirstName;
        lastName = user.vchLastName;
    } catch (e) {
        userID = "";
        firstName ="";
        lastName = "";
    }
    let storeID, storeName, storeDescription, initStoreName, initStoreDescription;
    try {
        storeID = store.aID;
        editStoreName = theStoreName = storeName = initStoreName = store.vchName;
        editStoreDescription = theStoreDescription = storeDescription = initStoreDescription = store.txtDescription;
    } catch (e) {
        storeID = "";
        editStoreName = storeName = initStoreName = "";
        editStoreDescription = storeDescription = initStoreDescription = "";
    }

    let order_prod_id: number | null = null;
    let order_prod_name: string | null = null;

    return (
        <Panel title="My Radar">
            <p>Welcome{firstName && `, ${firstName} ${lastName}`}!</p>

            <div className="box container bluebg">
                <div className="heading">My Store</div>
                    {
                        store && storeName != null ?
                            <>
                                <div className="indent store-name" onDoubleClick={() => setIsEditingStoreName(true)}>
                                {
                                    isEditingStoreName ? 
                                        <input className="indent input"
                                                name="vchName"
                                                defaultValue={editStoreName}
                                                type="text"
                                                placeholder="Store Name"
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                        updateStoreEdit(e, 'vchName');
                                                        setIsEditingStoreName(false);
                                                    } else if (e.key === 'Escape') {
                                                        setIsEditingStoreName(false);
                                                    }
                                                }}
                                        />
                                    : <>{theStoreName}&nbsp;</>
                                }
                                </div>
                                <div className="indent store-description" onDoubleClick={() => setIsEditingStoreDescription(true)}>
                                {
                                    isEditingStoreDescription ? 
                                        <input className="indent input"
                                                name="vchDescription"
                                                defaultValue={editStoreDescription}
                                                type="text"
                                                placeholder="Store Description"
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                        updateStoreEdit(e, 'txtDescription');
                                                        setIsEditingStoreDescription(false);
                                                    } else if (e.key === 'Escape') {
                                                        setIsEditingStoreDescription(false);
                                                    }
                                                }}
                                        />
                                    : <>{theStoreDescription}&nbsp;</>
                                }
                                </div>
                            </>
                        : creatingStore ?
                               <>
                                    <div className="create-store">
                                        <form onSubmit={createStore}>
                                            <input type="hidden" name="nUserID" value={userID}/>
                                            <input type="hidden" name="aID" value={storeID}/>
                                            <input className="indent input" name="vchName" type="text" placeholder="Store Name" onChange={handleChangeCreateStoreName}/>
                                            <input className="indent input larger" name="txtDescription" type="text" placeholder="Store Description" onChange={handleChangeCreateStoreDescription}/>
                                            <input type="submit" className="button button-small" value="Create Store"/>
                                            <button className="cancel button-small indent-right" onClick={cancelCreateStore}>Cancel</button>
                                        </form>
                                    </div>
                                </>
                            :   <div className="center"><button className="indent button button-small" onClick={handleStorePress}>Create Your Store</button></div>
                    }
                    {
                        store && store.vchName != null ?
                            <>
                                
                                    <div className="box container no-shadow">
                                        <div className="heading subheading light-gray">My Products</div>
                                        {
                                            products && products.length > 0
                                            ? 
                                                <>
                                                    <div className="all-products flex">
                                                        {
                                                            
                                                            products.map((t, i) => {
                                                                return (<>
                                                                    <div className="product" key={i}>
                                                                        <div className="product-name" onDoubleClick={() => {
                                                                            setIsEditingProductID(i);
                                                                            setIsEditingProductName(true);
                                                                        }}>
                                                                        {
                                                                            isEditingProductName && isEditingProductID == i ? 
                                                                                <input className="indent input"
                                                                                        name="vchName"
                                                                                        defaultValue={t.vchName}
                                                                                        type="text"
                                                                                        placeholder="Product Name"
                                                                                        onKeyPress={(e) => {
                                                                                            if (e.key === 'Enter') {
                                                                                                updateProductEdit(e, i, 'vchName');
                                                                                                setIsEditingProductName(false);
                                                                                            } else if (e.key === 'Escape') {
                                                                                                setIsEditingProductName(false);
                                                                                            }
                                                                                        }}
                                                                                />
                                                                            : <>{t.vchName}&nbsp;</>
                                                                        }
                                                                        </div>
                                                                        <div className="product-description" onDoubleClick={() => {
                                                                            setIsEditingProductID(i);
                                                                            setIsEditingProductDescription(true);
                                                                        }}>
                                                                        {
                                                                            isEditingProductDescription && isEditingProductID == i  ? 
                                                                                <input className="indent input"
                                                                                        name="txtDescription"
                                                                                        defaultValue={t.txtDescription}
                                                                                        type="text"
                                                                                        placeholder="Product Description"
                                                                                        onKeyPress={(e) => {
                                                                                            if (e.key === 'Enter') {
                                                                                                updateProductEdit(e, i, 'txtDescription');
                                                                                                setIsEditingProductDescription(false);
                                                                                            } else if (e.key === 'Escape') {
                                                                                                setIsEditingProductDescription(false);
                                                                                            }
                                                                                        }}
                                                                                />
                                                                            : <>{t.txtDescription}&nbsp;</>
                                                                        }
                                                                        </div>
                                                                        <div className="product-price" onDoubleClick={() => {
                                                                            setIsEditingProductID(i);
                                                                            setIsEditingProductPrice(true);
                                                                        }}>Price: $ 
                                                                        {
                                                                            isEditingProductPrice && isEditingProductID == i ? 
                                                                                <input className="indent input short-input"
                                                                                        name="fPrice"
                                                                                        defaultValue={t.fPrice.toFixed(2)}
                                                                                        type="text"
                                                                                        placeholder="Price"
                                                                                        onKeyPress={(e) => {
                                                                                            if (e.key === 'Enter') {
                                                                                                updateProductEdit(e, i, 'fPrice');
                                                                                                setIsEditingProductPrice(false);
                                                                                            } else if (e.key === 'Escape') {
                                                                                                setIsEditingProductPrice(false);
                                                                                            }
                                                                                        }}
                                                                                />
                                                                            : <>{t.fPrice.toFixed(2)}&nbsp;</>
                                                                        }
                                                                        </div>
                                                                        <div className="product-shipping" onDoubleClick={() => {
                                                                            setIsEditingProductID(i);
                                                                            setIsEditingProductShipping(true);
                                                                        }}>Shipping: $ 
                                                                        {
                                                                            isEditingProductShipping && isEditingProductID == i ? 
                                                                                <input className="indent input short-input"
                                                                                        name="fShipping"
                                                                                        defaultValue={t.fShipping.toFixed(2)}
                                                                                        type="text"
                                                                                        placeholder="Shipping"
                                                                                        onKeyPress={(e) => {
                                                                                            if (e.key === 'Enter') {
                                                                                                updateProductEdit(e, i, 'fShipping');
                                                                                                setIsEditingProductShipping(false);
                                                                                                setIsEditingProductID(null);
                                                                                            } else if (e.key === 'Escape') {
                                                                                                setIsEditingProductShipping(false);
                                                                                                setIsEditingProductID(null);
                                                                                            }
                                                                                        }}
                                                                                />
                                                                            : <>{t.fShipping.toFixed(2)}&nbsp;</>
                                                                        }
                                                                        </div>
                                                                        <div className="product-inventory" onDoubleClick={() => {
                                                                                setIsEditingProductID(i);
                                                                                setIsEditingProductInventory(true);
                                                                        }}>Stock:  
                                                                        {
                                                                            isEditingProductInventory ? 
                                                                                <input className="indent input short-input"
                                                                                        name="nInventory"
                                                                                        defaultValue={t.nInventory}
                                                                                        type="text"
                                                                                        placeholder="Inventory"
                                                                                        onKeyPress={(e) => {
                                                                                            if (e.key === 'Enter') {
                                                                                                updateProductEdit(e, i, 'nInventory');
                                                                                                setIsEditingProductInventory(false);
                                                                                                setIsEditingProductID(null);
                                                                                            } else if (e.key === 'Escape') {
                                                                                                setIsEditingProductInventory(false);
                                                                                                setIsEditingProductID(null);
                                                                                            }
                                                                                        }}
                                                                                />
                                                                            : <>{t.nInventory.toFixed(0)}&nbsp;</>
                                                                        }
                                                                        </div>
                                                                        <button className="delete-product-button button button-small" onClick={(event) => deleteProduct(event, t.aID)} key={t.aID}>Delete</button>
                                                                    </div>
                                                                </>)
                                                            })
                                                        }
                                                    </div>
                                                </>
                                            : <>
                                                <div className="indent">No products yet.</div>
                                            </>

                                        }
                                        { addingProduct ? 
                                            <>
                                            <div className="div-center">
                                                <div className="product-box box container new-product-container no-shadow">
                                                    <div className="heading subheading gray">Add a Product</div>
                                                    <form onSubmit={handleSubmitProduct}>
                                                        <div className="new-product-pane">
                                                            <div>
                                                            <input
                                                                className="new-product-name input"
                                                                type="text"
                                                                name="newProductName"
                                                                value={newProductName}
                                                                onChange={(e) => setNewProductName(e.target.value)}
                                                                placeholder="Name"
                                                            />
                                                            <textarea
                                                                className="new-product-description input"
                                                                name="newProductDescription"
                                                                value={newProductDescription}
                                                                onChange={(e) => setNewProductDescription(e.target.value)}
                                                                placeholder="Description"
                                                            />
                                                            <input
                                                                type="number"
                                                                className="new-product-price input"
                                                                name="newProductPrice"
                                                                value={newProductPrice}
                                                                onChange={(e) => setNewProductPrice(e.target.value)}
                                                                placeholder="Price"
                                                            />
                                                            <input
                                                                type="number"
                                                                className="new-product-shipping input"
                                                                name="newProductShipping"
                                                                value={newProductShipping}
                                                                onChange={(e) => setNewProductShipping(e.target.value)}
                                                                placeholder="Shipping Cost"
                                                            />
                                                            <input
                                                                type="number"
                                                                className="new-product-inventory input"
                                                                name="newProductInventory"
                                                                value={newProductInventory}
                                                                onChange={(e) => setNewProductInventory(e.target.value)}
                                                                placeholder="Inventory Count"
                                                            />
                                                            </div>
                                                            <div className="product-submit-margin-top">
                                                                <button className="button button-small" type="submit">Submit</button>
                                                                <button className="button button-small cancel" onClick={cancelAddProduct}>Cancel</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            </>
                                            : <>
                                                <div className="center"><button className="indent bottom-margin top-indent button button-small" onClick={handleAddProduct}>Add Product</button></div>
                                            </>
                                        }
                                    </div>
                                

                                    <div className="box container no-shadow">
                                    <div className="heading subheading gray">My Orders</div>
                                    <div className="orders indent">
                                        {
                                            (orderItem1 || orderItem2 || orderItem3) &&
                                                <div className="order">
                                                    <div className="order-date header">Date</div>
                                                    <div className="order-product-name header">Product</div>
                                                    <div className="order-quantity header">Quantity</div>
                                                    <div className="order-total header">Total</div>
                                                </div>
                                        }    
                                        {
                                            !orderItem1 && !orderItem2 && !orderItem3 &&
                                                <div className="indent bottom-margin">No orders yet.</div>
                                        }    
                                        {
                                            orderItem1 &&
                                                <div className="order">
                                                    <div className="order-date ">4/12/24</div>
                                                    <div className="order-product-name ">Klaatu CD</div>
                                                    <div className="order-quantity ">3</div>
                                                    <div className="order-total ">$32.50</div>
                                                    <div className="cancel-order button" onClick={(e) => {
                                                        setOrderItem1(false);
                                                    }}>Cancel</div>
                                                </div>
                                        }
                                        {    
                                            orderItem2 &&
                                                <div className="order">
                                                    <div className="order-date ">4/14/24</div>
                                                    <div className="order-product-name ">Autographed photo of Tom Petty</div>
                                                    <div className="order-quantity ">1</div>
                                                    <div className="order-total ">$10.00</div>
                                                    <div className="cancel-order button" onClick={(e) => {
                                                        setOrderItem2(false);
                                                    }}>Cancel</div>
                                                </div>
                                        }
                                        {
                                            orderItem3 &&
                                                <div className="order">
                                                    <div className="order-date ">4/16/24</div>
                                                    <div className="order-product-name ">Tesla Model S</div>
                                                    <div className="order-quantity ">1</div>
                                                    <div className="order-total ">$122,000.00</div>
                                                    <div className="cancel-order button" onClick={(e) => {
                                                        setOrderItem3(false);
                                                    }}>Cancel</div>
                                                </div>
                                        }
                                        {/* {
                                            orders && orders.length > 0
                                            ? orders.map((t, i) => {
                                                console.log("order:");
                                                console.log(t);
                                                let order_prod_id = t.nItemID;
                                                let product = products.find(p => p.aID == order_prod_id);
                                                let order_prod_name = product ? product.vchName : "";
                                                console.log("order product name: " + order_prod_name);
                                                return (
                                                    <div className="order" key={i}>
                                                        <div className="order-date">{t.insertDate}</div>
                                                        <div className="order-product-name">{order_prod_name}</div>
                                                        <div className="order-quantity">{t.nItemCount}</div>
                                                        <div className="order-total">${t.fGrandTotal.toFixed(2)}</div>
                                                    </div>
                                                );
                                            }) }
                                            : */
                                            // <div className="indent bottom-margin">No orders yet.</div>
                                        }
                                    </div>
                                </div>

                            </>
                        : ""
                    }
            </div>

            <div className="box greenbg">
                <div className="heading green">Tracks</div>
                {
                    tracks && tracks.length > 0
                    ? tracks.map((t, i) => (
                        <div className="track" key={i}>
                            <div className="track-title">{t.vchTrackName}</div>
                            <div className="track-description">{t.txtDescription}</div>
                            <div className="track-url">{t.vchAudioUrl}</div>
                            <div className="track-artist">{t.vchArtist}</div>
                            <button className="button button-small" onClick={deleteTrack}>Delete</button>
                        </div>
                    ))
                    : <div className="indent bottom-margin">No tracks yet.</div>
                }
            </div>

            <div className="box">
                <div className="heading orange">My Music</div>
                {
                    music && music.length > 0
                    ? music.map((t, i) => (
                        <div className="track" key={i}>
                            <div className="track-title">{t.vchTrackName}</div>
                            <div className="track-description">{t.txtDescription}</div>
                            <div className="track-url">{t.vchAudioUrl}</div>
                            <button className="button button-small" onClick={deleteTrack}>Delete</button>
                        </div>
                    ))
                    : <>
                        <div className="indent">No uploaded music yet.</div>
                        <div className="center"><button className="indent bottom-margin top-indent button button-small">Upload a Track</button></div>
                      </>
                }
            </div>

            <div className="box">
                <div className="heading">Following</div>
                {
                    following && following.length > 0
                    ? following.map((t, i) => (
                        <div className="following" key={i}>
                            <div className="following-name">{`${t.vchFirstName} ${t.vchLastName} (${t.vchUsername})`}</div>
                            <button className="button button-small" onClick={unfollow}>Unfollow</button>
                        </div>
                    ))
                    : <>
                        <div className="indent bottom-margin">You are not following anyone.</div>
                      </>
                }
            </div>

            <div className="box">
                <div className="heading">Followers</div>
                {
                    followers && followers.length > 0
                    ? followers.map((t, i) => (
                        <div className="follower" key={i}>
                            <div className="follower-name">{t.vchTrackName}</div>
                            <div className="track-description">{t.txtDescription}</div>
                            <div className="track-url">{t.vchAudioUrl}</div>
                            <button className="button button-small" onClick={unfollow}>Unfollow</button>
                        </div>
                    ))
                    : <>
                        <div className="indent bottom-margin">Nobody is following you.</div>
                      </>
                }
            </div>
        </Panel>
    );
}