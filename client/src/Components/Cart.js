import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Redux/Actions";
import { connect } from "react-redux";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Container, Row, Col, Table } from "react-bootstrap";
import "../Styles/Cart.css";

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleIncrease = (id) => {
    increaseQuantity(id);
  };

  const handleDecrease = (id) => {
    decreaseQuantity(id);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <div className="mb-5">
        {cart.length > 0 ? (
          <>
            <h2 className="common-heading mt-5 mb-4">Your Cart</h2>
            <Row data-aos="fade-in">
              <Col lg={9} xs={12} sm={12} md={8} className="m-0 p-0">
                <Table className="table text-center">
                  <thead style={{ backgroundColor: "bisque" }}>
                    <tr style={{ backgroundColor: "bisque" }}>
                      <th className="cart-col">Product</th>
                      <th className="cart-col">Price</th>
                      <th className="cart-col">Quantity</th>
                      <th className="cart-col">Sub Total</th>
                      <th className="cart-col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img
                            className="cart-img"
                            src={item.image}
                            alt="product"
                          />
                        </td>
                        <td className="text-secondary">
                          {" "}
                          <p>
                            {" "}
                            {item.name} - ${item.price}{" "}
                          </p>
                        </td>
                        <td>
                          <div>
                            <button onClick={() => handleDecrease(item.id)}>
                              <IoMdArrowDropdown />
                            </button>
                            <p id="qty"> {item.quantity}</p>
                            <button onClick={() => handleIncrease(item.id)}>
                              <IoMdArrowDropup />
                            </button>
                          </div>
                        </td>
                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button onClick={() => handleRemove(item.id)}>
                            Remove
                          </button>{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
              <Col lg={3} xs={12} sm={12} md={4} className="">
                <div className="main">
                  <div className="cart-box">
                    <h6 className="text-uppercase pb-3">Cart Totals</h6>
                    <div className="tablee">
                      <Row className="pt-2">
                        <Col
                          className="bb"
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          xl={12}
                        >
                          <p>
                            Total Items : <span> {totalItems} </span>
                          </p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <p>
                            Sub Total : <span>$ {subtotal.toFixed(2)} </span>
                          </p>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <p>
                            Delivery Charges : <span>$5.00</span>
                          </p>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                          <p>
                            Total : <span>$ {(subtotal + 5).toFixed(2)}</span>
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <button className="mt-3 btncheck">Proceed to Checkout</button>
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <div data-aos="fade-in" className="text-center mt-5 pt-5">
            <h3>Your Cart is empty</h3>
            <Link to="/">Continue browsing here</Link>
          </div>
        )}
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
})(Cart);
