import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import welcomeImg from "../../assets/media/welcome-banner.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import "./Dashboard.css";

const Dashboard = (props) => {
    const history = useHistory();
    useEffect(() => {}, []);

    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", description: "Product 1 description", price: "$9.99", imageUrl: "product1.jpg" },
        { id: 2, name: "Product 2", description: "Product 2 description", price: "$19.99", imageUrl: "product2.jpg" },
        { id: 3, name: "Product 3", description: "Product 3 description", price: "$29.99", imageUrl: "product3.jpg" },
        { id: 4, name: "Product 4", description: "Product 4 description", price: "$39.99", imageUrl: "product4.jpg" },
        { id: 5, name: "Product 5", description: "Product 5 description", price: "$49.99", imageUrl: "product5.jpg" },
        { id: 6, name: "Product 6", description: "Product 6 description", price: "$59.99", imageUrl: "product6.jpg" },
        { id: 7, name: "Product 7", description: "Product 7 description", price: "$69.99", imageUrl: "product7.jpg" },
        { id: 8, name: "Product 8", description: "Product 8 description", price: "$79.99", imageUrl: "product8.jpg" },
        { id: 9, name: "Product 9", description: "Product 9 description", price: "$89.99", imageUrl: "product9.jpg" },
        { id: 10, name: "Product 10", description: "Product 10 description", price: "$99.99", imageUrl: "product10.jpg" },
    ]);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (productId) => {
        const productToAdd = products.find(product => product.id === productId);
        if (productToAdd) {
            setCart(prevCart => [...prevCart, productToAdd]);
        }
    };

    const renderFeatureBoxes = () => (
        <div className="feature-boxes">
            <div className="p-col">
                <div className="feature-box">
                    <h3>Loyalty Program</h3>
                    <p>Join our loyalty program and earn rewards.</p>
                </div>
            </div>
            <div className="p-col">
                <div className="feature-box">
                    <h3>Free Shipping & Returns</h3>
                    <p>Enjoy free shipping and easy returns on all orders.</p>
                </div>
            </div>
        </div>
    );

    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderProductCard = (product) => (
        <div className="p-md-4" key={product.id}>
            <Card
                title={product.name}
                subTitle={product.price}
                style={{ width: "20rem", marginBottom: "2rem" }}
                className="product-card"
            >
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <p>{product.description}</p>
                <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
            </Card>
        </div>
    );

    return (
        <div className="col-12 flex flex-column align-items-center">
            <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop>
                <div>
                    <img src="carousel_image_1.jpg" alt="carousel_image_1" />
                </div>
                <div>
                    <img src="carousel_image_2.jpg" alt="carousel_image_2" />
                </div>
                <div>
                <img src="carousel_image_3.jpg" alt="carousel_image_3" />
            </div>
        </Carousel>
        {renderFeatureBoxes()}
        <div className="search-bar p-inputgroup">
                <InputText
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search products..."
                />
            </div>
            <br></br>
        <div className="product-list p-justify-center">
            {filteredProducts.map(renderProductCard)}
        </div>
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  );
};

const mapState = (state) => {
  //
  return {};
};

const mapDispatch = (dispatch) => ({
  //
});

export default connect(mapState, mapDispatch)(Dashboard);