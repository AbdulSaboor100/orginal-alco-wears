import React from "react";
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import "./dropdown.css";
import Img1 from "../../images/img1.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function DropDown() {
  return (
    <>
      <div>
        <div className="main-dropdown">
          <Row>
            <Col sm={12} md={12}>
              <div className="list-items">
                <div className="main-sub-parent">
                  <ul style={{ marginTop: "revert" }}>
                    {/* <li>Jiu Jitsu</li> */}
                    <li>
                      Jiu Jitsu
                      <div className="hide-nav">
                        <ul>
                          <li>
                            <Link to={`/jiu-jitsu/${"jiu-jitsu-bags"}`}>
                              <i class="fas fa-angle-double-right"></i> Jiu
                              Jitsu bags
                            </Link>
                          </li>
                          <li>
                            <Link to={`/jiu-jitsu/${"jiu-jitsu-belts"}`}>
                              <i class="fas fa-angle-double-right"></i> Jiu
                              jitsu Belts
                            </Link>
                          </li>
                          <li>
                            <Link to={`/jiu-jitsu/${"jiu-jitsu-gi"}`}>
                              <i class="fas fa-angle-double-right"></i> jiu
                              jitsu GI
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      Judo
                      <div className="hide-nav">
                        <ul>
                          <li>
                            <Link to={`/judo/${"judo-bags"}`}>
                              <i class="fas fa-angle-double-right"></i> Judo
                              Bags
                            </Link>
                          </li>
                          <li>
                            <Link to={`/judo/${"judo-belts"}`}>
                              <i class="fas fa-angle-double-right"></i> Judo
                              Belts
                            </Link>
                          </li>
                          <li>
                            <Link to={`/judo/${"judo-gis-and-uniforms"}`}>
                              <i class="fas fa-angle-double-right"></i> Judo Gis
                              & Uniforms
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      Karate
                      <div className="hide-nav">
                        <ul>
                          <li>
                            <Link to={`/karate/${"karate-bags-and-backpack"}`}>
                              <i class="fas fa-angle-double-right"></i> Karate
                              Bags & Backpack
                            </Link>
                          </li>
                          <li>
                            <Link to={`/karate/${"karate-belts"}`}>
                              <i class="fas fa-angle-double-right"></i> Karate
                              Belts
                            </Link>
                          </li>
                          <li>
                            <Link to={`/karate/${"karate-body-armour"}`}>
                              <i class="fas fa-angle-double-right"></i> Karate
                              Body Armour
                            </Link>
                          </li>
                          <li>
                            <Link to={`/karate/${"karate-clothing"}`}>
                              <i class="fas fa-angle-double-right"></i> Karate
                              Clothing
                            </Link>
                          </li>
                          <li>
                            <Link to={`/karate/${"karate-gloves"}`}>
                              <i class="fas fa-angle-double-right"></i> Karate
                              Gloves
                            </Link>
                          </li>
                          <li>
                            <Link to={`/karate/${"karate-groin-guards"}`}>
                              <i class="fas fa-angle-double-right"></i> Karate
                              Groin Guards
                            </Link>
                          </li>
                          <li>
                            <Link to={`/karate/${"karate-mats"}`}>
                              <i class="fas fa-angle-double-right"></i> Karate
                              Mats
                            </Link>
                          </li>
                          <li>
                            <Link to={`/karate/${"karate-shin-guards"}`}>
                              <i class="fas fa-angle-double-right"></i> Karate
                              Shin Guards
                            </Link>
                          </li>
                          <li>
                            <Link to={`/karate/${"karate-suits-and-uniforms"}`}>
                              <i class="fas fa-angle-double-right"></i> Karate
                              Suits & Uniforms
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      Sports Wear
                      <div
                        className="hide-nav"
                        style={{ width: "70%", left: "10%" }}
                      >
                        <div className="content-div">
                          <div>
                            <ul>
                              <li>
                                <Link
                                  to={`/apparel/${"women-yoga-tights-legging"}`}
                                >
                                  <i class="fas fa-angle-double-right"></i>
                                  Soccer Uniforms
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`/apparel/${"womens-dry-fit-vest-tank-top"}`}
                                >
                                  <i class="fas fa-angle-double-right"></i>
                                  Soccer Shirts
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"sports-bra"}`}>
                                  <i class="fas fa-angle-double-right"></i>
                                  Soccer Shorts
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"polo-shirt"}`}>
                                  <i class="fas fa-angle-double-right"></i>
                                  Soccer Trousers
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"women-hoodies"}`}>
                                  <i class="fas fa-angle-double-right"></i>
                                  Soccer Vests
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"women-t-shirts"}`}>
                                  <i class="fas fa-angle-double-right"></i>
                                  Soccer T-shirts
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"sweat-shirts"}`}>
                                  <i class="fas fa-angle-double-right"></i>
                                  Soccer Socks
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <Link
                                  to={`/apparel/${"women-yoga-tights-legging"}`}
                                >
                                  <i class="fas fa-angle-double-right"></i>
                                  VolleyBall Uniforms
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`/apparel/${"womens-dry-fit-vest-tank-top"}`}
                                >
                                  <i class="fas fa-angle-double-right"></i>
                                  VolleyBall T-shirts
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"sports-bra"}`}>
                                  <i class="fas fa-angle-double-right"></i>
                                  VolleyBall Sweat Shirts
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"polo-shirt"}`}>
                                  <i class="fas fa-angle-double-right"></i>
                                  VolleyBall Training Wear
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"women-hoodies"}`}>
                                  <i class="fas fa-angle-double-right"></i>
                                  VolleyBall Shorts
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"women-t-shirts"}`}>
                                  <i class="fas fa-angle-double-right"></i>
                                  VolleyBall Trousers
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <Link
                                  to={`/apparel/${"women-yoga-tights-legging"}`}
                                >
                                  <i class="fas fa-angle-double-right"></i>Rugby
                                  Uniforms
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`/apparel/${"womens-dry-fit-vest-tank-top"}`}
                                >
                                  <i class="fas fa-angle-double-right"></i>Rugby
                                  Jersey
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"sports-bra"}`}>
                                  <i class="fas fa-angle-double-right"></i>Rugby
                                  Pants
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>
                                <Link
                                  to={`/apparel/${"women-yoga-tights-legging"}`}
                                >
                                  <i class="fas fa-angle-double-right"></i>
                                  Running Shirts
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`/apparel/${"womens-dry-fit-vest-tank-top"}`}
                                >
                                  <i class="fas fa-angle-double-right"></i>
                                  Running Jackets
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"sports-bra"}`}>
                                  <i class="fas fa-angle-double-right"></i>
                                  Running Vests
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"polo-shirt"}`}>
                                  <i class="fas fa-angle-double-right"></i>
                                  Running Shorts
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"women-hoodies"}`}>
                                  <i class="fas fa-angle-double-right"></i>
                                  Running Trousers
                                </Link>
                              </li>
                              <li>
                                <Link to={`/apparel/${"women-t-shirts"}`}>
                                  <i class="fas fa-angle-double-right"></i>
                                  Running Tights
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      Apparel
                      <div className="hide-nav">
                        <ul>
                          <li>
                            <Link
                              to={`/apparel/${"women-yoga-tights-legging"}`}
                            >
                              <i class="fas fa-angle-double-right"></i> WOMEN
                              YOGA TIGHTS LEGGINGS
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`/apparel/${"womens-dry-fit-vest-tank-top"}`}
                            >
                              <i class="fas fa-angle-double-right"></i> Women’s
                              Dry Fit Vest Tank Top
                            </Link>
                          </li>
                          <li>
                            <Link to={`/apparel/${"sports-bra"}`}>
                              <i class="fas fa-angle-double-right"></i>{" "}
                              sports-bra
                            </Link>
                          </li>
                          <li>
                            <Link to={`/apparel/${"polo-shirt"}`}>
                              <i class="fas fa-angle-double-right"></i> Polo
                              shirt
                            </Link>
                          </li>
                          <li>
                            <Link to={`/apparel/${"women-hoodies"}`}>
                              <i class="fas fa-angle-double-right"></i> women
                              hoodies
                            </Link>
                          </li>
                          <li>
                            <Link to={`/apparel/${"women-t-shirts"}`}>
                              <i class="fas fa-angle-double-right"></i> women
                              t-shirts
                            </Link>
                          </li>
                          <li>
                            <Link to={`/apparel/${"sweat-shirts"}`}>
                              <i class="fas fa-angle-double-right"></i>{" "}
                              SWEATSHIRTS
                            </Link>
                          </li>
                          <li>
                            <Link to={`/apparel/${"men-leggings"}`}>
                              <i class="fas fa-angle-double-right"></i> Men
                              Leggings
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`/apparel/${"mens-comp-long-sleeve-t-shirt"}`}
                            >
                              <i class="fas fa-angle-double-right"></i> Men’s
                              Compression Long Sleeve T Shirt
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`/apparel/${"mens-comp-sleeveless-t-shirt"}`}
                            >
                              <i class="fas fa-angle-double-right"></i> Men’s
                              Compression Sleeveless T Shirt
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`/apparel/${"mens-comp-tank-top-t-shirt"}`}
                            >
                              <i class="fas fa-angle-double-right"></i> Men’s
                              Compression Tank Top T-Shirts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`/apparel/${"mens-short-sleeved-shirts"}`}
                            >
                              <i class="fas fa-angle-double-right"></i> Men’s
                              Short-Sleeved Shirts
                            </Link>
                          </li>
                          <li>
                            <Link to={`/apparel/${"men-hoodies"}`}>
                              <i class="fas fa-angle-double-right"></i> Men
                              Hoodies
                            </Link>
                          </li>
                          <li>
                            <Link to={`/apparel/${"men-t-shirts"}`}>
                              <i class="fas fa-angle-double-right"></i> Men’s T
                              shirt
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      Taekwondo
                      <div className="hide-nav">
                        <ul>
                          <li>
                            <Link to={`/taekwondo/${"taekwondo-bags"}`}>
                              <i class="fas fa-angle-double-right"></i>{" "}
                              Taekwondo Bags
                            </Link>
                          </li>
                          <li>
                            <Link to={`/taekwondo/${"taekwondo-belts"}`}>
                              <i class="fas fa-angle-double-right"></i>{" "}
                              Taekwondo Belts
                            </Link>
                          </li>
                          <li>
                            <Link to={`/taekwondo/${"taekwondo-clothing"}`}>
                              <i class="fas fa-angle-double-right"></i>{" "}
                              Taekwondo Clothing
                            </Link>
                          </li>
                          <li>
                            <Link to={`/taekwondo/${"taekwondo-groin-guards"}`}>
                              <i class="fas fa-angle-double-right"></i>{" "}
                              Taekwondo Groin Guards
                            </Link>
                          </li>
                          <li>
                            <Link to={`/taekwondo/${"taekwondo-shin-guards"}`}>
                              <i class="fas fa-angle-double-right"></i>{" "}
                              Taekwondo Shin Guards
                            </Link>
                          </li>
                          <li>
                            <Link to={`/taekwondo/${"taekwondo-suits"}`}>
                              <i class="fas fa-angle-double-right"></i>{" "}
                              Taekwondo Suits
                            </Link>
                          </li>
                          <li>
                            <Link to={`/taekwondo/${"taekwondo-head-guards"}`}>
                              <i class="fas fa-angle-double-right"></i>{" "}
                              Taekwondo Head Guards
                            </Link>
                          </li>
                          <li>
                            <Link to={`/taekwondo/${"taekwondo-mouth-guards"}`}>
                              <i class="fas fa-angle-double-right"></i>{" "}
                              Taekwondo Mouth Guards
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`/taekwondo/${"taekwondo-pads-and-sheilds"}`}
                            >
                              <i class="fas fa-angle-double-right"></i>{" "}
                              Taekwondo Pads & Shields
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      Boxing
                      <div className="hide-nav">
                        <ul>
                          <li>
                            <Link to={`/boxing/${"bag-gloves"}`}>
                              <i class="fas fa-angle-double-right"></i> Bag
                              Gloves
                            </Link>
                          </li>
                          <li>
                            <Link to={`/boxing/${"boxing-shorts"}`}>
                              <i class="fas fa-angle-double-right"></i> Boxing
                              Shorts
                            </Link>
                          </li>
                          <li>
                            <Link to={`/boxing/${"boxing-title-belts"}`}>
                              <i class="fas fa-angle-double-right"></i> Boxing
                              title belts
                            </Link>
                          </li>
                          <li>
                            <Link to={`/boxing/${"boxing-wraps"}`}>
                              <i class="fas fa-angle-double-right"></i> Boxing
                              wraps
                            </Link>
                          </li>
                          <li>
                            <Link to={`/boxing/${"focus-pads"}`}>
                              <i class="fas fa-angle-double-right"></i> Focus
                              Pads
                            </Link>
                          </li>
                          <li>
                            <Link to={`/boxing/${"shorts"}`}>
                              <i class="fas fa-angle-double-right"></i> Shorts
                            </Link>
                          </li>
                          <li>
                            <Link to={`/boxing/${"mouth-guards"}`}>
                              <i class="fas fa-angle-double-right"></i> Mouth
                              Guards
                            </Link>
                          </li>
                          <li>
                            <Link to={`/boxing/${"head-guards"}`}>
                              <i class="fas fa-angle-double-right"></i> Head
                              Guard
                            </Link>
                          </li>
                          <li>
                            <Link to={`/boxing/${"kickboxing-gloves"}`}>
                              <i class="fas fa-angle-double-right"></i>{" "}
                              Kickboxing Gloves
                            </Link>
                          </li>
                          <li>
                            <Link to={`/boxing/${"lather-boxing-gloves"}`}>
                              <i class="fas fa-angle-double-right"></i> Lather
                              boxing gloves
                            </Link>
                          </li>
                          <li>
                            <Link to={`/boxing/${"mma-gloves"}`}>
                              <i class="fas fa-angle-double-right"></i> MMA
                              Gloves
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`/boxing/${"synthetic-leather-boxing-gloves"}`}
                            >
                              <i class="fas fa-angle-double-right"></i>{" "}
                              Synthetic Leather Boxing Gloves
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      Sports Gloves
                      <div className="hide-nav">
                        <ul>
                          <li>
                            <Link to={`/sports-gloves/${"cycling-gloves"}`}>
                              <i class="fas fa-angle-double-right"></i> Cycling
                              Gloves
                            </Link>
                          </li>
                          <li>
                            <Link to={`/sports-gloves/${"motorcycle-gloves"}`}>
                              <i class="fas fa-angle-double-right"></i>{" "}
                              Motorcycle Gloves
                            </Link>
                          </li>
                          <li>
                            <Link to={`/sports-gloves/${"ski-gloves"}`}>
                              <i class="fas fa-angle-double-right"></i> Ski
                              Gloves
                            </Link>
                          </li>
                          <li>
                            <Link to={`/sports-gloves/${"golf-gloves"}`}>
                              <i class="fas fa-angle-double-right"></i> Golf
                              Gloves
                            </Link>
                          </li>
                          <li>
                            <Link to={`/sports-gloves/${"dressing-gloves"}`}>
                              <i class="fas fa-angle-double-right"></i> Dressing
                              Gloves
                            </Link>
                          </li>
                          <li>
                            <Link to={`/sports-gloves/${"winter-gloves"}`}>
                              <i class="fas fa-angle-double-right"></i> Winter
                              Gloves
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`/sports-gloves/${"horse-riding-gloves"}`}
                            >
                              <i class="fas fa-angle-double-right"></i> Horse
                              Riding Gloves
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`/sports-gloves/${"weight-lifting-gloves"}`}
                            >
                              <i class="fas fa-angle-double-right"></i> Weight
                              Lifting Gloves{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      Towel
                      <div className="hide-nav">
                        <ul></ul>
                      </div>
                    </li>
                    <li>
                      Accessories
                      <div className="hide-nav">
                        <ul>
                          <li>
                            <Link to={`/accessories/${"key-chains"}`}>
                              <i class="fas fa-angle-double-right"></i> Key
                              Chains
                            </Link>
                          </li>
                          <li>
                            <Link to={`/accessories/${"hand-wraps"}`}>
                              <i class="fas fa-angle-double-right"></i> Hand
                              Wraps
                            </Link>
                          </li>
                          <li>
                            <Link to={`/accessories/${"sports-bag"}`}>
                              <i class="fas fa-angle-double-right"></i> Sports
                              Bag
                            </Link>
                          </li>
                          <li>
                            <Link to={`/accessories/${"skiping-ropes"}`}>
                              <i class="fas fa-angle-double-right"></i> Skiping
                              Ropes
                            </Link>
                          </li>
                          <li>
                            <Link to={`/accessories/${"wallets"}`}>
                              <i class="fas fa-angle-double-right"></i> Wallets
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            {/* Drop Down Lists */}
          </Row>
        </div>
      </div>
    </>
  );
}

export default DropDown;
