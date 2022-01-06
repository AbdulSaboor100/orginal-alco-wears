export let data = {
    jiuJitsu : [
        'Jiu Jitsu bags',
        'Jiu jitsu Belts',
        'jiu jitsu GI',
    ],
    judo : [
        'judo-bags',
        'judo-belts',
        'judo-gis-and-uniforms',
    ],
    karate : [
        'karate-bags-and-backpack',
        'karate-belts',
        'karate-body-armour',
        'karate-clothing',
        'karate-gloves',
        'karate-groin-guards',
        'karate-mats',
        'karate-shin-guards',
        'karate-suits-and-uniforms',
    ],

    apparel :[
        'women-yoga-tights-legging',
        'womens-dry-fit-vest-tank-top',
        'sports-bra',
        'polo-shirt',
        'women-hoodies',
        'women-t-shirts',
        'sweat-shirts',
        'men-leggings',
        'mens-comp-long-sleeve-t-shirt',
        'mens-comp-sleeveless-t-shirt',
        'mens-comp-tank-top-t-shirt',
        'mens-short-sleeved-shirts',
        'men-hoodies',
        'men-t-shirts',
    ],

    taekwondo : [
        "Taekwondo Bags",
        "Taekwondo Belts",
        'Taekwondo Clothing',
        "Taekwondo Groin Guards",
        "Taekwondo Shin Guards",
        'Taekwondo Suits',
        'Taekwondo Head Guards',
        'Taekwondo Mouth Guards',
        "Taekwondo Pads & Shields",
    ],
    boxing : [
        "Bag Gloves",
        'Boxing Shorts',
        'Boxing title belts',
        'Boxing wraps',
        'Focus Pads',
        'Shorts',
        'Mouth Guards',
        'Head Guard',
        'Kickboxing Gloves',
        'Lather boxing gloves',
        'MMA Gloves',
        'Synthetic Leather Boxing Gloves',
    ],

    sportsGloves : [
        "Cycling Gloves",
        "Motorcycle Gloves",
        "Ski Gloves",
        "Golf Gloves",
        'Dressing Gloves',
        'Winter Gloves',
        'Horse Riding Gloves',
        'Weight Lifting Gloves',
    ],

    accessories:[
        'Key Chains',
        'Hand Wraps',
        'Sports Bag',
        'Skiping Ropes',
        'Wallets ',
    ],

    productData : [],
}

export function reducer(state, action) {
    switch (action.type) {
        case "PRODUCT_DATA": {
            let userClone = state.productData.slice(0)
            userClone.push(action.payload)
            console.log(action.payload)
            return {
                ...state,
                productData: userClone
            }
        }
        
        

     
     
        
        default:
            return state;

    }
}