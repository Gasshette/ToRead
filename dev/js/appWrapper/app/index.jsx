import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../header';
import Navbar from '../navbar';
import Displayer from '../displayer';
import Home from '../../components/home';
import About from '../../components/about';
import Counter from '../../containers/counter';
import Movies from '../../containers/movies';
import MovieDescription from '../../containers/movie';
import Error404 from '../../components/error404';

const App = () => (
  <div>
    <Header />
    <Navbar />
    <main>
      <Displayer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/counter" component={Counter} />
          <Route exact path="/movies" component={Movies} />
          <Route path="/movies/:movieid" component={MovieDescription} />
          <Route component={Error404} />
        </Switch>
      </Displayer>
    </main>
  </div>
  );


export default App;
