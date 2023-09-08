import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./SocialFollow";
import Socilfollow from './SocialFollow';
import IngrediantOfMonth from './IngrediantOfMonth';
import Blog from './Blog';
import Footer from './Footer';
import './css/News.css';
import { useNavigate } from 'react-router-dom';
import './css/all.css';
import "react-bootstrap/carousel"; // requires a loader  
import Carousel from 'react-bootstrap/Carousel';
import './css/Carving.css';
import './carousel.js';



const CarvingCarousle = () => {
  const [viewtoShow, setViewToShow] = useState([]);
  const [RecipeName, setname] = useState("");



  const navigate = useNavigate();
  const contributorPage = () => {
    // route to contributorPage  

    navigate('/ContributorPage');
  };

  const registrationPage = () => {
    // route to contributorPage  

    navigate('/RegistrationPage');
  };

  const recipePage = (e) => {
    localStorage.setItem('recipeId', e); // stores recipeid

    // route to recipe page

    navigate('/recipePage');
  };




  useEffect(() => {
    if (
      viewtoShow.length === 0
    )
      getRecipes()

  });
  const getRecipes = () => {
    fetch("http://localhost:3000/recipes"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setViewToShow(result.data)

        },
        (error) => {
          console.log(error, 'error');
        }
      );
  };
  var result;
  const getRecipeswithfilter = () => {

    result = viewtoShow?.filter(function (el) {
      return el.RecipeName.includes(RecipeName)
    }

    );
  }


  console.log('result', result)


  return <>



    <><><Socilfollow>
    </Socilfollow>
      <nav className="navbar navbar-expand-sm  mb-3">
        <a className="navbar-brand p-2 " href=" ">
          <img src="images/logo.gif" alt="Logo" style={{ width: "150px" }} />
        </a>
        <div className="input-group mb-3 inputsearch">
          <input type="text" className="form-control my-4 p-4" placeholder="Search Recipe" onChange={(e) => setname(e.target.value)} />
          <div className="input-group-append">
            <button className="btn btn-rounded text-white btn-lg my-4 pr-2 searchbtn" type="button"  onClick={getRecipeswithfilter}><b>Search</b></button>
          </div>
        </div>
        <ul className="navbar-nav mr-5  ">
          <li className="nav-item"><a className="nav-link blog " href=" "><b>Blog</b></a></li>
          <li className="nav-item"><a className="nav-link" href=" " onClick={() => registrationPage()}><b>Login/Register</b></a></li>

        </ul>
      </nav>
    </><Carousel>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "500px" }}
            className="d-block "
            src="images/amanda-lim-bXnZ5zCaQNI-unsplash.jpg"
            alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "500px" }}
            className="d-block "
            src="images/amanda-lim-bXnZ5zCaQNI-unsplash.jpg"
            alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "500px" }}
            className="d-block "
            src="images/amanda-lim-bXnZ5zCaQNI-unsplash.jpg"
            alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel><>
        <div className="container ">
          <h1 className="m-0">What are you carving for ?</h1>
        </div>
        <div className="container mt-3 mb-5">
          <div className="row">
            <div className="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">
              {viewtoShow.map((data, index) => (

                <div className="MultiCarousel-inner" onClick={() => { recipePage(data.RecipeId) }}>

                  <div className="item">
                    <div className="pad15">
                      <a href=" "><img src={data.ImagePath} alt="loading" className="img-fluid" /></a>
                      <div className="overlay">
                        <div className="text text-white"><a className="unstyle" href=" "><p className="mt-5 text-white" onClick={() => { recipePage(index) }}><strong>{data.RecipeName} </strong></p></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button className="btn  btn-lg leftLst"><span class="far fa-arrow-alt-circle-left fa-3x rounded-circle "></span></button>
              <button className="btn  btn-lg rightLst"><span class="far fa-arrow-alt-circle-right fa-3x rounded-circle "></span></button>
            </div>

          </div>

        </div>


      </><IngrediantOfMonth /><Blog /><div className="container">
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
            <div data-role="page" id="contributor" className="user">
              <div className="clearfix">
                <p className=" float-left align-items-start text-white text-center m-5">we got recipe on you own</p>
              </div>
              <div className="text-center">
                <button id="contributorbtn" className="btn btn-lg " type="button" onClick={() => contributorPage()}
                ><b>Become a contributor</b></button>
              </div>
              <div className="clearfix">
                <p className="clear-flex float-right  text-white  m-5">Let the world test it too</p>
              </div>

            </div>

          </div>
        </div>
        
      </div><Footer /></>

  </>


};

export default CarvingCarousle;
