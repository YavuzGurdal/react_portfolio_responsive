import React from 'react'
import '../scss/main.css'
//import { aboutMeData } from '../../data'

//import Fade from 'react-reveal/Fade';
//import Zoom from 'react-reveal/Zoom';
//import Slide from 'react-reveal/Slide';
//import Bounce from 'react-reveal/Bounce';

function MyWorks
    () {
    return (
        <body>
            <main id="work">
                <h1 className="lg-heading">
                    My <span className="text-secondary">Work</span>
                    {/* <!-- soyadin farkli renkte olmasi icin bu sekilde span tag'leri arasina yaziyorum --> */}
                </h1>
                <h2 className="sm-heading">
                    Check out some of my projects...
                </h2>

                <div className="projects">
                    <div className="item">
                        <a href="#!">
                            <img src="images/projects/project1.jpg" alt="Project1" />
                        </a>
                        <a href="#!" className="btn-light"> <i className="fas fa-eye"></i> Project </a>
                        <a href="#!" className="btn-dark">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>

                    <div className="item">
                        <a href="#!">
                            <img src="images/projects/project2.jpg" alt="Project2" />
                        </a>
                        <a href="#!" className="btn-light"> <i className="fas fa-eye"></i> Project </a>
                        <a href="#!" className="btn-dark">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <div className="item">
                        <a href="#!">
                            <img src="images/projects/project3.jpg" alt="Project3" />
                        </a>
                        <a href="#!" className="btn-light"> <i className="fas fa-eye"></i> Project </a>
                        <a href="#!" className="btn-dark">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <div className="item">
                        <a href="#!">
                            <img src="images/projects/project4.jpg" alt="Project4" />
                        </a>
                        <a href="#!" className="btn-light"> <i className="fas fa-eye"></i> Project </a>
                        <a href="#!" className="btn-dark">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>
                    <div className="item">
                        <div style={{ overflow: 'hidden' }}>
                            <a href="#!">
                                <img src="images/projects/project5.jpg" alt="Project5" />
                            </a>
                        </div>
                        <a href="#!" className="btn-light"> <i className="fas fa-eye"></i> Project </a>
                        <a href="#!" className="btn-dark">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>

                    {/* <!-- Card --> /}
                    <div className="card card-image"
                        style={{ overflow: 'hidden' }}>

                        <div style={{ backgroundImage: "url(images/projects/project4.jpg)", backgroundSize: 'cover', width: '100%', height: '100%', top: '0', right: '0', overflow: 'hidden' }}>

                            {/<!-- Content -->  /}
                            <div className="imageBox text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4" >
                                <div className='imageBox'>
                                    <h5 className="pink-text"><i className="fas fa-chart-pie"></i> Marketing</h5>
                                    <h3 className="card-title pt-2"><strong>This is the card title</strong></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                                orum!.</p>
                                    <a href="#!" className="btn-light"><i className="fas fa-clone left"></i> View project</a>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/ <!-- Card --> */}

                </div>
            </main>

            <footer id="main-footer">
                Copyright &copy; 2020
            </footer>
        </body >
    )
}

export default MyWorks

