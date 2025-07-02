import { Link } from "react-scroll";
import React from "react";
export default function HeroSection(){
    return (
        <section id ="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey I'm Victoria</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Web Design & Mobile</span> {" "}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section--description">
                    👋 I am passionate Front-End Developer with a creative edge and a strong foundation in web & mobile app development. From building autism-friendly task apps to secure chat platforms, I bring ideas to life with clean, user-centered code.
                        <br/> Feel free to explore my portfolio and get in touch with me.
                    </p>
                </div>
                <img src="./img/arrow.gif" alt="loading..."/>
                <a className="btn btn-primary" href="https://www.linkedin.com/in/victoria-guzman-link-now/" target="_blank" rel="noreferrer">
                Get in Touch</a>
            </div>
            <div className="hero--section--img">
                <img src="./img/purple-heropic.png" alt="Hero Section"/>
            </div>
        </section>

    );
}