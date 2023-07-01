import React from "react";
import prime_minister from "../asset/PM_Banner.jpg";
import farms_machinery from "../asset/farms1.png";
import kisancall from "../asset/kishan-call.png";
import doubling_income from "../asset/doubling_farmers.png";
import hand_icon from "../asset/hands-icon.png";
import warming_icon from "../asset/warming-icon.png";
import nutritious_icon from "../asset/nutritious-icon.png";
import market_icon from "../asset/market-icon.png";


const Home = () => {
    return (
        <>
            <img src={prime_minister} />
            <div className="col-lg-12 homepagekisannavbar">
                <div className="row">
                    <div className="col-lg-4 ">
                        <img src={farms_machinery} className="farmsimg" />
                        <section>
                            <b>FARMS MACHINERY SOLUTIONS</b>
                        </section>
                    </div>
                    <div className="col-lg-4 secondkisannav">
                        <img src={kisancall} className="kisancallimg" />
                        <section>
                            <p><b>KISAN CALL CENTER</b></p>
                            <p><b>Dial : 011202834</b></p>
                        </section>
                    </div>
                    <div className="col-lg-4 ">
                        <img src={doubling_income} className="doubling_farmers_img" />
                        <section>
                            <b>DOUBLING OF FARMERS INCOME</b>
                        </section>
                    </div>
                </div>
            </div>

            <section className="Priorities">

                <h3 className="mt-5">
                    Our Priorities
                </h3>
                <div className="col-lg-10 mx-auto text-center">
                    <div className="row mt-3 justify-content-center">
                        <div className="col-lg-2">
                            <img src={hand_icon} />
                            <p>Advancing Racial Justice,
                                Equity, and Opportunity</p>
                        </div>
                        <div className="col-lg-2">
                            <img src={warming_icon} />
                            <p>Addressing
                                Climate Change</p>
                        </div>
                        <div className="col-lg-2">
                            <img src={nutritious_icon} />
                            <p>Tackling Food and
                                Nutrition Insecurity</p>
                        </div>
                        <div className="col-lg-2">
                            <img src={market_icon} />
                            <p>More, Better, and New Market Opportunities</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Home;