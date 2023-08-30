import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./SocialFollow";
import Socilfollow from './SocialFollow';
import CarvingCarousle from './CarvingCarousle';
import IngrediantOfMonth from './IngrediantOfMonth';
import Blog from './Blog';
import SearchNavbar from './SearchNavbar';
import Footer from './Footer';
import './css/News.css';
import { useNavigate } from 'react-router-dom';
import './css/all.css';
import "react-bootstrap/carousel"; // requires a loader  
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {

  const navigate = useNavigate();
  const contributorPage = () => {
    // route to contributorPage  

    navigate('/ContributorPage');
  };





  var recipesResult;

  useEffect(() => {
    getRecipes();
  });

  const getRecipes = () => {
    fetch("http://localhost:8000/recipes"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          recipesResult = result.data;
          console.log('result',recipesResult)

        },
        (error) => {
          console.log(error, 'error');
        }
      );
  };


  if(recipesResult !== undefined) {
    console.log('result', recipesResult)

  }


  return (

    <><Socilfollow>
    </Socilfollow>
      <SearchNavbar>
      </SearchNavbar>
      <Carousel>
      <Carousel.Item>
        <img
       style={{width: "100%",height: "500px"}}
          className="d-block "
          src="images/amanda-lim-bXnZ5zCaQNI-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
       style={{width: "100%",height: "500px"}}
       className="d-block "
          src="images/amanda-lim-bXnZ5zCaQNI-unsplash.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
       style={{width: "100%",height: "500px"}}
       className="d-block "
          src="images/amanda-lim-bXnZ5zCaQNI-unsplash.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <CarvingCarousle>
      </CarvingCarousle>
      <IngrediantOfMonth />
      <Blog />
      <div className="container">
        <div className="row d-flex justify-content-around ">
          <div className="col-sm-12 col-md-6 col-lg-6 my-2   ">
            <div id="Newsletter" className="user ">
              <h3 className="text-center m-3">Sign Up for News letter</h3>
              <div className="input-group  justify-content-center">
                <input className="form-control form-control-lg ml-2 mr-2" type="text" value="" />
              </div>
              <div className="input-prepend  ">
                <div className="text-center m-3">
                  <button id="contributorbtn" className="btn btn-lg " type="button" href="#"><b>Subscribe</b></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 my-2">
            <div data-role="page" id="contributor" className="user" >
              <div className="clearfix" >
                <p className=" float-left align-items-start text-white text-center m-5">we got recipe on you own</p>
              </div>
              <div className="text-center">
                <button id="contributorbtn" className="btn btn-lg " type="button" onClick={() => contributorPage()}
                ><b>Become a contributor</b></button>
              </div>
              <div className="clearfix" >
                <p className="clear-flex float-right  text-white  m-5">Let the world test it too</p>
              </div>

            </div>

          </div>
        </div>
      </div>      <Footer /></>
  )


};

export default Home;
