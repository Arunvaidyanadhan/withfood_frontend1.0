import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./RecDetail.css"
import Socilfollow from './SocialFollow';
import Footer from "./Footer";
import "./Swappable.css"
import Select from 'react-select/creatable';
import axios from 'axios';
import { FaHamburger } from 'react-icons/fa';


const ContributorPage = () => {
  const [RecipeName, setname] = useState("");
  const [Duration, setDuration] = useState("");
  const [Cousine, setCousine] = useState("")
  const [Course, setCourse] = useState("")
  const [RecipeType, setRecipeType] = useState("")
  const [IncredientsName, setIncredientsName] = useState("")
  const [Quantity, setQuantity] = useState("")
  const [Measurments, setMeasurments] = useState("")
  const [IsOptional, setIsOptional] = useState(false)

  const [SwappableIncredient, setSwappableIncredient] = useState("")
  const [Swappable_Quantity, setSwappable_Quantity] = useState("")
  const [Swappable_Measurments, setSwappable_Measurments] = useState("")

  //alert





  const [file, setFile] = useState();

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  const [viewtoShow, setViewToShow] = useState([]);
  const [viewtoTips, setViewToTips] = useState([]);

  const [viewtoIng, setViewToIng] = useState(['Please Select']);
  const [viewtoSwapIng, setViewToSwapIng] = useState([]);
  const [swappableBody, setswappableBody] = useState([]);


  const [recipe_Id, setrecipe_Id] = useState({});

  const [ingredientDetails, setingredientDetails] = useState({});
  console.log(ingredientDetails)

  const [selectedOptions, setSelectedOptions] = useState([]);





  const handleMultiSelectChange = (selectedOptions) => {
    for (var p = 0; p < selectedOptions.length; p++) {
      const childing = selectedOptions[p].value;
      const parenting = SwappableIncredient;
      const qua = Swappable_Quantity;
      const meas = Swappable_Measurments;

      var addSwappableBody = {
        ParentIncredientsName: '',
        SwappableIngredientName: '',
        Measurments: '',
        Quantity: '',
        RecipeId: ''
      }

      Object.assign(addSwappableBody, {
        ParentIncredientsName: parenting,
        SwappableIngredientName: childing,
        Measurments: meas,
        Quantity: qua,
        RecipeId: ''
      });
    }
    const newIng = (dataIng) => [...dataIng, addSwappableBody];
    setswappableBody(newIng);


    setSelectedOptions(selectedOptions);

  };




  const handleOptionalChange = () => {
    setIsOptional(!IsOptional);
  };

  const uploadImage = async (e) => {
    const data = e;

    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.put(
        `http://localhost:3000//uploadimageById?Recipe_Id=${data}`,
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };
  // dropdown values
  const RecipeTypeValues = ['Please select', 'Veg', 'Non-veg', 'Vegan']
  const RecipeCourseValues = ['Please select', 'Starter', 'Main Course', 'dessert', 'others']
  const RecipeMeasurments = ['Please select', 'kg', 'grams', 'cup', 'spoon', 'nos']

  const swappableOptions = [
    { value: '', label: '', parent: '' },

  ];




  // submit to the server
  const handleSubmit = (e) => {


    let newArr = viewtoShow.map(function (val) {
      return Object.values(val)

    })
    const stepsToString = array => array.map(a => a.join(","))
    var str = stepsToString(newArr);
    let final = str.toString()
    // add steps code end
    let newTips = viewtoTips.map(function (tip) {
      return Object.values(tip)

    })
    const tipsToString = array => array.map(a => a.join(","))
    var strtip = tipsToString(newTips);
    let finaltips = strtip.toString()
    // add tips code end


    const body = {
      RecipeName: RecipeName,
      Duration: Duration,
      Cousine: Cousine,
      Course: Course,
      RecipeType: RecipeType,
      Steps_Tips: final,
      Tips: finaltips,

    };
    const optionsss = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }


    fetch('http://localhost:3000/recipe', optionsss)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => setrecipe_Id(data.data.insertId))
      .catch(error => console.log('error'));
  };



  const handleIngre = (e) => {

    var recId = e;
    var normalResult = [];
    var SwappableResult = [];
    normalResult = viewtoIng.map(function (data) {
      return {
        IncredientsName: data.ingredient, Measurments: data.measurments,
        IsOptional: data.isoptional, IsSwappable: true, RecipeId: recId, Quantity: data.quantity
      }
    })

    normalResult.shift()

    SwappableResult = swappableBody.map(function (data) {
      return {
        ParentIncredientsName: data.ParentIncredientsName, SwappableIngredientName: data.SwappableIngredientName,
        Quantity: data.Quantity, Measurments: data.Measurments, RecipeId: recId
      }
    })


    var options = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(normalResult)
    }


    fetch('http://localhost:3000/incredients', options)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong in ingredients...');
        }
      })
      .then(data => setingredientDetails(data))
      .catch(error => console.log('error'));


    var Swappableoptions = {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(SwappableResult)
    }

    fetch('http://localhost:3000/Subincredients', Swappableoptions)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          throw new Error('Something went wrong in sub ingredients...');
        }
      })
      .then(data => console.log(data))
      .catch(error => console.log('error'));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  // add & remove steps 

  useEffect(() => {
    if (
      typeof (recipe_Id) === "number"
    )
      handleIngre(recipe_Id);

  });

  useEffect(() => {
    if (
      typeof (recipe_Id) === "number"
    )
      uploadImage(recipe_Id)

  });
  const handleRemoveOption = (index) => {
    const rows = [...viewtoShow];
    rows.splice(index, 1);
    setViewToShow(rows);
  };

  const handleEditOption = (index) => {
    document.getElementById("add_steps").value = viewtoShow[index].step;
  };

  const handleAddOption = async (e) => {
    const Step = document.getElementById("add_steps").value;
    document.getElementById("add_steps").value = '';
    var txttostore = Step.replace(/\n/g, "</p>\n<p>");
    var mult = {
      step: ' ',
    };
    Object.assign(mult, {
      step: txttostore
    });
    const newData = (data) => [...data, mult];
    setViewToShow(newData);
  };

  const handletTipsOption = async (e) => {
    const Step = document.getElementById("add_steps").value;
    document.getElementById("add_steps").value = '';
    var txttostore = Step.replace(/\n/g, "</p>\n<p>");
    var mult = {
      step: ' ',
    };
    Object.assign(mult, {
      step: txttostore
    });
    const newData = (data) => [...data, mult];
    setViewToTips(newData);
  };

  const handleRemoveTips = (index) => {
    const rows = [...viewtoTips];
    rows.splice(index, 1);
    setViewToTips(rows);
  };

  const handleRemoveOpt_ing = (index) => {
    const rows = [...viewtoIng];
    rows.splice(index, 1);
    setViewToIng(rows);
  };

  const handleEditTips = (index) => {
    document.getElementById("add_steps").value = viewtoTips[index].step;
  };

  const handleOtherIngredient = async (e) => {
    var addI = {
      ingredient: '',
      quantity: '',
      measurments: '',
      isoptional: ''
    }
    Object.assign(addI, {
      ingredient: IncredientsName,
      quantity: Quantity,
      measurments: Measurments,
      isoptional: IsOptional
    });
    setIncredientsName('')
    setQuantity('')
    setMeasurments('')
    setIsOptional('')
    const newIng = (dataIng) => [...dataIng, addI];
    setViewToIng(newIng);

  };

  const handleSwappableIngredient = async (e) => {
    var addSI = {
      ingredient: '',
      quantity: '',
      measurments: '',
      isoptional: ''
    }
    Object.assign(addSI, {
      ingredient: SwappableIncredient,
      quantity: Swappable_Quantity,
      measurments: Swappable_Measurments,
      IsSwappable: true
    });
    const newIng = (dataIng) => [...dataIng, addSI];
    setViewToSwapIng(newIng);
  };

  return <>
    <Socilfollow />
    <div style={{ textAlign: 'center', color: 'orangered', fontSize: '2.5rem', padding: '0.5rem' }}>Add Recipe
   
    </div>
            
               
            
    <div style={{ display: 'flex', flexWrap: 'wrap', fontWeight: 'bold' }} className='container '>

      <div className="mb-2">
        <label className='mr-2'>Recipe Name</label>
      </div>
      <div >
        <input style={{ width: "600px" }} className=" form-control mb-2" type="text" value={RecipeName} onChange={(e) => setname(e.target.value)}
        />
      </div>
      <div className=" ml-3 mb-2">
        <label className='mr-2 mb-2'>Duration</label>
      </div>
      <div className="">
        <input style={{ width: "400px" }} className="form-control " type="text" value={Duration} onChange={(e) => setDuration(e.target.value)} />

      </div>
      <div> <span className='ml-2'>Min</span>
      </div>
      <div className="">
        <label className='mr-2 '>Cuisine</label>
      </div>
      <div >
        <input style={{ width: "600px" }} className=" form-control" type="text" value={Cousine} onChange={(e) => setCousine(e.target.value)} />
      </div>
      <div className="col-1">
        <label className='mr-2  pl-2'>Course</label>
      </div>
      <div className=" ml-3">
        <select className="form-select" aria-label="Default select example" value={Course} onChange={(e) => setCourse(e.target.value)}>
          {RecipeCourseValues.map((data) => (
            <option value={data}>{data}</option>
          ))}
        </select>
      </div>
      <div className="col-1">
        <label className='mr-2 pl-2'>Type</label>
      </div>
      <div className=" ml-3">
        <select className="form-select" aria-label="Default select example" value={RecipeType} onChange={(e) => setRecipeType(e.target.value)}>
          {RecipeTypeValues.map((data) => (

            <option value={data}>{data}</option>
          ))}
        </select>
      </div>

    </div>
    <div className='col container'>
      <label className="form-label" for="customFile"></label>
      <div></div>
      <input placeholder='please Image Upload' type="file" name="file" className="form-control form-control-sm" onChange={saveFile} />


    </div>


    <div className="container">
      <div className="row">
        <div className="col-lg-6 h-100">
          <fieldset className="border border-warning p-2">
            <legend className="float-none w-auto  p-1">All Ingredients</legend>
            <div>
              <h1> <FaHamburger


                size={20}
              />
                <span
                  style={{
                    color: 'orange',
                    paddingLeft: '1rem',
                    fontWeight: 100,
                    fontSize: '0.9rem',
                    fontFamily: ' Arial, Helvetica, sans-serif'
                  }}
                >
                  Please add the ingredient's from most priority to least one.

                </span></h1>
            </div>
            <label for="email" className="mr-sm-2"></label>
            <input type="email" className=" col-3" placeholder="Ingredients" value={IncredientsName} onChange={(e) => setIncredientsName(e.target.value)} />
            <label for="pwd" className="mr-sm-2"></label>
            <input type="text" className="col-2" placeholder="quantity" value={Quantity} onChange={(e) => setQuantity(e.target.value)} />
            <label for="pwd" className="mr-sm-2"></label>
            <select name="cars" className="custom-select col-2 mr-sm-2 ml-2" value={Measurments} onChange={(e) => setMeasurments(e.target.value)}>
              {RecipeMeasurments.map((data) => (
                <option value={data}>{data}</option>

              ))}
            </select>
            <label for="email" className="mr-sm-2 "></label>

            <input style={{ marginBottom: "-15px", }} className="  checkbox col-2 p-3 shadow-lg" id="opt_check" type="checkbox" value={IsOptional} checked={IsOptional}
              onChange={handleOptionalChange} />

            <button className="btn btn-secondary btn-sm ml-2" onClick={handleOtherIngredient}><span className="fas fa-plus-square" ></span></button>

            <h6>optional</h6>
            {viewtoIng.map((data, index) => (

              <div className="d-flex justify-content-between  mb-1">
                <div className="p-1 ">
                  <form className="form-inline" >
                    {data.ingredient !== undefined ? <input className="checkbox" type="checkbox" value={data.isoptional
                    } checked={data.isoptional
                    } /> : ''}

                    <p className="lead ">{data.ingredient !== undefined ? data.ingredient : ''}</p>
                  </form>
                </div>

                <div className="p-1 ">


                </div>
                <div className="p-1 ">
                  <span className=" lead fs-5"><b>{data.quantity !== undefined ? data.quantity : ''}{data.measurments !== undefined ? data.measurments
                    : ''}</b></span>
                  {data.ingredient !== undefined ? <button className="btn btn-secondary btn-sm ml-2" onClick={() => { handleRemoveOpt_ing(index) }}><span className="fas fa-window-close"></span></button> : ''}

                </div>
              </div>))}



          </fieldset>

        </div>
        <div className="col-lg-6">
          <fieldset className="box border border-warning p-2">
            <legend className="float-none w-auto  p-2">Swappable Ingredients</legend>
            <div className="form-inline">
              <label for="email" className="mr-sm-2"></label>
              <select className=" col-3" placeholder="Ingredients" value={SwappableIncredient} onChange={(e) => setSwappableIncredient(e.target.value)}>
                {viewtoIng.map((data) => (
                  <option value={data.ingredient}>{data.ingredient}</option>

                ))}
              </select>
              <label for="quantity" className="mr-sm-2"></label>
              <label for="pwd" className="mr-sm-2"></label>
              <input type="text" className="col-2" placeholder="quantity" value={Swappable_Quantity} onChange={(e) => setSwappable_Quantity(e.target.value)} />
              <label for="measurement" className="mr-sm-2"></label>
              <select name="measurments" className="custom-select  col-2 mr-sm-2 ml-2" value={Swappable_Measurments} onChange={(e) => setSwappable_Measurments(e.target.value)}>
                {RecipeMeasurments.map((data) => (
                  <option value={data}>{data}</option>

                ))}
              </select>
              <button className="btn btn-secondary btn-sm ml-2" onClick={handleSwappableIngredient}><span className="fas fa-plus-square" ></span></button>
            </div>

            {viewtoSwapIng.map((data, index) => (
              <div className="d-flex justify-content-between  mb-1">
                <div className="p-1 ">
                  <form className="form-inline" >

                    <p className="lead ">{data.ingredient}</p>

                  </form>
                </div>

                <div >
                  <Select
                    className="mx-5  mt-2  "
                    options={swappableOptions}
                    isMulti
                    isCreatable={true}
                    onChange={handleMultiSelectChange}
                    value={selectedOptions[data.ingredient]}
                  //value={selectedOptions[data.ingredient]}
                  />

                </div>
                <div className="p-1 ">
                  <span className=" lead fs-5"><b>{data.quantity}{data.measurments}</b></span>
                  <button className="btn btn-secondary btn-sm ml-2" onClick={() => { handleRemoveOpt_ing(index) }}><span className="fas fa-window-close"></span></button>
                </div>
              </div>))}




          </fieldset>

        </div>

      </div>
    </div>    <div className="container mt-2">
      <h3>Add Steps/Tips</h3>
      <div>
        <h1> <FaHamburger


          size={20}
        />
          <span
            style={{
              color: 'orange',
              paddingLeft: '1rem',
              fontWeight: 100,
              fontSize: '0.9rem',
              fontFamily: ' Arial, Helvetica, sans-serif'
            }}
          >
            Please use 'steps' button for add steps & use 'tips' button for add tips.

          </span></h1>
      </div>
    </div>
    <div className="container mt-3">
      <div className="d-flex justify-content-between  mb-1">
        <div className=" col-lg-9 col-md-9 col-sm-6 ">
          <input type="textarea" className="form-control mb-2 mr-sm-2 Swappable-input p-5  " placeholder="Add recipe preparation steps & tips" id="add_steps" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 p-5">
          <button className="btn btn-secondary btn-sm mr-2 " onClick={handletTipsOption}>Tips</button>
          <button className="btn btn-secondary btn-sm" onClick={handleAddOption}>Steps</button>
        </div>
      </div>
    </div>

    <div className="container mt-2">
      <h3>Direction</h3>
    </div>
    {viewtoShow.map((data, index) => (
      <div className="container mt-3">
        <div className="d-flex justify-content-between  mb-1">
          <div className=" col-lg-9 col-md-9 col-sm-6 ">
            <p className="step1 text-dark p-3">{data.step}
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 p-2">
            <button className="btn btn-secondary btn-sm mr-2" onClick={() => { handleRemoveOption(index) }}  ><span className="fas fa-window-close"></span></button>
            <button className="btn btn-secondary btn-sm  ml-2" onClick={() => { handleEditOption(index) }}><span className="fas fa-pencil-alt"></span></button>
          </div>
        </div>
      </div>
    ))}

    <div className="container mt-2">
      <h3>Tips</h3>
    </div>
    {viewtoTips.map((data, index) => (

      <div className="container mt-3">
        <div className="d-flex justify-content-between  mb-1">
          <div className=" col-lg-9 col-md-9 col-sm-6 ">
            <p className="step1 text-dark p-3">{data.step}</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 p-2">
            <button className="btn btn-secondary btn-sm mr-2" onClick={() => { handleRemoveTips(index) }}  ><span className="fas fa-window-close"></span></button>
            <button className="btn btn-secondary btn-sm  ml-2" onClick={() => { handleEditTips(index) }}><span className="fas fa-pencil-alt"></span></button>
          </div>
        </div>
      </div>
    ))}

    <div className="container">
      <p className="text-left text-dark">By clicking your are conforming that the recipe you submitting in your own and not copied or licensed fully or partially from someone or a company.you agree that non-compliance will result in removal of recipe and repeat offense will result in disableing of you account </p>
      <p className="text-left"></p>
      <div className="text-center">
        <button className="btn submit-btn" onClick={handleSubmit}

        ><span className="far fa-save"> Submit</span></button>
      </div>
    </div><Footer />

  </>
}


export default ContributorPage;