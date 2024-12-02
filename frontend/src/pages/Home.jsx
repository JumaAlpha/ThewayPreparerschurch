import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Include Bootstrap JS
import AOS from "aos"; // Import AOS library for animations
import "aos/dist/aos.css"; // AOS styles

const Home = () => {
    const [counters, setCounters] = useState({
        people: 0,
        volunteers: 0,
        visitors: 0,
        sermons: 0,
    });

    useEffect(() => {
        // Initialize AOS for scroll animations
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            const section = document.getElementById("section-two");
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.5;

            if (sectionPosition < screenPosition) {
                animateCounters();
                window.removeEventListener("scroll", scrollListener); // Prevent multiple animations
            }
        };

        window.addEventListener("scroll", scrollListener);

        return () => window.removeEventListener("scroll", scrollListener);
    }, []);

    const animateCounters = () => {
        const targetValues = { people: 500, volunteers: 250, visitors: 100, sermons: 50 };
        const duration = 2000; // Animation duration in milliseconds
        const stepTime = 30; // Time between each increment

        Object.keys(targetValues).forEach((key) => {
            const step = Math.ceil(targetValues[key] / (duration / stepTime));
            let current = 0;

            const interval = setInterval(() => {
                current += step;
                if (current >= targetValues[key]) {
                    current = targetValues[key];
                    clearInterval(interval);
                }
                setCounters((prev) => ({ ...prev, [key]: current }));
            }, stepTime);
        });
    };

    useEffect(() => {
        const textElement = document.getElementById("typing-text");
        const text = "The Way Preparers Church";
        let index = 0;

        const typeEffect = setInterval(() => {
            if (index < text.length) {
                textElement.textContent += text[index];
                index++;
            } else {
                clearInterval(typeEffect);
            }
        }, 100);

        return () => clearInterval(typeEffect); // Cleanup the interval

    }, []);

    return (
        <div>
            {/* Section 1 */}
            <section className="section vh-100 d-flex align-items-center px-5" id="section-one">
                <div className="left-panel d-flex align-items-center">
                    <div>
                        <h1 id="typing-text" className="typing-text"></h1>
                    </div>
                </div>
                <div className="right-panel">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1661377118520-287ec60a32f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2h1cmNofGVufDB8MHwwfHx8MA%3D%3D"
                                    className="d-block w-100"
                                    alt="Slide 1"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2h1cmNofGVufDB8MHwwfHx8MA%3D%3D"
                                    className="d-block w-100"
                                    alt="Slide 2"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2h1cmNofGVufDB8MHwwfHx8MA%3D%3D"
                                    className="d-block w-100"
                                    alt="Slide 3"
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section id="section-two" className="section d-flex flex-column align-items-center justify-content-center vh-100" data-aos="fade-up" data-aos-once="false">
                <h2 className="section-title mb-4">Welcome to Our Church</h2>
                <div className="row mt-4 text-center">
                    <div className="col-md-3">
                        <div className="icon-container">
                            <i className="fas fa-users"></i>
                        </div>
                        <p className="icon-text">{counters.people}+ People Reached</p>
                    </div>
                    <div className="col-md-3">
                        <div className="icon-container">
                            <i className="fas fa-hands-helping"></i>
                        </div>
                        <p className="icon-text">{counters.volunteers}+ Volunteers</p>
                    </div>
                    <div className="col-md-3">
                        <div className="icon-container">
                            <i className="fas fa-globe"></i>
                        </div>
                        <p className="icon-text">{counters.visitors}+ Online Visitors</p>
                    </div>
                    <div className="col-md-3">
                        <div className="icon-container">
                            <i className="fas fa-book"></i>
                        </div>
                        <p className="icon-text">{counters.sermons}+ Sermons</p>
                    </div>
                </div>
            </section>

            <section
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')", // Ensure this URL points to an actual image
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "50vh",
                }}
                className="d-flex align-items-center justify-content-center text-white"
            >
                <h2 className="text-center">
                    "Faith is the bridge between where I am and where God is taking me."
                </h2>
            </section>


            {/* Section 4 - Testimonials */}
            <section className="section bg-light py-5" id="testimonials" data-aos="fade-up">
                <div className="container">
                    <h2 className="text-center mb-4">What People Are Saying</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <blockquote className="blockquote text-center">
                                <p>"This church has completely transformed my life."</p>
                                <footer className="blockquote-footer">John Doe</footer>
                            </blockquote>
                        </div>
                        <div className="col-md-4">
                            <blockquote className="blockquote text-center">
                                <p>"A place filled with love and kindness."</p>
                                <footer className="blockquote-footer">Jane Smith</footer>
                            </blockquote>
                        </div>
                        <div className="col-md-4">
                            <blockquote className="blockquote text-center">
                                <p>"I feel closer to God every time I visit."</p>
                                <footer className="blockquote-footer">Mark Johnson</footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 - Contact */}
            <section className="section bg-dark text-white py-5" id="contact" data-aos="fade-up">
                <div className="container text-center">
                    <h2>Contact Us</h2>
                    <p>We’d love to hear from you! Feel free to reach out.</p>
                    <p>Email: waypreparerschurch@yahoo.com | Phone: +254 725 854140</p>
                    <div className="map mt-4">
                        <iframe
                            title="Church Location"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d347.5114143012322!2d36.91165317744601!3d-1.2757358740127778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15f686a432f5%3A0x8bf71ddfdd371495!2sWay%20preparers%20church%20Head%20Qtrs!5e0!3m2!1sen!2ske!4v1733132526952!5m2!1sen!2ske"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
