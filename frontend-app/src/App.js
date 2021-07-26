import './App.css';
import JobList from './JobList';
import JobDetail from './JobDetail';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/joblist" component={JobList}/>
          <Route path="/jobdetail/:id" component={JobDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <LoginForm />
  </div>
);


export default App;
