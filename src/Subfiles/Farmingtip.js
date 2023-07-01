import React from "react";
import irrigation from "../asset/irrigation.webp";
import soil_tip from "../asset/soil-tip.jpg";
import major_crops from "../asset/Major_crop_areas_India.png";
import soil_horizons from "../asset/Soil_Horizons.svg.png";
import irrigation_in_india from "../asset/Irrigation-in-India.jpg";
import fertiliser from "../asset/fertilizer-1.jpg";
import crop_diseases from "../asset/Crop-Diseases-1.jpeg";
import pests from "../asset/pests-1.jpg";
import succesfull_farmer from "../asset/successfull-farmer-1.jpg";


const Farmingtip = () => {
    return (
        <>
            <h4 style={{ marginTop: "20px" }} className="text-dark">Tips for Successful Farming –
                From Crop Selection to Harvesting</h4>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6" style={{ textAlign: "left" }}>
                        <p>In India, agriculture is one of the most significant fields.
                            We can't conceive how the world would be without agriculture.
                            Read through to find out the tips for a successful agricultural venture.</p>
                        <img src={irrigation} style={{ width: "400px", borderRadius: "2px" }} />
                        <p>Every living thing needs food, and we rely on plants and animals to provide it.
                            People began growing food in a limited area and utilised specific techniques for managing and improving it.
                            This practice of cultivating crops is called agriculture. </p>
                        <p>In India, agriculture is one of the most important fields.
                            We can't conceive how the world would be without agriculture.
                            It is critical to understand the significance of agricultural techniques in India.
                            Farmers are the world's agricultural industry's backbone. </p>

                        <h4 className="text-primary">Tips For Farmers </h4>
                        <p>How to select Crop</p>
                        <p>Crop selection is the most important component in crop farming success.
                            The following are some key crop selection factors:
                        </p>
                        <ul>
                            <li>The farm's location</li>
                            <li>Availability of land </li>
                            <li>Type of soil </li>
                            <li>Climate  </li>
                            <li>The amount of money you put in and how much you hope to get back </li>
                            <li>Demand on the market  </li>
                            <li>Availability and quality of water </li>
                            <li>Personal interests</li>
                        </ul>

                        <h4 className="text-primary">Tips for Soil Preparation:  </h4>
                        <p>Ploughing, levelling, and manuring are used to prepare the soil in which crops
                            will be produced. Crop development is influenced by a variety of factors, including
                            soil texture, compaction, cation exchange capacity, and organic matter concentration.
                            Some cultivation procedures, adding nutrients, utilising particular planting methods,
                            or applying ways to modify variables like soil temperature, moisture retention, or
                            compaction can all have an influence on soil characteristics.
                        </p>
                        <p>Also crop rotation is an important element of farming since
                            it relies on excellent, natural soil health.
                        </p>
                        <img src={soil_tip} width="300px" style={{ borderRadius: "2px" }} />
                        <h4 className="text-primary">Tip for seed selection</h4>
                        <p>For crop development, seed selection is critical.
                            A good seed must grow into a plant; otherwise,
                            we will not achieve the desired outcome, therefore
                            we must pick excellent and healthy seeds.
                            The following are characteristics of high-quality seed:
                        </p>
                        <ul>
                            <li> Increased genetic purity </li>
                            <li>Higher physical purity is required </li>
                            <li>Possession of good form, size, and colour, depending on variety requirements  </li>
                            <li>Better physicality and weight  </li>
                            <li>Increased germination (90 to 35 percent depending on the crop) </li>
                            <li>Better physiological vitality and endurance  </li>
                        </ul>

                        <h4 className="text-primary">Tips for Seed Sowing:   </h4>
                        <p>The key stage of sowing is the selection of high-quality crop strain seeds.
                            Seed sowing can be done by hand or with the help of seed drilling equipment.
                            Because of the high pricing of improved seeds, the majority of farmers are
                            unable to afford them.
                        </p>

                        <h4 className="text-primary">Tips for Irrigation: </h4>
                        <p>A good amount of irrigation at regular intervals is required for any
                            sustainable agricultural operation. The drip irrigation system is a new
                            way to get started. It becomes easy to supervise since it can be managed by a machine.
                        </p>
                        <p>Wells, ponds, lakes, canals, and dams are examples of water sources.
                            Water-logging and crop loss can result from over irrigation. Then there's the
                            issue of controlling the frequency and gap between subsequent irrigations.
                        </p>
                        <p>Any farm's drainage system determines the soil's compatibility with daily water use.
                            If you don't maintain your drainage systems on a regular basis, the consequences will be
                            less than ideal.
                        </p>

                        <h4 className="text-primary">Tips for Fertilisers/ Manures: </h4>
                        <p>Composting, mulching, and utilising bio-fertilisers are some examples of organic
                            practices that will assist encourage healthy crop development. Vermi-composting is
                            another great way to organically provide essential nutrients to the soil. Inorganic
                            fertiliser, Nitrogen fertiliser, and Phosphorus fertiliser are the different forms
                            of fertilisers. Agricultural waste, livestock manure, and municipal sludge are
                            examples of organic fertilisers.
                        </p>
                        <p>Nutrients are required for crops to grow and create yield. As a result, nutrients
                            must be provided at regular intervals. Manuring is the process of providing nutritional
                            additions, which might be in the form of natural manure or fertilisers.
                        </p>

                        <h4 className="text-primary">Tips for Weed Management </h4>
                        <p>Weeds are undesirable plants that grow in the middle of crops. Weeds are eliminated with
                            weedicides, by plucking them out by hand, and in some cases, during soil preparation.
                            Manual weeding (hand removal, pulling, and cutting), mowing, mechanical cultivation,
                            and thermal control are all techniques for managing weeds in organic farming (flaming).
                        </p>

                        <h4 className="text-primary">Tips for Pests and Diseases Management: </h4>
                        <p>Viruses, bacteria, fungus, and insects are major plant pests and diseases that severely
                            reduce plant yield. Pesticides and biocontrol agents can protect crops from a variety of
                            pests and illnesses. Insect and disease management in crops can be accomplished in a
                            variety of methods, including:
                        </p>
                        <ul>
                            <li>Encourage soil health </li>
                            <li>Select types that are resistant  </li>
                            <li>Plant at the appropriate location </li>
                            <li>Beneficial insects should be attracted  </li>
                            <li>Defend against pests  </li>
                            <li>Crop diversity preservation  </li>
                            <li>Pesticides are being used to combat pests </li>
                            <li>Pesticides that are organic </li>
                            <li>Crop rotation is important </li>
                            <li>Interplanting is a good idea </li>
                            <li>Floating row coverings should be used </li>
                        </ul>

                        <h4 className="text-primary">Tips for Harvesting Plants: </h4>
                        <p>Harvesting is the process of cutting and gathering the crop once it has reached maturity.
                            The following aspects are critical for harvest procedures: choosing the right harvest time
                            refers to the ripeness and maturity of the crop. Harvesting is best done early in the morning
                            or later in the evening, when temperatures are cooler. Manual harvesting is excellent for
                            fragile and high-value crops.
                        </p>

                        <h2 className="text-info"><u>Tips for Successful Agriculture: </u> </h2>
                        <p>Farmers may take a number of critical actions to help agriculture succeed, including:
                        </p>

                        <h4><i>1. Invest in top-of-the-line farming machinery.</i></h4>
                        <p>Without the proper machinery, the agricultural industry is incomplete.
                            You are not obligated to purchase machinery with the first offer they make to you.
                            It's always a smarter buy to scout the market for better prices.
                        </p>

                        <h4><i>2. Plant Early and Plant Wisely</i></h4>
                        <p>The most crucial aspect of the planting process is determining the best time to plant.
                            If your soil is ready before you start planting, it is the ideal method to utilise to
                            improve yields.
                        </p>

                        <h4><i>3. Climate, cropping patterns, and agricultural productivity concerns </i></h4>
                        <p>Cropping patterns that are based on climate and land capabilities are sustainable,
                            but market forces and farmers' expectations are driving unsustainable systems.
                        </p>

                        <h4><i>4. Recognize your intended audience. </i></h4>
                        <p>In most cases, there are several forms of farming and agribusiness to choose from.
                            Your focus or specialty, on the other hand, must be determined ahead of time as part
                            of your preparation.
                        </p>


                    </div>
                    <div className="col-lg-6">
                        <img src={major_crops}
                            style={{ width: "400px", borderRadius: "5px", marginTop: "5rem" }} />
                        <img src={soil_horizons}
                            style={{ width: "400px", borderRadius: "5px", marginTop: "26rem" }} />
                        <img src={irrigation_in_india}
                            style={{ width: "400px", borderRadius: "5px", marginTop: "22rem" }} />
                        <img src={fertiliser}
                            style={{ width: "400px", borderRadius: "5px", marginTop: "4rem" }} />
                        <img src={crop_diseases}
                            style={{ width: "400px", borderRadius: "5px", marginTop: "14rem" }} />
                        <img src={pests}
                            style={{ width: "400px", borderRadius: "5px", marginTop: "4rem" }} />
                        <img src={succesfull_farmer}
                            style={{ width: "400px", borderRadius: "5px", marginTop: "8rem" }} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Farmingtip;