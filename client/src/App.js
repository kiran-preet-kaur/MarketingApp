import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import Home from './modules/Home/home';
import Navbar from './modules/Header/HeaderContainer';
import Login from './modules/Login/loginContainer'
import Contact from './modules/ContactForm/contact'
import Footer from './layouts/Footer';
import Subscribe from './modules/Subscribe/subscriptionForm';
import Specs from './modules/Features/Specs';
import Included from './modules/Features/Included';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className='container' style={{ paddingTop: '25px' }}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/specs' component={Specs} />
              <Route exact path='/lumen' component={Included} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/contact-us' component={Contact} />
              <Route exact path='/subscribe' component={Subscribe} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
