import React from "react";
// import aboutimg from "../asset/aboutimg.jpg";
import tractors from "../asset/tractors5936.jpg";
import tillers from "../asset/Tiller.jpg";
import forklift from "../asset/forklift-1.png";
import plows from "../asset/plows.jpg";
import harrows from "../asset/harrow.webp";
import seeders from "../asset/seeder.jpg";
import transplanters from "../asset/Transplanters.jpg";
import dibblers from "../asset/dibblers.jpg";
import sprinklers from "../asset/sprinklers.jpeg";
import Dripirrig from "../asset/Drip-Irrigation.jpg";
import irrigationpump from "../asset/agricultural-pump.jpg";
import weedingtools from "../asset/weeding-tool.webp";
import pruning from "../asset/pruning-tool.webp";
import harvesters from "../asset/harvester.jpg";
import sickles from "../asset/sickles.jpg";
import thresher from "../asset/thresher.jpg";
import winnowers from "../asset/winnowers.png";
import graindryer from "../asset/grain-dryer.jpg";
import milkingmachine from "../asset/milking-machine.jpg";


const Products = () => {
    const productarray = [{
        title: "Tractors",
        content: "Tractors are commonly used in agriculture for tasks such as plowing, illing, planting, and harvesting. Agriculture departments may offer rental or subsidy programs to assist farmers in acquiring tractors or access them through cooperative farming initiatives.",
        image: tractors
    },

    {
        title: "Tillers",
        content: "Tillers are agricultural implements used for soil cultivation and seedbed preparation. They come in various types and are used to break up soil, incorporate organic matter or fertilizers, and create a suitable seedbed for planting. The Department of Agriculture of India provides tiller."
        , image: tillers
    }

        , {
        title: "Forklifts"
        , content: "Forklifts are material handling vehicles widely used in various industries, including agriculture.Forklifts play a crucial role in streamlining operations by efficiently moving and stacking materials, such as agricultural inputs, harvested crops, and equipment"
        , image: forklift
    }

        , {
        title: "Plows"
        , content: "Plows are essential agricultural implements used for soil preparation and cultivation. They are designed to break up and turn over the soil, creating furrows or ridges for planting seeds or crops.The Department of Agriculture of India provides plows."
        , image: plows
    }

        , {
        title: "Harrows"
        , content: "Harrows are agricultural implements used for soil cultivation and seedbed preparation. They are designed to break up clods, level the soil surface, and remove weeds or crop residue. The Department of Agriculture of India provides harrow."
        , image: harrows
    }

        , {
        title: "Seeders"
        , content: "Seeders are agricultural implements used for accurate and efficient sowing of seeds in farming operations.They can be manually operated, animal-drawn, or tractor-mounted, depending on the scale of farming and available resources."
        , image: seeders
    }

        , {
        title: "Transplanters"
        , content: "Transplanters are agricultural machines used for transplanting seedlings from nurseries to the field.The Department of Agriculture of India provides guidelines for the proper use of transplanters."
        , image: transplanters
    }

        , {
        title: "Dibblers"
        , content: "Dibblers are agricultural tools used for making holes or indentations in the soil for planting seeds or seedlings. The Department of Agriculture of India recognizes the importance of dibblers in facilitating accurate planting."
        , image: dibblers
    }

        , {
        title: "Sprinklers"
        , content: "Sprinklers are irrigation devices used in agriculture to distribute water over crops or fields in a controlled manner.The Department of Agriculture of India provides guidelines for the proper use of sprinklers, including recommendations for sprinkler spacing, pressure."
        , image: sprinklers
    }

        , {
        title: "Drip Irrigation Systems"
        , content: "Drip irrigation systems are efficient and precise methods of delivering water directly to the plant roots, minimizing water wastage and maximizing water use efficiency in agriculture. The Department of Agriculture of India recognizes the importance of drip irrigation systems"
        , image: Dripirrig
    }

        , {
        title: "Irrigation Pumps"
        , content: "Irrigation pumps are essential devices used in agriculture to extract water from water sources, such as wells, rivers, or reservoirs, and distribute it for irrigation purposes. The Department of Agriculture of India recognizes the significance of irrigation pumps and provides guidelines for their selection."
        , image: irrigationpump
    }

        , {
        title: "Weeding Tools"
        , content: "Weeding tools are essential implements used in agriculture and gardening to remove unwanted weeds from crops and garden beds. These tools are designed to effectively uproot or cut down weeds while minimizing damage to surrounding plants."
        , image: weedingtools
    }

        , {
        title: "Pruning Tools"
        , content: "Pruning tools are essential implements used in horticulture, gardening, and arboriculture for the purpose of trimming and shaping plants. These tools are designed to selectively remove branches, stems, or foliage from plants to improve their health, appearance, and productivity."
        , image: pruning
    }

        , {
        title: "Harvesters"
        , content: "Harvesters are agricultural machines specifically designed for efficient and mechanized harvesting of crops. They are used to remove mature crops from the fields, separate them from the plant or stalk, and gather them for further processing or storage."
        , image: harvesters
    }

        , {
        title: "Sickles or Harvest Knives"
        , content: "Sickles are traditional hand-held agricultural tools used for cutting or harvesting crops such as grains, grasses, or small vegetation. They consist of a curved or crescent-shaped blade attached to a handle, allowing the user to swing and cut through plants with a sweeping motion."
        , image: sickles
    }

        , {
        title: "Threshers"
        , content: "Threshers are agricultural machines used to separate the edible grain or seed from the harvested crop's stalks or husks. They play a vital role in the post-harvest processing of crops, especially cereal grains like wheat, rice, maize, and barley."
        , image: thresher
    }

        , {
        title: "Winnowers"
        , content: "Winnowers are agricultural machines used to separate grain or seeds from unwanted debris such as chaff, husks, straw, or dirt. They are an essential tool in the post-harvest processing of crops, particularly cereal grains like wheat, rice, millet, or barley."
        , image: winnowers
    }

        , {
        title: "Grain Dryers"
        , content: "Grain dryers are agricultural machines used to remove moisture from freshly harvested grains, ensuring their safe storage and preventing spoilage. They play a crucial role in the post-harvest processing of crops, especially cereal grains like wheat, corn, rice, and barley."
        , image: graindryer
    }

        , {
        title: "Milking Machines"
        , content: "Milking machines are mechanical devices used to extract milk from dairy animals, primarily cows, efficiently and hygienically. They have revolutionized the milking process, replacing manual milking methods and reducing the labor-intensive nature of dairy farming."
        , image: milkingmachine
    }
    ]
    return (
        <>
            <h3 style={{ marginTop: "20px" }}>Product/Services we offer are...</h3>
            <section style={{ width: "80%", margin: "0 auto" }}>

                {
                    productarray && productarray.map((item, index) => {
                        return (
                            <div key={index} className="products-div">
                                <div className="row" >
                                    <div className="col-lg-8">
                                        <h4 className="text-primary" style={{ marginLeft: "3px" }}>{item.title}</h4>
                                        <p style={{ marginLeft: "5px" }}>
                                            {item.content}
                                        </p>
                                    </div>
                                    <div className="col-lg-2">
                                        <img src={item.image} style={{
                                            width: "120px", marginTop: "0px", marginLeft: "150px",
                                            borderRadius: "10px"
                                        }} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }



            </section>

            <p className="text-danger">And many more...</p>

        </>
    )
}

export default Products;