import React from 'react';
import "./SocialFollow";
import SocialFollow from './SocialFollow';
import SearchNavbar from './SearchNavbar';
import RecipeHeading from './RecipeHeading';
import Recipeimage from './RecipeImage';
import IngredientTable from './IngredientTable';
import RecipeDirection from './RecipeDirection';
import ExpertTips from './ExpertTips';

import Discussions from './Discussions';
import Footer from './Footer';

class RecipePage extends React.Component {
  render() {
    return (
      <>
      <SocialFollow/>
      <SearchNavbar/>
      <RecipeHeading/>
      <Recipeimage/>
      <IngredientTable/>
      <RecipeDirection/>
      <ExpertTips/>
      <Discussions/>
      <Footer/>
      </>
    )
  }
}

export default RecipePage;