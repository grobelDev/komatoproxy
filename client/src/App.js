import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useParams,
  // useLocation,
  // Redirect,
  // useRouteMatch
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/'>
          {/* <div className='text-4xl font-bold text-center text-blue-500'>
            Welcome to the HomePage
          </div> */}
          <HomePage></HomePage>
        </Route>
        <Route path='/StoryPage'>
          <StoryPage></StoryPage>
        </Route>
        <Route path='/'>
          <div>404 Error!</div>
        </Route>
      </Switch>
    </Fragment>
  );
}

// .App-header {
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }
