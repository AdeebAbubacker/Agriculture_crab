import React from "react";
import customer_support from "../asset/customer-support.webp";
import { faComment, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Contactus = () => {
    return (
        <>
            <div className="row" >
                <div className="col-lg-6">
                    <h4 className="mt-5">Get in touch with us</h4>
                    <p>Want to get touch? We'd love to hear from you.Here's how you can match us.

                    </p>
                    <div
                        style={{
                            backgroundColor: "rgb(110 144 255)", width: "400px", height: "100px", marginTop: "140px",
                            marginLeft: "220px", borderRadius: "10px", boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.5)",
                            display: "flex", alignItems: "center"
                            , flexDirection: "column", justifyContent: "center"
                        }}>
                        <FontAwesomeIcon icon={faPhone} bounce size="xl" style={{ color: "rgb(6 63 249)"}} />
                        Talk to our Department
                        <p>+91 8848055653</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <img src={customer_support} style={{ width: "250px" }} />
                    <div
                        style={{
                            backgroundColor: "#3ca3be", width: "400px", height: "100px",
                            marginLeft: "20px", borderRadius: "10px", boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.5)",
                            display: "flex", alignItems: "center"
                            , flexDirection: "column", justifyContent: "center"
                        }}>
                        <FontAwesomeIcon icon={faComment} beat size="xl" style={{ color: "#d7d8da", }} />
                        Chatsupport
                        <p>we are here to support don't worry</p>
                    </div>
                </div>


                <section style={{ marginTop: "100px", marginBottom: "100px" }}>
                    <div className="col-lg-7" style={{ marginLeft: "200px" }}>
                        <div className="card ">
                            <div className="card-header my-header" style={{
                                backgroundColor: "rgb(2 0 8)",
                                color: "white"
                            }}>Farmers' Enquiry Support </div>
                            <div className="card-body">
                                <div className="row">

                                    {/* left side */}
                                    <div className="col-lg-6">

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <p>Name:</p>
                                            </div>
                                            <div className="col-lg-8">
                                                <p><input type="text" className="form-control" placeholder="Enter your name" /></p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <p>Farm Name:</p>
                                            </div>
                                            <div className="col-lg-8">
                                                <p><input type="text" className="form-control" placeholder="Enter your farm name" /></p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <p>Contact Number:</p>
                                            </div>
                                            <div className="col-lg-8">
                                                <p><input type="text" className="form-control" placeholder="Enter your contact number" /></p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <p>Email:</p>
                                            </div>
                                            <div className="col-lg-8">
                                                <p><input type="email" className="form-control" placeholder="Enter your email address" /></p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-4">
                                                <p>Location:</p>
                                            </div>
                                            <div className="col-lg-8">
                                                <p><input type="text" className="form-control" placeholder="Enter your location" /></p>
                                            </div>
                                        </div>




                                        {/* first left side end */}
                                    </div>


                                    <div className="col-lg-6">

                                        <div className="row">
                                            <div className="col-lg-5">
                                                <p>Enquiry Type:</p>
                                            </div>
                                            <div className="col-lg-7">
                                                <p>
                                                    <select className="form-control" id="enquiry-type">
                                                        <option>Select an enquiry type</option>
                                                        <option>Crop-related issues</option>
                                                        <option>Livestock-related issues</option>
                                                        <option>Agricultural equipment</option>
                                                        <option>Soil and fertilizers</option>
                                                        <option>Pests and diseases</option>
                                                        <option>Market and prices</option>
                                                        <option>Government schemes and subsidies</option>
                                                        <option>Other</option>
                                                    </select>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-5">
                                                <p>Farm Size(in acres/hectares):</p>
                                            </div>
                                            <div className="col-lg-7">
                                                <p><input type="text" className="form-control" placeholder="Enter your farm size" /></p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-5">
                                                <p>Current crops or livestock:</p>
                                            </div>
                                            <div className="col-lg-7">
                                                <p><input type="text" className="form-control" placeholder="Enter your current crops or livestock" /></p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-5">
                                                <p>Preferred method of contact:</p>
                                            </div>
                                            <div className="col-lg-7">
                                                <p><input type="text" className="form-control" placeholder="Enter your preferred method of contact" /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="submit-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}

export default Contactus;