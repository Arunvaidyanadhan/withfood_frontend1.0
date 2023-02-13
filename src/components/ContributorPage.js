import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Socilfollow from './SocialFollow';
import SearchNavbar from './SearchNavbar';
import RecipeDetail from './RecipeDetail';
import SwappableIngredients from "./SwappableIngredients";
import AddStep from "./AddStep";
import UserDirection from "./UserDirection";
import UserTips from "./UserTips";
import Footer from "./Footer";
class ContributorPage extends React.Component {
  render() {
    return <>
<Socilfollow/>
<SearchNavbar/>
<RecipeDetail/>
<SwappableIngredients/>
<AddStep/>
<UserDirection/>
<UserTips/>
<Footer/>
    </>
  }
}

export default ContributorPage;