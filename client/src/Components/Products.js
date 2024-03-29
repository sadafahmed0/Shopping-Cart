import React, { useEffect } from "react";
import "../Styles/Styles.css";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { items } from "../Products/products";
import AOS from "aos";
import "aos/dist/aos.css";
import { addToCart, fetchProductsSuccess } from "../Redux/Actions";
import "react-toastify/dist/ReactToastify.css";

const Products = ({ dispatch, products }) => {
  useEffect(() => {
    dispatch(fetchProductsSuccess(items));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Container fluid className="p-5" id="product-container">
        <Container>
          <Row>
            {" "}
            {products.map((product) => (
              <Col
                className="mb-4 product-col d-flex justify-content-center"
                key={product.id}
                data-aos="fade-up"
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
              >
                <div
                  className="card product-card "
                  style={{
                    width: "15rem",
                    height: "100%",
                  }}
                >
                  <img
                    src={product.image}
                    className="card-img-top product-img"
                    alt="product"
                  />
                  <div className="card-body">
                    <p className="card-text product-name">
                      {product.name}{" "}
                      <span id="addtocart">
                        <svg
                          onClick={() => handleAddToCart(product)}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 297.78668 398.66666"
                          className="svg2"
                          id="cart-icon"
                          version="1.1"
                        >
                          <metadata id="metadata8">
                            <rdf>
                              <work rdfabout="">
                                <format>image/svg+xml</format>
                                <type rdfresource="http://purl.org/dc/dcmitype/StillImage"></type>
                              </work>
                            </rdf>
                          </metadata>
                          <g
                            transform="matrix(1.3333333,0,0,-1.3333333,0,398.66667)"
                            id="g10"
                          >
                            <g transform="scale(0.1)" id="g12">
                              <path
                                id="path14"
                                style={{
                                  fillOpacity: 1,
                                  fillRule: "nonzero",
                                  stroke: "none",
                                }}
                                d="M 2233.36,2432.71 H 0 V 0 h 2233.36 v 2432.71 z m -220,-220 V 220 H 220.004 V 2212.71 H 2021.36"
                              ></path>
                              <path
                                xmlns="http://www.w3.org/2000/svg"
                                id="path16"
                                style={{
                                  fillOpacity: 1,
                                  fillRule: "nonzero",
                                  stroke: "none",
                                }}
                                d="m 1116.68,2990 v 0 C 755.461,2990 462.637,2697.18 462.637,2335.96 V 2216.92 H 1770.71 v 119.04 c 0,361.22 -292.82,654.04 -654.03,654.04 z m 0,-220 c 204.58,0 376.55,-142.29 422.19,-333.08 H 694.492 C 740.117,2627.71 912.102,2770 1116.68,2770"
                              ></path>
                              <path
                                xmlns="http://www.w3.org/2000/svg"
                                id="path18"
                                style={{
                                  fillOpacity: 1,
                                  fillRule: "nonzero",
                                  stroke: "none",
                                }}
                                d="M 1554.82,1888.17 H 678.543 v 169.54 h 876.277 v -169.54"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 400 400"
                          height="400"
                          width="400"
                          className="svg2"
                          version="1.1"
                        >
                          <metadata id="metadata8">
                            <rdf>
                              <work rdfabout="">
                                <format>image/svg+xml</format>
                                <type rdfresource="http://purl.org/dc/dcmitype/StillImage"></type>
                              </work>
                            </rdf>
                          </metadata>
                          <g
                            transform="matrix(1.3333333,0,0,-1.3333333,0,400)"
                            id="g10"
                          >
                            <g transform="scale(0.1)" id="g12">
                              <path
                                id="path14"
                                style={{
                                  fillOpacity: 1,
                                  fillRule: "nonzero",
                                  stroke: "none",
                                }}
                                d="m 1312.7,795.5 c -472.7,0 -857.204,384.3 -857.204,856.7 0,472.7 384.504,857.2 857.204,857.2 472.7,0 857.3,-384.5 857.3,-857.2 0,-472.4 -384.6,-856.7 -857.3,-856.7 z M 2783.9,352.699 2172.7,963.898 c 155.8,194.702 241.5,438.602 241.5,688.302 0,607.3 -494.1,1101.4 -1101.5,1101.4 -607.302,0 -1101.399,-494.1 -1101.399,-1101.4 0,-607.4 494.097,-1101.501 1101.399,-1101.501 249.8,0 493.5,85.5 687.7,241 L 2611.7,181 c 23,-23 53.6,-35.699 86.1,-35.699 32.4,0 63,12.699 86,35.699 23.1,22.801 35.8,53.301 35.8,85.898 0,32.602 -12.7,63 -35.7,85.801"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </p>

                    <span className="card-text product-price">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.items,
});

export default connect(mapStateToProps)(Products);
