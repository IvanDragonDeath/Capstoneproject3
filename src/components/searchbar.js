import React from 'react';

import {Redirect} from './Redirect'

 export function SearchBar() {
    return (
      <div className= 'Search_Bar2'>
          <div>
        
          <button onClick= {Redirect} >
                  Looking for something else?      
          </button>        
          </div>
      </div>
    )
  }


