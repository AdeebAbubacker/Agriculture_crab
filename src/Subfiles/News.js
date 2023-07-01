import React from "react";
import dullmonsoon from "../asset/dullmonsoon.avif";
import horticulture from "../asset/Horticulture.webp";
import NAFED from "../asset/NAFED.avif";
import Amazon_kisan from "../asset/Amazon-kisan.avif";
import Cabinet_approved from "../asset/cabinet-approves.avif";
import govt_caps_tur from "../asset/govt-caps-tur.avif";
import govt_edible_oil from "../asset/govt-edible-oil.avif";
import broken_rice from "../asset/broken-rice.avif";
import SYGENTA from "../asset/SYNGENTA.avif";
import sunflower_oil from "../asset/sunflower-oil.png";
import drought from "../asset/drought.jpg";
import cyclone from "../asset/cyclone-image-2.jpg"
import banana_tree from "../asset/banana-tree.webp";
import banana_tree_flood from "../asset/banana-tree-flood.webp";
import happy_farmer from "../asset/happy-farmer.jpg";
import wheat from "../asset/wheat.webp";
import sugar_cane from "../asset/sugar-cane.webp";
import banana_plantation from "../asset/banana-plantation.jpg";
import paddy_plantation from "../asset/paddy-plantation.jpg";


const News = () => {

    const newsarray = [{
        title: "Dull monsoon may lower paddy yields",
        content: "Paddy requires the most water during the time of sowing, and then again a month before the harvest. While the onset of southwest monsoon over Kerala coast was delayed by a week, its progress was affected by cyclone Biparjoy, which ripped through parts of Gujarat last week.",
        image: dullmonsoon
    },
    {
        title: "India, ADB sign $130 million loan agreement to boost horticulture in Himachal Pradesh",
        content: "The project builds upon a pilot financed by ADB’s project readiness facility which demonstrated the subtropical horticulture production over 200 hectare and prepared the draft water user association act and the draft state horticulture development strategy.",
        image: horticulture
    },
    {
        title: "NAFED plans to convert a fifth of its raw chana stocks to dal amid surplus",
        content: "The government has been giving out chana to states and union territories at a discounted rate for almost a year now to liquidate its stocks as pulses cannot be stored for more than a year.",
        image: NAFED
    },
    {
        title: "Amazon Kisan, Indian Council of Agricultural Research in pact to empower farmers",
        content: "New Delhi: Indian Council of Agricultural Research (ICAR) and Amazon Kisan have joined hands to guide farmers on scientific cultivation of different crops for optimum yield and income.",
        image: Amazon_kisan
    },
    {
        title: "Cabinet approves hike in MSP of kharif crops for 2023-24",
        content: "The MSP serves as a crucial safety net for farmers in India, with the government guaranteeing a minimum price for their produce. It also helps ensure food security and stabilizes market prices of staples. The government also uses the MSP to encourage farmers to cultivate certain crops.",
        image: Cabinet_approved
    },
    {
        title: "Govt caps tur and urad dal stock to curb hoarding, rising prices",
        content: "To curb both hoarding and unfair speculation amid soaring prices, the government late Friday imposed limits on the stocks of tur and urad dal. The stock limits will apply to a range of entities such as wholesalers to retailers, millers and importers.",
        image: govt_caps_tur
    },
    {
        title: "Govt asks edible oil firms to slash retail prices by ₹8-12 per litre",
        content: "The Department of Food and Public Distribution (DFPD) asked edible oil companies on Friday to immediately reduce the maximum retail prices (MRP) on their products by ₹8-12 per litr, citing a drop in global oil prices.",
        image: govt_edible_oil
    },
    {
        title: "India allows exports of broken rice to meet food security needs of other nations",
        content: "The government late on Wednesday allowed exports of broken rice based on permission given by the government for shipments to other countries for meeting their food security needs, though the export ban on broken rice is in place.",
        image: broken_rice
    },
    {
        title: "Syngenta, FMC join hands to commercialise new herbicide technology for rice crop",
        content: "Agri-input firm Syngenta and FMC Corporation on Wednesday announced a strategic partnership to introduce an innovative herbicide technology for controlling grass weeds in rice crops across Asia.",
        image: SYGENTA
    },
    {
        title: "Govt scraps duty, agri cess on soya bean oil, sunflower oil imports under TRQ",
        content: "The finance ministry has announced a waiver of basic customs duty and agriculture infrastructure and development cess on crude soya bean oil and sunflower seed oil imports under the tariff rate quota (TRQ) system.",
        image: sunflower_oil
    },
    {
        title: "‘Inflation may be driven by heatwaves, possibility of El Nino’",
        content: "India’s inflation rate may be driven by heatwaves and the possibility of an El Nino weather phenomenon among other factors, said the monthly economic review of the finance ministry.",
        image: drought
    },



    ]
    return (
        <>
            <section className="mt-4">
                <div className="row">
                    <div className="col-lg-8" style={{ textAlign: "left", marginLeft: "80px" }}>
                        <h5>Latest News<hr style={{ backgroundColor: "#111111", height: "4px" }}></hr></h5>
                        <section>

                            {
                                newsarray && newsarray.map((item, index) => {
                                    return (
                                        <div key={index} >
                                            <div style={{ backgroundColor: "#f3eeee", borderRadius: "5px", height: "170px" }}>
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <img src={item.image} style={{ borderRadius: "5px", height: "168px", width: "330px" }} /></div>
                                                    <div className="col-lg-7">
                                                        <h5 style={{ textAlign: "left", marginTop: "10px",paddingLeft:"30px"}}>{item.title}</h5>
                                                        <p style={{ textAlign: "left",paddingLeft:"30px" }}>
                                                            {item.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr style={{ width: "1000px" }}></hr>
                                        </div>
                                    )
                                })
                            }

                        </section>
                    </div>
                    <div className="col-lg-3">
                        <section>
                            <div className="mt-5">
                                <img src={cyclone} style={{ width: "360px", borderRadius: "5px", marginBottom: "10px" }} />
                                <img src={banana_tree} style={{ width: "360px", borderRadius: "5px", marginBottom: "10px" }} />
                                <img src={banana_tree_flood} style={{ width: "360px", borderRadius: "5px", marginBottom: "10px" }} />
                                <img src={happy_farmer} style={{ width: "300px", borderRadius: "5px", marginBottom: "10px" }} />
                                <img src={wheat} style={{ width: "360px", borderRadius: "5px", marginBottom: "10px" }} />
                                <img src={sugar_cane} style={{ width: "360px", borderRadius: "5px", marginBottom: "10px" }} />
                                <img src={banana_plantation} style={{ width: "360px", borderRadius: "5px", marginBottom: "10px" }} />
                                <img src={paddy_plantation} style={{ width: "360px", borderRadius: "5px", marginBottom: "10px" }} />
                            </div>
                        </section>
                    </div>
                </div>
            </section>

        </>
    )
}

export default News;