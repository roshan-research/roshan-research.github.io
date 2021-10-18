import Header from "./components/header/header";
import {Route, Switch} from "react-router-dom";
import {Suspense} from 'react';
import ProgressIndicator from "./components/progress-indicator";

function App() {
  return (
      <Suspense fallback={<ProgressIndicator/>}>
          <Switch>
              <Route path={'/'} exact>
                  <Header/>
              </Route>
          </Switch>
      </Suspense>
  );
}

export default App;
