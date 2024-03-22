
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
    news: JSON,
    filtered: []
  }
  getKeyword = (event) => {

    let keyword = event.target.value;
    // console.log(event.target.value)
    let filtered = this.state.news.filter((item) => {

      return item.title.indexOf(keyword) > - 1;

    })

    this.setState({
      filtered
    })
  }
  render() {

    return (
      <>
        <Header keywords={this.getKeyword} />
        <Newslist news={this.state.filtered.length === 0 ? this.state.news : this.state.filtered} />
      </>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);

