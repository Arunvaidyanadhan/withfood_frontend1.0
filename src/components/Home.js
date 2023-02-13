import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./SocialFollow";
import Socilfollow from './SocialFollow';
import CarvingCarousle  from './CarvingCarousle';
import IngrediantOfMonth  from './IngrediantOfMonth';
import Blog  from './Blog';
import SearchNavbar from './SearchNavbar';
import HomeBanner from './HomeBanner';
import Footer from './Footer';

import './css/all.css';
import NewsContributor from './NewsContributor';
class Home extends React.Component {
  render() {
    return <>
  
<Socilfollow></Socilfollow>
<SearchNavbar></SearchNavbar>
<HomeBanner></HomeBanner>
<CarvingCarousle></CarvingCarousle>
<IngrediantOfMonth/>
<Blog/>
<NewsContributor/>
<Footer/>

    </>
  }
}

export default Home;