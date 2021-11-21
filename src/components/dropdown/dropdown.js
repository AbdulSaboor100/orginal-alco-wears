import React from "react";
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from "reactstrap";
import './dropdown.css';
import Img1 from '../../images/img1.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function DropDown(){

    
    

    return(
        <>
        <div>
            
        <div className="main-dropdown">
            <Row>
               <Col sm={12} md={12} >
               
                   <div className="list-items">
                   <div className="main-sub-parent">
                       <ul style={{marginTop:'revert'}}>
                       {/* <li>Jiu Jitsu</li> */}
                           <li>Jiu Jitsu
                               <div className="hide-nav" style={{position:"absolute" , right:"61rem"}}>
                                   <ul>
                                       <li><Link to={`/jiu-jitsu/${"jiu-jitsu-bags"}` } >Jiu Jitsu bags</Link></li>
                                       <li><Link to={`/jiu-jitsu/${"jiu-jitsu-belts"}`}>Jiu jitsu Belts</Link></li>
                                       <li><Link to={`/jiu-jitsu/${"jiu-jitsu-gi"}`}>jiu jitsu GI</Link></li>
                                   </ul>
                               </div>
                           </li>
                           
                           <li>Judo
                           <div className="hide-nav" style={{position:"absolute" , right:"52.5rem"}}>
                                    <ul>
                                       <li><Link to={`/judo/${"judo-bags"}` } >Judo Bags</Link></li>
                                       <li><Link to={`/judo/${"judo-belts"}`}>Judo Belts</Link></li>
                                       <li><Link to={`/judo/${"judo-gis-and-uniforms"}`}>Judo Gis & Uniforms</Link></li>
                                   </ul>
                               </div>
                           </li>
                           <li>Karate
                                <div className="hide-nav" style={{position:"absolute" , right:"45rem"}} >
                                    <ul>
                                       <li><Link to={`/karate/${"karate-bags-and-backpack"}` } >Karate Bags & Backpack</Link></li>
                                       <li><Link to={`/karate/${"karate-belts"}`}>Karate Belts</Link></li>
                                       <li><Link to={`/karate/${"karate-body-armour"}`}>Karate Body Armour</Link></li>
                                       <li><Link to={`/karate/${"karate-clothing"}`}>Karate Clothing</Link></li>
                                       <li><Link to={`/karate/${"karate-gloves"}`}>Karate Gloves</Link></li>
                                       <li><Link to={`/karate/${"karate-groin-guards"}`}>Karate Groin Guards</Link></li>
                                       <li><Link to={`/karate/${"karate-mats"}`}>Karate Mats</Link></li>
                                       <li><Link to={`/karate/${"karate-shin-guards"}`}>Karate Shin Guards</Link></li>
                                       <li><Link to={`/karate/${"karate-suits-and-uniforms"}`}>Karate Suits & Uniforms</Link></li>

                                    </ul>
                                </div>
                           </li>
                           <li>Apparel
                           <div className="hide-nav" style={{position:"absolute" , right:"38rem"}} >
                                    <ul>
                                       <li><Link to={`/apparel/${"women-yoga-tights-legging"}` } >WOMEN YOGA TIGHTS LEGGINGS</Link></li>
                                       <li><Link to={`/apparel/${"womens-dry-fit-vest-tank-top"}`}>Women’s Dry Fit Vest Tank Top</Link></li>
                                       <li><Link to={`/apparel/${"sports-bra"}`}>sports-bra</Link></li>
                                       <li><Link to={`/apparel/${"polo-shirt"}`}>Polo shirt</Link></li>
                                       <li><Link to={`/apparel/${"women-hoodies"}`}>women hoodies</Link></li>
                                       <li><Link to={`/apparel/${"women-t-shirts"}`}>women t-shirts</Link></li>
                                       <li><Link to={`/apparel/${"sweat-shirts"}`}>SWEATSHIRTS</Link></li>
                                       <li><Link to={`/apparel/${"men-leggings"}`}>Men Leggings</Link></li>
                                       <li><Link to={`/apparel/${"mens-comp-long-sleeve-t-shirt"}`}>Men’s Compression Long Sleeve T Shirt</Link></li>
                                       <li><Link to={`/apparel/${"mens-comp-sleeveless-t-shirt"}`}>Men’s Compression Sleeveless T Shirt</Link></li>
                                       <li><Link to={`/apparel/${"mens-comp-tank-top-t-shirt"}`}>Men’s Compression Tank Top T-Shirts</Link></li>
                                       <li><Link to={`/apparel/${"mens-short-sleeved-shirts"}`}>Men’s Short-Sleeved Shirts</Link></li>
                                       <li><Link to={`/apparel/${"men-hoodies"}`}>Men Hoodies</Link></li>
                                       <li><Link to={`/apparel/${"men-t-shirts"}`}>Men’s T shirt</Link></li>

                                    </ul>
                               </div>
                           </li>
                           <li>Taekwondo
                           <div className="hide-nav" style={{position:'absolute' , right:'28rem'}}>
                                    <ul>
                                       <li><Link to={`/taekwondo/${"taekwondo-bags"}` } >Taekwondo Bags</Link></li>
                                       <li><Link to={`/taekwondo/${"taekwondo-belts"}`}>Taekwondo Belts</Link></li>
                                       <li><Link to={`/taekwondo/${"taekwondo-clothing"}`}>Taekwondo Clothing</Link></li>
                                       <li><Link to={`/taekwondo/${"taekwondo-groin-guards"}`}>Taekwondo Groin Guards</Link></li>
                                       <li><Link to={`/taekwondo/${"taekwondo-shin-guards"}`}>Taekwondo Shin Guards</Link></li>
                                       <li><Link to={`/taekwondo/${"taekwondo-suits"}`}>Taekwondo Suits</Link></li>
                                       <li><Link to={`/taekwondo/${"taekwondo-head-guards"}`}>Taekwondo Head Guards</Link></li>
                                       <li><Link to={`/taekwondo/${"taekwondo-mouth-guards"}`}>Taekwondo Mouth Guards</Link></li>
                                       <li><Link to={`/taekwondo/${"taekwondo-pads-and-sheilds"}`}>Taekwondo Pads & Shields</Link></li>

                                    </ul>
                               </div>
                           </li>
                           <li>Boxing
                           <div className="hide-nav" style={{position:"absolute" , left:'49rem' ,width:'30vh'}}>
                                    <ul>
                                       <li><Link to={`/boxing/${"bag-gloves"}` } >Bag Gloves</Link></li>
                                       <li><Link to={`/boxing/${"boxing-shorts"}`}>Boxing Shorts</Link></li>
                                       <li><Link to={`/boxing/${"boxing-title-belts"}`}>Boxing title belts</Link></li>
                                       <li><Link to={`/boxing/${"boxing-wraps"}`}>Boxing wraps</Link></li>
                                       <li><Link to={`/boxing/${"focus-pads"}`}>Focus Pads</Link></li>
                                       <li><Link to={`/boxing/${"shorts"}`}>Shorts</Link></li>
                                       <li><Link to={`/boxing/${"mouth-guards"}`}>Mouth Guards</Link></li>
                                       <li><Link to={`/boxing/${"head-guards"}`}>Head Guard</Link></li>
                                       <li><Link to={`/boxing/${"kickboxing-gloves"}`}>Kickboxing Gloves</Link></li>
                                       <li><Link to={`/boxing/${"lather-boxing-gloves"}`}>Lather boxing gloves</Link></li>
                                       <li><Link to={`/boxing/${"mma-gloves"}`}>MMA Gloves</Link></li>
                                       <li><Link to={`/boxing/${"synthetic-leather-boxing-gloves"}`}>Synthetic Leather Boxing Gloves</Link></li>
                                       

                                    </ul>
                               </div>
                           </li>
                           
                           <li>Sports Gloves
                           <div className="hide-nav" style={{position:"absolute" , left:'58rem' ,width:'30vh'}}>
                                    <ul>
                                       <li><Link to={`/sports-gloves/${"cycling-gloves"}` } >Cycling Gloves</Link></li>
                                       <li><Link to={`/sports-gloves/${"motorcycle-gloves"}`}>Motorcycle Gloves</Link></li>
                                       <li><Link to={`/sports-gloves/${"ski-gloves"}`}>Ski Gloves</Link></li>
                                       <li><Link to={`/sports-gloves/${"golf-gloves"}`}>Golf Gloves</Link></li>
                                       <li><Link to={`/sports-gloves/${"dressing-gloves"}`}>Dressing Gloves</Link></li>
                                       <li><Link to={`/sports-gloves/${"winter-gloves"}`}>Winter Gloves</Link></li>
                                       <li><Link to={`/sports-gloves/${"horse-riding-gloves"}`}>Horse Riding Gloves</Link></li>
                                       <li><Link to={`/sports-gloves/${"weight-lifting-gloves"}`}>Weight Lifting Gloves </Link></li>
                                       

                                    </ul>
                               </div>
                           </li>
                           <li>Accessories
                           <div className="hide-nav" style={{position:"absolute" , left:'65rem' ,width:'30vh'}}>
                                    <ul>
                                       <li><Link to={`/accessories/${"key-chains"}` } >Key Chains</Link></li>
                                       <li><Link to={`/accessories/${"hand-wraps"}`}>Hand Wraps</Link></li>
                                       <li><Link to={`/accessories/${"sports-bag"}`}>Sports Bag</Link></li>
                                       <li><Link to={`/accessories/${"skiping-ropes"}`}>Skiping Ropes</Link></li>
                                       <li><Link to={`/accessories/${"wallets"}`}>Wallets</Link></li>
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
    )
}


export default DropDown;


