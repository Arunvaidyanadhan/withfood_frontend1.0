import React, { useState, useEffect } from 'react';
import "./SocialFollow";
import SocialFollow from './SocialFollow';
import "./Table.css";
import TableColor from './TableColor';
import axios from 'axios';
import Footer from './Footer';

const RecipePage = () => {
  const [post, setPost] = useState(null);
  const [ingredientDetails, setingredientDetails] = useState(null);
  const [swappableDetails, setswappableDetails] = useState(null);

  var Recipe_Id = localStorage.getItem('recipeId');

  useEffect(() => {
    if (
      post === undefined || post === null
    )
      getRecipesById();

  });

  useEffect(() => {
    if (
      ingredientDetails === undefined || ingredientDetails === null
    )
      getIngredientsById();

  });

  useEffect(() => {
    if (
      swappableDetails === undefined || swappableDetails === null
    )
      getSwappablesById();

  });

  const getRecipesById = () => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/recipeById',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: {},
      params: {
        "Recipe_Id": Recipe_Id,
      }
    })
      .then(res => {
        setPost(res.data.data)


      })
  };

  var recipe;
  if (post !== undefined && post !== null) {
    recipe = post[0];
  }
  if (recipe !== undefined && recipe !== null) {
    var direction = recipe.Steps_Tips.split('.')
    var tips = recipe.Tips.split(',')
  }

  const getIngredientsById = () => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/ingredientsByRecipeId',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: {},
      params: {
        "Recipe_Id": Recipe_Id,
      }
    })
      .then(res => {
        setingredientDetails(res.data.data)
      })
  };


  const getSwappablesById = () => {

    axios({
      method: 'GET',
      url: 'http://localhost:3000/swappablesByRecipeId',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: {},
      params: {
        "Recipe_Id": Recipe_Id,
      }
    })
      .then(res => {
        setswappableDetails(res.data.data)


      })
  };

  const OptionalIngredients = ingredientDetails?.filter(function (data, index) {

    return data.IsOptional === '1';
  })
  const nonOptional = ingredientDetails?.filter(function (data) {
    return data.IsOptional !== "1";
  })
  const mustIngredients = nonOptional?.filter(function (data) {
    return data.IsSwappable === "0";
  })

  const switchIngredient = ingredientDetails?.filter(function (data) {
    return data.IsSwappable === '1';
  })

  if (mustIngredients?.length > 10) {
    var HalfIng = mustIngredients.length / 2;
    for (var r = 0; r < mustIngredients[HalfIng]; r++) {
      var HalfMustIngredients = [];
      HalfMustIngredients.push(mustIngredients[r])
    }
    for (var s = HalfIng; s < mustIngredients.length; s++) {
      var secondMustIngredients = [];
      secondMustIngredients.push(mustIngredients[s])
    }
  }

  return (

    <><SocialFollow />
    <br></br>
    <br></br>
    <div className="container ">

      <h1 className="text-center recipeheading ">{recipe ? recipe.RecipeName : 'try again'}</h1>
    </div><div className="container">
        <div className="row justify-content-center ">
          <div className="col-2">
            <span className="text menudetail1" style={{ fontSize: "15px", color: " #ff5500" }}><img className="img-fluid" src="images/cuisine.png" alt="asian_cusine" style={{ width: "60px", height: "auto" }} /><b>{recipe ? recipe.Cousine : ''}</b></span>
          </div>
          <div className="col-2">
            <span className="text menudetail1" style={{ fontSize: "15px", color: " #ff5500" }}><img className="img-fluid" src="images/course_480.png" alt="asian_cusine" style={{ width: "60px", height: "auto" }} /><b>{recipe ? recipe.Course : ''}</b></span>
          </div>
          <div className="col-2">
            <span className="text menudetail1" style={{ fontSize: "15px", color: " #ff5500" }}><img className="img-fluid" src="images/time.png" alt="time-dur" style={{ width: "60px", height: "auto" }} /><b>{recipe ? recipe.Duration : ''}{'Min'}</b></span>
          </div>
          <div className="col-2">

            <span className="text menudetail1" style={{ fontSize: "15px", color: " #ff5500" }}><img className="img-fluid" src="images/diet.png" alt="asian_cusine" style={{ width: "60px", height: "auto" }} /><b>{recipe ? recipe.RecipeType : ''}</b></span>
          </div>
          <div className="col-2 mt-2">

            <span style={{ color: " #ff5500" }} className="text menudetail1 "><i style={{ fontSize: "40px", color: " #ffdb00" }} class="fa-solid fa-heart"></i><b>{recipe ? recipe.Likes : ''}</b></span>
          </div>
        </div>
      </div>
      {/* image */}
      <div class="container recipeimage">
        <img className="img-fluid recipe_image_border" src={recipe ? recipe.ImagePath : 'loading'} alt="loading" style={{ width: "100%", height: "400px", borderRadius: "15px" }} />
      </div>      <div className="container mb-2">

        <h3>Ingredient</h3>
      </div><div class="container mb-5">
        <div class="ingredients " style={{ width: "100%", height: "auto" }}>
          <div class="container  ">
            <div class="col-md-12 row">
              <div className='col-md-4 '>
                <div className='container '>
                  {switchIngredient?.map((data, index) => (

                    <fieldset className='border border-white'>
                      <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" /></legend>

                      <div className='col p-2 ing_list_1 pr-2 d-flex  '>

                        <span className="mr-1">{data.IncredientsName}</span>
                        <span className="">

                          <select className="form-select1" aria-label="Default select example">
                            {swappableDetails?.map((item) => {
                              if (data.IncredientsName === item.ParentIncredientsName)
                                return (

                                  <option value={item.SwappableIngredientName}>{item.SwappableIngredientName}</option>
                                )
                                return <></>
                            })}
                            
                          </select>
                        </span>
                        <span className="ingredients_quantity">{data.Quantity}{data.Measurments}</span>
                      </div>
                    </fieldset>
                  ))}
                  {mustIngredients?.map((data, index) => {
                    if (index < 6)
                      return (

                        <fieldset className='border border-white'>
                          <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" /></legend>
                          <div className='col p-2 ing_list_2 pr-2 d-flex'>
                            <span className="">{data.IncredientsName}</span>
                            <span className=""></span>
                            <span className="ingredients_quantity">{data.Quantity}{data.Measurments}</span>
                          </div>
                        </fieldset>
                      )
                      return <></>
                  })}
                </div>
              </div>
              <div className='col-md-4 border border-warning border-right-0 border-left-0 border-top-0  border-bottom-0'>
                <div className='container'>
                  {mustIngredients?.map((data, index) => {
                    if (index > 6)
                      return (
                        <fieldset className='border border-white'>
                          <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" /></legend>
                          <div className='col p-2 ing_list_2 pr-2 d-flex'>
                            <span className="">{data.IncredientsName}</span>

                            <span className="ingredients_quantity">{data.Quantity}</span>
                          </div>
                        </fieldset>
                      )
                      return <></>
                  })}
                </div>
              </div>


              <div className='col-md-4 border border-warning border-right-0 border-left-0 border-top-0 border-bottom-0'>
                <div className='container'>


                  {OptionalIngredients?.map((data) => (

                    <fieldset className='border border-white'>
                      <legend className="position  w-auto"><input className="checkbox ml-1" type="checkbox" /></legend>
                      <div className='col p-2 ing_list_3 pr-2 d-flex'>

                        <span className="">{data.IncredientsName}</span>
                        <span className="ingredients_quantity">{data.Quantity}{data.Measurments}</span>
                      </div>
                    </fieldset>
                  ))}
                </div>
              </div>



            </div>
          </div>
          <TableColor />
        </div>
      </div><div className="container my-1">
        <div className="header">
          <h3 className="">Direction</h3>
        </div>
      </div>

      <div className="container ">
        {direction?.map((data, index) => (

          <div className="direction mt-3 p-3">
            <div className="container p-2 d-flex ">
              <div className=" col-lg-12 col-md-12 col-sm-12">
                <fieldset className="border  ">
                  <span><legend className=" discription_form float-none w-auto"> <input className="checkbox " type="checkbox" /></legend></span>

                  <span class="ingredients_item">{data}</span>
                </fieldset>


              </div>
            </div>

          </div>
        ))}
      </div><div className="container mt-3">
        
        <div className="header">
          <h3 className="">Expert Tips</h3>
        </div>
      </div>
      <div className="container">
        {tips?.map((data, index) => (

          <div className="Expert_Tips mt-3 p-3" style={{ width: "100%", height: "auto" }}>
            <span className="fas fa-gem" style={{ fontSize: "45px", color: "#fae564" }}></span>
            <span className=" ml-3">{data}</span>
          </div>
        ))}

      </div><div className="container mt-3">
        <div className="header">
          <h3 className="">Discussions</h3>
        </div>
      </div><div className="container">
        <div className="discussions mt-3 p-3" style={{ width: "100%", height: "auto" }}>
          <div>
            <span className="fas fa-comment-dots" style={{ fontSize: "45px", color: "#fae564" }}></span>
            <span className=" ml-3">Can I use whole chicken cut into smaller pieces bone in to cook this?</span>
          </div>

          <span className="fas fa-clipboard-check mt2" style={{ fontSize: "45px", color: "#fae564" }}></span>
          <span className=" ml-3">Can I use whole chicken cut into smaller pieces bone in to cook this?</span>
        </div>
      </div><Footer /></>
  )
}
export default RecipePage;