import React, { Component } from 'react';

import { SearchBar } from './searchbar';
import { Header } from './header';
import { Image } from './image';



class Base extends Component {
    render() {
        return (
            <div className="grid__main2">
                <SearchBar/>
                <Header/>
                <Image/>
            </div>
        )
        }
    }

export default Base;