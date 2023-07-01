import React from "react";
import image1 from "../asset/DLP.png";
import rice_img from "../asset/rice_img.jpg";
import wheat from "../asset/wheat.webp";
import maize_img from "../asset/maize_img.webp";
import Potatoes from "../asset/potatoes_img.webp";
import Tomatoes from "../asset/tomatoes_img.avif";
import Barley from "../asset/barley_img.jpg";
import oats from "../asset/oats_image.webp";
import cabbage from "../asset/cabbage_img.jpg";
import Carrots from "../asset/carrots_img.jpg";
import Onion from "../asset/onions_img.jpg";

import tea from "../asset/tea_img.jpg";
import Coffee from "../asset/coffee_img.jpg";
import Rubber from "../asset/rubbera-img.avif";
import Palm from "../asset/palm_img.avif";
import Sugar from "../asset/sugar-cane.webp";
import Banana from "../asset/banana-plantation.jpg";
import Cotton from "../asset/cotton_img.jpg";
import Coconut from "../asset/coconut_tree_img.png";
import pineapple from "../asset/pineapple_img.avif";
import cashew from "../asset/cashew_img.jpg";

import milk from "../asset/milk_img.jpg";
import egg from "../asset/egg_img.avif";
import wool from "../asset/wool_img.jpg";
import cheese from "../asset/cheese_img.avif";
import butter from "../asset/butter_img.jpg";
import shrimp from "../asset/shrimp_img.webp";
import Honey from "../asset/honey_img.jpg";

const Marketprice = () => {

    const foodarray = [{
        title: "Rice",
        image: rice_img,
        current_market: "prices of rice are expected to increase",
        price: "Rs. 40 / kg"
    },

    {
        title: "Wheat",
        image: wheat,
        current_market: "prices are anticipated to remain volatile",
        price: "Rs. 23 / kg"
    },

    {
        title: "Maize",
        image: maize_img,
        current_market: "prices may stabilize or decrease",
        price: "Rs. 29 / kg"
    },

    {
        title: "Potatoes",
        image: Potatoes,
        current_market: "prices are likely to appreciate over time",
        price: "Rs. 34 / kg"
    },

    {
        title: "Tomatoes",
        image: Tomatoes,
        current_market: "prices can be highly volatile",
        price: " Rs. 130 / kg"
    },

    {
        title: "Barley",
        image: Barley,
        current_market: "prices is tend to decrease over time",
        price: " Rs. 150 / kg"
    },

    {
        title: "Oats",
        image: oats,
        current_market: "huge fluctuation likely to occur",
        price: "Rs. 250 / kg"
    },

    {
        title: "Cabbage",
        image: cabbage,
        current_market: "prices are likely to appreciate over time",
        price: "Rs. 28 / kg"
    },

    {
        title: "Carrots",
        image: Carrots,
        current_market: "prices are expected to increase",
        price: "Rs. 105 / kg"
    },

    {
        title: "Onions",
        image: Onion,
        current_market: "prices are expected to decrease",
        price: "Rs. 30 / kg"
    }


    ]

    const cash_crop_array = [{
        title: "Tea",
        image: tea,
        current_market: "prices may stabilize or decrease",
        price: "Rs. 230 / kg"
    },

    {
        title: "Coffee",
        image: Coffee,
        current_market: "prices are likely to appreciate over time",
        price: "Rs. 230 / kg"
    },

    {
        title: "Rubber",
        image: Rubber,
        current_market: "prices are expected to increase",
        price: "Rs. 230 / kg"
    },

    {
        title: "Palm",
        image: Palm,
        current_market: "prices are anticipated to remain volatile",
        price: "Rs. 90 / kg"
    },

    {
        title: "Sugar Cane",
        image: Sugar,
        current_market: "prices is tend to decrease over time",
        price: "Rs. 138 / kg"
    },

    {
        title: "Banana",
        image: Banana,
        current_market: "prices can be highly volatile",
        price: "Rs. 29 / kg",

    },

    {
        title: "Cotton",
        image: Cotton,
        current_market: "huge fluctuation likely to occur",
        price: "Rs. 40 / kg"
    },

    {
        title: "Coconut",
        image: Coconut,
        current_market: "prices are expected to decrease",
        price: "Rs. 55 / kg"
    },

    {
        title: "Pineapple",
        image: pineapple,
        current_market: "prices are expected to increase",
        price: "Rs. 90 / kg"
    },

    {
        title: "Cashew nut",
        image: cashew,
        current_market: "prices are likely to appreciate over time",
        price: "Rs. 1300 / kg"
    }
    ]

    const live_stock_array = [{
        title: "Cow Milk",
        image: milk,
        current_market: "prices are likely to appreciate over time",
        price: "Rs. 70 / litre"
    },

    {
        title: "Goat Milk",
        image: milk,
        current_market: "prices are anticipated to remain volatile",
        price: "Rs. 120 / litre"
    },

    {
        title: "Chicken Egg",
        image: egg,
        current_market: "prices may stabilize or decrease",
        price: "Rs. 6 / nos"
    },

    {
        title: "Duck Egg",
        image: egg,
        current_market: "prices are expected to increase",
        price: "Rs. 9 / nos"
    },

    {
        title: "Quail Egg",
        image: egg,
        current_market: "prices can be highly volatile",
        price: "Rs. 2 / nos"
    },

    {
        title: "Wool",
        image: wool,
        current_market: "prices are expected to decrease",
        price: "Rs. 230 / kg"
    },

    {
        title: "Cheese",
        image: cheese,
        current_market: "huge fluctuation likely to occur",
        price: "Rs. 535 / kg"
    },

    {
        title: "Butter",
        image: butter,
        current_market: "prices are likely to appreciate over time",
        price: "Rs. 520 / kg"
    },

    {
        title: "Shrimp",
        image: shrimp,
        current_market: "prices are expected to increase",
        price: "Rs. 240 / kg"
    },

    {
        title: "Honey",
        image: Honey,
        current_market: "prices is tend to decrease over time",
        price: "Rs. 400 / litre"
    }

    ]


    return (
        <>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-10 text-center">
                        <h1> <i className="fa fa-table"></i> Foodcrops :</h1>
                        <table className="table table-bordered mt-4">
                            <thead>
                                <tr className="bg-light text-primary text-start">
                                    <th>Id</th>
                                    <th>Crop Name</th>
                                    <th>Image</th>
                                    <th>Current Market</th>
                                    <th>Price</th>

                                </tr>
                            </thead>
                            <tbody className="text-start">

                                {
                                    foodarray && foodarray.map((item, index) => {
                                        return (

                                            <tr key={index} style={{ verticalAlign: 'middle' }}>
                                                <td> {index + 1} </td>
                                                <td> {item.title}</td>
                                                <td>  <img src={item.image} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt={item.title} /></td>
                                                <td> {item.current_market}</td>

                                                <td> {item.price}</td>

                                            </tr>

                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-10 text-center">
                        <h1> <i className="fa fa-table"></i> Plantation Crops :</h1>
                        <table className="table table-bordered mt-4">
                            <thead>
                                <tr className="bg-light text-primary text-start">
                                    <th>Id</th>
                                    <th>Crop Name</th>
                                    <th>Image</th>
                                    <th>Current Market</th>
                                    <th>Price</th>


                                </tr>
                            </thead>
                            <tbody className="text-start">

                                {
                                    cash_crop_array && cash_crop_array.map((item, index) => {
                                        return (

                                            <tr key={index} style={{ verticalAlign: 'middle' }}>
                                                <td> {index + 1} </td>
                                                <td> {item.title}</td>
                                                <td>  <img src={item.image} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt={item.title} /></td>
                                                <td>{item.current_market}</td>

                                                <td>{item.price}</td>

                                            </tr>

                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-10 text-center">
                        <h1> <i className="fa fa-table"></i> Livestock Breeding:</h1>
                        <table className="table table-bordered mt-4">
                            <thead>
                                <tr className="bg-light text-primary text-start">
                                    <th>Id</th>
                                    <th>Item Name</th>
                                    <th>Image</th>
                                    <th>Current Market</th>
                                    <th>Price</th>


                                </tr>
                            </thead>
                            <tbody className="text-start">

                                {
                                    live_stock_array && live_stock_array.map((item, index) => {
                                        return (

                                            <tr key={index} style={{ verticalAlign: 'middle' }}>
                                                <td> {index + 1} </td>
                                                <td> {item.title}</td>
                                                <td>  <img src={item.image} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt={item.title} /></td>
                                                <td> {item.current_market}</td>

                                                <td> {item.price}</td>

                                            </tr>

                                        )
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketprice;