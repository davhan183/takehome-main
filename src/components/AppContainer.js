import React, { useEffect, useState } from 'react';
import { 
  Switch, 
  Route,
  Redirect,
} from 'react-router-dom';

import { getQuizHeaders } from './QuizzesAPI.js';

import Homepage from './Homepage.js';
import Quiz from './Quiz.js';

function AppContainer() {
  // Quiz titles and IDs for all listed quizzes
  const [quizHeaders, setQuizHeaders] = useState([]);

  useEffect(() => {
    // Getting quiz headers with quiz ID on mount
    getQuizHeaders().then(quizHeaders => {
      setQuizHeaders(quizHeaders);
    });
  }, []);

  return (
    <Switch> 
      <Route exact path="/">
        <Homepage quizHeaders={quizHeaders} />
      </Route>
      {/* Routes parametized based on quiz IDs */}
      <Route path="/quizzes/:id" render={routeProps => {
          const { id } = routeProps.match.params;
          return <Quiz id={id} />;
      }} />
      {/* All invalid routes redirected to Homepage */}
      <Route render={() => <Redirect to="/" /> } />
    </Switch>
  );
}

export default AppContainer;

// React Hooks version
// <Route path="/quizzes/:id" children={<Quiz />} />