import React from 'react';
import ReactDOM from 'react-dom';


import SearchBar from './components/searchbar';
import Base from './components/base';
import Header from './components/header';
import { Redirect } from './components/Redirect';
import { Results } from './components/results';



import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';





function main() {
  ReactDOM.render(
    
    <Base>
      {/* <Results>
      </Results> */}
      <Image>
      </Image>
      <Header>
      </Header>
      <SearchBar>
      </SearchBar>
      <Redirect>
      </Redirect>
    </Base>
    , document.querySelector('.app-wrapper', 'Search-Box', 'Search-Results'));
}

document.addEventListener('DOMContentLoaded', main);
