import React from 'react' ;
import { Component } from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';

class Home extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <>
            <Search />
            <QuickSearch />
            </>
        )
    }
}

export default Home;