import { Link } from "react-scroll";
import React from "react";
export default function HeroSection(){
    return (
        <section id ="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey I'm Victoria</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Web Design</span> {" "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section--description">
                    As a Front-end Developer, I specialize in creating responsive and visually appealing web interfaces using HTML, CSS, and JavaScript. I'm passionate about designing intuitive user experiences that seamlessly blend creativity and functionality. With a keen eye for detail and a dedication to staying updated with the latest industry trends, I strive to deliver high-quality solutions that exceed client expectations.
                        <br/> Feel free to explore my portfolio and get in touch with me.
                    </p>
                </div>
                <img src="./img/arrow.gif" alt="loading..."/>
                <a className="btn btn-primary" href="https://www.linkedin.com/in/victoria-guzman-link-now/" target="_blank" rel="noreferrer">
                Get in Touch</a>
            </div>
            <div className="hero--section--img">
                <img src="./img/Hero-img.png" alt="Hero Section"/>
            </div>
        </section>

    );
}