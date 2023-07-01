import React from "react";
import aboutimg from "../asset/aboutimg.jpg";
import cartoon from "../asset/cartton-img-2.avif";
import farms1 from "../asset/farms1.png";
import kisan_call from "../asset/kishan-call.png";
import double from "../asset/doubling_farmers.png";
import shri_narendera_singh from "../asset/shri-narendra-singh-tomar.jpg";
import sushri from "../asset/sushri-shobha-karandlaje.jpg";
import kailash from "../asset/shri-kailash-choudhary.jpg";
import agriculture from "../asset/agriculture-img-1.png"


const About = () => {
    return (
        <>
            <img src={aboutimg} style={{ height: "130px", width: "100%" }} />
            <div className="row aboutrow">

                <div className="col-lg-6 ">
                    <h4 className="mt-4">About Us</h4>
                    <p style={{ "text-align": "left", marginLeft: "23px" }}>The Department of Agriculture & Farmers Welfare
                        is organized into 28 Divisions and has five attached offices and twenty-one
                        subordinate offices which are spread across the country for coordination with state level
                        agencies and implementation of Central Sector Schemes in their respective fields. Further,
                        one Public Sector Undertakings, nine autonomous bodies, ten national level cooperative organizations and
                        two authorities are functioning under the administrative control of the Department.
                    </p>
                </div>
                <div className="col-lg-6">
                    <img src={cartoon} style={{ width: "700px", height: "300px", marginTop: "50px", borderRadius: "5px" }} />
                </div>
            </div>

            <div className="col-lg-12 ">
                <div className="row">
                    <div className="col-lg-4 about-farm">
                        <img src={farms1} className="farmsimg" />
                        <section>
                            <b>FARMS MACHINERY SOLUTIONS</b>
                        </section>
                    </div>
                    <div className="col-lg-4 about-kisan">
                        <img src={kisan_call} className="kisancallimg" />
                        <section>
                            <p><b>KISAN CALL CENTER</b></p>
                            <p><b>Dial : 011202834</b></p>
                        </section>
                    </div>
                    <div className="col-lg-4 about-doubling">
                        <img src={double} className="doubling_farmers_img" />
                        <section>
                            <b>DOUBLING OF FARMERS INCOME</b>
                        </section>
                    </div>
                </div>
            </div>

            <div className="row" style={{ marginTop: "100px" }}>

                <div className="col-lg-6">
                    <section >
                        <h4 style={{ marginBottom: "20px" }}>Our Agricultural Leadership</h4>
                        <img src={shri_narendera_singh} className="minister-img" />
                        <p><b>Shri Narendra Singh Tomar</b></p>
                        <p>Hon'ble Minister of Agriculture & Farmers Welfare</p>
                        <div className="row mt-5">
                            <div className="col-lg-6">
                                <img src={sushri} className="minister-img" />
                                <p><b>Sushri Shobha Karandlaje</b></p>
                                <p>Hon'ble Minister of state</p>
                            </div>
                            <div className="col-lg-6">
                                <img src={kailash} className="minister-img" />
                                <p><b>Shri Kailash Choudhary</b></p>
                                <p>Hon'ble Minister of state</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-lg-6">
                    <img src={agriculture} style={{ width: "400px", marginTop: "40px" }} />
                </div>
            </div>
        </>
    )
}

export default About;