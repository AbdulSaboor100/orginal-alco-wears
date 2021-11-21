import React, { useState } from "react";
import { db, storage ,ref , uploadBytes , getDownloadURL , addDoc , collection } from "../../configs/firebase";







function MyAdmin(){
  let [imgUpload , setImgUpload] = useState('');
  let [succus , setSuccus] = useState('');
  let [error , setError] = useState('');
  let [productName , setProductName] = useState('');
  let [description , setDescription] = useState('');
  let [productId , setProductId] = useState('')

 
  function addProduct(){
    let productType = document.getElementById('product-type');
    
    let randomNumber = Math.ceil(Math.random() * 100000000000)
    
    let storageRef = ref(storage, `${imgUpload.name}/${randomNumber}`)
    uploadBytes(storageRef, imgUpload)
    .then(async (snapshot) => {
      let URL = await getDownloadURL(storageRef)
      let productObj = {
        Description: description,
        ProductName: productName,
        ProductID : productId,
        Type : productType.value,
        URL : URL
      }

      
     
      try {
        let dataRef = collection(db, productType.value);
        let saveData = await addDoc(dataRef , productObj);
        if(saveData){
          setSuccus('Product Has Been Uploaded')
          setProductName('')
          setDescription('')
          setProductId('')
          setImgUpload('')
          setTimeout(function(){
            setSuccus('')

          },2000)
        }
        
      } catch (error) {
        setError(error.message)
        setTimeout(function(){
          setError('')
        },2000)
      }

    })
    .catch(function(err){
      console.log(err.message ,"MESSAGE ERROR")
      setError(err.message)
      setTimeout(function(){
        setError('')
      },2000)
    })
    

   
    
  

  




  }


        


    return(
      <div>
     <div>
          {
            succus != '' ? <p>{succus}</p> :  null
          }
          {
            error != '' ? <p>{error}</p> :  null
          }
     </div>
    <div>

        <label>Image Upload : <input type='file' onChange={(e)=>{setImgUpload(e.target.files[0])}} /></label><br />
        <label>Product Name : <input type="text" onChange={(e)=>{setProductName(e.target.value)}} value={productName} /></label><br />
        <label>Description : <input type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description} /></label><br />
        <label>ProductID : <input type="text" onChange={(e)=>{setProductId(e.target.value)}} value={productId} /></label><br />
        <h3>Categories</h3>
        <label for="product-type">Select Product Type : </label>
  <select name="product-type" id="product-type">
    <optgroup label="jiu-jitsu">
      <option value="jiu-jitsu-bags">Jiu Jitsu Bags</option>
      <option value="jiu-jitsu-belts">Jiu Jitsu Belts</option>
      <option value="jiu-jitsu-gi">Jiu Jitsu GI</option>
      
    </optgroup>
    <optgroup label="judo">
      <option value="judo-bags">Judo Bags</option>
      <option value="judo-belts">Judo Belts</option>
      <option value="judo-gis-and-uniforms">Judo Gis & Uniforms</option>
    </optgroup>
    <optgroup label="karate">
      <option value="karate-bags-and-backpack">Karate Bags & Backpack</option>
      <option value="karate-belts">Karate Belts</option>
      <option value="karate-body-armour">Karate Body Armour</option>
      <option value="karate-clothing">Karate Clothing</option>
      <option value="karate-gloves">Karate Gloves</option>
      <option value="karate-groin-guards">Karate Groin Guards</option>
      <option value="karate-mats">Karate Mats</option>
      <option value="karate-shin-guards">Karate Shin Guards</option>
      <option value="karate-suits-and-uniforms">Karate Suits & Uniforms</option>
    </optgroup>
    <optgroup label="apparel">
      <option value="women-yoga-tights-legging">WOMEN YOGA TIGHTS LEGGINGS</option>
      <option value="womens-dry-fit-vest-tank-top">Women’s Dry Fit Vest Tank Top</option>
      <option value="sports-bra">sports-bra</option>
      <option value="polo-shirt">Polo shirt</option>
      <option value="women-hoodies">women hoodies</option>
      <option value="women-t-shirts">women t-shirts</option>
      <option value="sweat-shirts">SWEATSHIRTS</option>
      <option value="men-leggings">Men Leggings</option>
      <option value="mens-comp-long-sleeve-t-shirt">Men’s Compression Long Sleeve T Shirt</option>
      <option value="mens-comp-sleeveless-t-shirt">Men’s Compression Sleeveless T Shirt</option>
      <option value="mens-comp-tank-top-t-shirt">Men’s Compression Tank Top T-Shirts</option>
      <option value="mens-short-sleeved-shirts">Men’s Short-Sleeved Shirts</option>
      <option value="men-hoodies">Men Hoodies</option>
      <option value="men-t-shirts">Men’s T shirt</option>
    </optgroup>

    <optgroup label="taekwondo">
      <option value="taekwondo-bags">Taekwondo Bags</option>
      <option value="taekwondo-belts">Taekwondo Belts</option>
      <option value="taekwondo-clothing">Taekwondo Clothing</option>
      <option value="taekwondo-groin-guards">Taekwondo Groin Guards</option>
      <option value="taekwondo-shin-guards">Taekwondo Shin Guards</option>
      <option value="taekwondo-suits">Taekwondo Suits</option>
      <option value="taekwondo-head-guards">Taekwondo Head Guards</option>
      <option value="taekwondo-mouth-guards">Taekwondo Mouth Guards</option>
      <option value="taekwondo-pads-and-sheilds">Taekwondo Pads & Shields</option>
    </optgroup>

    <optgroup label="boxing">
      <option value="bag-gloves">Bag Gloves</option>
      <option value="boxing-shorts">Boxing Shorts</option>
      <option value="boxing-title-belts">Boxing title belts</option>
      <option value="boxing-wraps">Boxing wraps</option>
      <option value="focus-pads">Focus Pads</option>
      <option value="shorts">Shorts</option>
      <option value="mouth-guards">Mouth Guards</option>
      <option value="head-guards">Head Guard</option>
      <option value="kickboxing-gloves">Kickboxing Gloves</option>
      <option value="lather-boxing-gloves">Lather boxing gloves</option>
      <option value="mma-gloves">MMA Gloves</option>
      <option value="synthetic-leather-boxing-gloves">Synthetic Leather Boxing Gloves</option>
    </optgroup>

    <optgroup label="Sports Gloves">
      <option value="cycling-gloves">Cycling Gloves</option>
      <option value="motorcycle-gloves">Motorcycle Gloves</option>
      <option value="ski-gloves">Ski Gloves</option>
      <option value="golf-gloves">Golf Gloves</option>
      <option value="dressing-gloves">Dressing Gloves</option>
      <option value="winter-gloves">Winter Gloves</option>
      <option value="horse-riding-gloves">Horse Riding Gloves</option>
      <option value="weight-lifting-gloves">Weight Lifting Gloves</option>
    </optgroup>
    
  </select>
  {/* <br /><br />
  <label for="judo">Judo : </label>
  <select name="judo" id="judo">
    <optgroup label="judo">
      <option value="judo-bags">Judo Bags</option>
      <option value="judo-belts">Judo Belts</option>
      <option value="judo-gis-and-uniforms">Judo Gis & Uniforms</option>
    </optgroup>
    
  </select>
  <br /><br /> */}
  {/* <label for="karate">Karate : </label>
  <select name="karate" id="karate">
    <optgroup label="karate">
      <option value="karate-bags-and-backpack">Karate Bags & Backpack</option>
      <option value="karate-belts">Karate Belts</option>
      <option value="karate-body-armour">Karate Body Armour</option>
      <option value="karate-clothing">Karate Clothing</option>
      <option value="karate-gloves">Karate Gloves</option>
      <option value="karate-groin-guards">Karate Groin Guards</option>
      <option value="karate-mats">Karate Mats</option>
      <option value="karate-shin-guards">Karate Shin Guards</option>
      <option value="karate-suits-and-uniforms">Karate Suits & Uniforms</option>
    </optgroup>
    
  </select>
  <br /><br /> */}

  {/* <label for="apparel">Apparel : </label>
  <select name="apparel" id="apparel">
    <optgroup label="apparel">
      <option value="women-yoga-tights-legging">WOMEN YOGA TIGHTS LEGGINGS</option>
      <option value="womens-dry-fit-vest-tank-top">Women’s Dry Fit Vest Tank Top</option>
      <option value="sports-bra">sports-bra</option>
      <option value="polo-shirt">Polo shirt</option>
      <option value="women-hoodies">women hoodies</option>
      <option value="women-t-shirts">women t-shirts</option>
      <option value="sweat-shirts">SWEATSHIRTS</option>
      <option value="men-leggings">Men Leggings</option>
      <option value="mens-comp-long-sleeve-t-shirt">Men’s Compression Long Sleeve T Shirt</option>
      <option value="mens-comp-sleeveless-t-shirt">Men’s Compression Sleeveless T Shirt</option>
      <option value="mens-comp-tank-top-t-shirt">Men’s Compression Tank Top T-Shirts</option>
      <option value="mens-short-sleeved-shirts">Men’s Short-Sleeved Shirts</option>
      <option value="men-hoodies">Men Hoodies</option>
      <option value="men-t-shirts">Men’s T shirt</option>
    </optgroup>
    
  </select>
  <br /><br /> */}
        
        <button onClick={addProduct}>Add Product</button>
      </div>
 

         </div>
    )
}

export default MyAdmin;

