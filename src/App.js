import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './constants/theme';
import AppContext from './context';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import NominationsPage from './pages/NominationsPage';
import StyledApp from './styled/StyledApp';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import SearchPage from './pages/SearchPage';
import Notifcations from './components/Nofications';
import { useSpring, animated } from 'react-spring';
import Badge from './components/Badge';
import AccountPage from './pages/Account';

const queryClient = new QueryClient();
function App() {
  const [show,set] = React.useState(false);

  React.useEffect(()=>{
    let timeout = null;
    if(show){
        timeout = setTimeout(()=>{
          set(false)
        },2000)
    }
    return ()=>{
      timeout && clearTimeout(timeout);
    }
  },[show])

  const props = useSpring({  transform: show ? 'transformY(10px) scale(1)':'transformY(10px) scale(0)', opacity: show ? 1 : 0})

  return (
      <QueryClientProvider client = { queryClient }>
        <ThemeProvider theme = {theme}>
          <StyledApp>
              <AppContext showBadge = {()=>set(true)}>
                <Router>
                  <Switch>
                    <Route exact path = '/' component = {HomePage}/>
                    <Route path = '/nominations' component = {NominationsPage}/>
                    <Route path = '/search' component = {SearchPage}/>
                    <Route path = '/account' component = {AccountPage}/>
                    <Route path = '/movie/:id' component = {MoviePage}/>
                  </Switch>
                </Router>
                <Notifcations/>
                {
                  show && (
                    <animated.div className = "badge" style = {props}>
                      <Badge/>
                    </animated.div>
                  )
                }
              </AppContext>
          </StyledApp>
        </ThemeProvider>
      </QueryClientProvider>
  );
}

export default App;
