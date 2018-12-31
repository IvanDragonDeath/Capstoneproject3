import React, { Component } from 'react';

import { SearchBar } from './searchbar';
import { Header } from './header';
import { Image } from './image';
import { Results } from './results';



class Base extends Component {
    render() {
        return (
            <div className="grid__main2">
                <SearchBar/>
                <Header/>
                <Image/>
                <Results/>
            </div>
        )
        }
    }

export default Base;