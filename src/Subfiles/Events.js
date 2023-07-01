import React from "react";
import grain_tech_india from "../asset/grain-img.jpg";
import agri_intex from "../asset/agri-intex.jpg";
import agri_and_horti from "../asset/Horticulture.webp";
import agri_asia from "../asset/paddy-plantation.jpg";
import kisan_biz from "../asset/kisan-biz.png";
import millets_india from "../asset/millets-india.jpg";
import dairy_livestock_poultry from "../asset/DLP.png";
import krishtithon from "../asset/kristhiton.jpg";
import agrivision from "../asset/agrovision-2023.webp";


const Events = () => {

    const eventsArray = [
        {
            title: "GRAINTECH INDIA 2023",
            content1: "(25th August 2023)",
            content2: "Bengaluru, Karnataka",
            image: grain_tech_india
        },
        {
            title: "AGRI INTEX 2023",
            content1: "(14th July 2023)",
            content2: "Coimbatore, Tamil Nadu",
            image: agri_intex
        },
        {
            title: "AGRI & HORTI TECHNOLOGY",
            content1: "(27th June 2023)",
            content2: "Lucknow, Uttar Pradesh",
            image: agri_and_horti
        },
        {
            title: "AGRI ASIA 2023",
            content1: "(15th July 2023)",
            content2: "Gandhinagar, Gujarat",
            image: agri_asia
        },
        {
            title: "KISAN Biz - Agri-Business",
            content1: "(11th September 2023)",
            content2: "Navi Mumbai, Maharashtra",
            image: kisan_biz
        },
        {
            title: "MILLETS INDIA-2023",
            content1: "(9th September 2023)",
            content2: "Greater Noida, Uttar Pradesh",
            image: millets_india
        },
        {
            title: "DAIRY LIVESTOCK POULTRY",
            content1: "(17th July 2023)",
            content2: "Gandhinagar, Gujarat",
            image: dairy_livestock_poultry
        },
        {
            title: "KRISHITHON",
            content1: "(10th October 2023)",
            content2: "Nashik, Maharashtra",
            image: krishtithon
        },
        {
            title: "AGROVISION 2023",
            content1: "(1st November 2023)",
            content2: "Nagpur, Maharashtra",
            image: agrivision
        }
    ];

    return (
        <>
            <div className="newevents">

                {
                    eventsArray && eventsArray.map((item, index) => {
                        return (

                            <p>

                                <div
                                    className="event-div"
                                >

                                    <img
                                        src={item.image}
                                        style={{
                                            width: "300px",
                                            borderRadius: "4px",
                                            height: "140px",
                                            transition: "transform 0.3s" 
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.transform = "scale(1.2)"; 
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.transform = "scale(1)"; 
                                        }}
                                        alt="GrainTech India"
                                    />
                                    <p style={{ marginTop: '10px', marginLeft: "10px" }}>
                                        <b>{item.title}</b>
                                        <br />
                                        {item.content1}
                                        <br />
                                        {item.content2}
                                    </p>

                                </div>
                            </p>
                        )
                    })
                }






            </div>



        </>
    )
}

export default Events;