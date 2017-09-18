import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../header';
import Displayer from '../displayer';
import Home from '../../components/home';
import Error404 from '../../components/error404';

const App = () => (
  <div>
    <Header />
    <main>
      <Displayer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Error404} />
        </Switch>
      </Displayer>
    </main>
  </div>
  );


export default App;
