
import { Component } from 'react';
import ReactDOM from 'react-dom/client';

import JSON from './db.json'

//COMPONENTS
import Header from './components/header';
import Newslist from './components/news_list';

import './css/style.css'

// const App = () => {
//   console.log(JSON);
//   return (
//     <div>
//       <Header></Header>
//     </div>
//   )
// }

class App extends Component {
  state = {
    news: JSON
  }
  render() {

    return (
      <>
        <Header />
        <Newslist news={this.state.news} />
      </>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);

