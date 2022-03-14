import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/:type/:id">
          <PetDetailsPage />
        </Route>
        <Route path="/pet-details-not-found">
          <PetDetailsNotFound />
        </Route>
        <Route path="/:type?">
          <HomePage />
        </Route>
      </Switch>





    </Router>
  );
}

export default App;
