import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import Header from './Header';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Header />
            </div>
        );
    }
}