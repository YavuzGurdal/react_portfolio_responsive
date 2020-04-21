import React from 'react'
import '../scss/main.css'
import { aboutMeData } from '../../data'

function AboutMe() {
    return (
        <body>
            <main id="about">

                <h1 className="lg-heading">
                    About <span className="text-secondary">Me</span>
                    {/*<!-- soyadin farkli renkte olmasi icin bu sekilde span tag'leri arasina yaziyorum -->*/}
                </h1>
                <h2 className="sm-heading">
                    Let me tell you a few things...
                </h2>

                <div className="about-info">
                    <img
                        src="/images/portrait_small.jpg"
                        alt="Yavuz Gürdal"
                        className="bio-image"
                    />

                    <div className="bio">
                        <h3 className="text-secondary">BIO</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
                            cumque, maiores impedit ad vero, vitae aliquam dolores voluptatem
                            natus porro sed dolor facilis suscipit eum aliquid quia illo,
                            dolorem repudiandae!
                        </p>
                    </div>

                    {

                        aboutMeData.aboutMeDivBox.map((item, index) =>

                            <div key={index} className={item.divClassName}>
                                <h3 className={item.h3ClassName}>{item.h3Title}</h3>
                                <h6>{item.h6Title}</h6>
                                <p>{item.pText}</p>
                            </div>



                            // <h6
                            //     key={index}
                            //     className="port-cat"
                            //     onClick={() => this.clickHandler(item)} // burasi onemli dakika 1.30 da aciklamasi
                            // >
                            //     {item.toLocaleUpperCase()}
                            // </h6>
                        )

                    }

                    {/*<div className="bio">
                        <h3 className="text-secondary">BIO</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
                            cumque, maiores impedit ad vero, vitae aliquam dolores voluptatem
                            natus porro sed dolor facilis suscipit eum aliquid quia illo,
                            dolorem repudiandae!
                        </p>
                    </div>

                    <div className="job job-1">
                        <h3>123 Webshop</h3>
                        <h6>Lorem, ipsum dolor.</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                            dignissimos optio quasi sed error, tempora veritatis vel distinctio!
                            Provident, ea.
                        </p>
                    </div>
                    <div className="job job-2">
                        <h3>Designer</h3>
                        <h6>Lorem ipsum dolor sit amet.</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                            dignissimos optio quasi sed error, tempora veritatis vel distinctio!
                            Provident, ea.
                        </p>
                    </div>
                    <div className="job job-3">
                        <h3>react developer</h3>
                        <h6>Lorem ipsum dolor sit.</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                            dignissimos optio quasi sed error, tempora veritatis vel distinctio!
                            Provident, ea.
                        </p>
                     </div>*/}
                </div>
            </main>

            <footer id="main-footer">
                Copyright &copy; 2020
            </footer>
        </body>
    )
}

export default AboutMe
