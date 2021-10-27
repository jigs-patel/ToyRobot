import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ToyRobot } from './components/ToyRobot';
import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />                       
            <Route path='/toyrobot' render={() => <ToyRobot maxRows={6} maxCols={6} />} />
      </Layout>
    );
  }
}
