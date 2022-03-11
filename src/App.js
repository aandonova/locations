import logo from './logo.svg';
import './App.css';
import Record from './record.json';

import { Stocks } from "./Stocks";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";



function App() {
  return (
    <div className="App">
        <HomePageHeader />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <div className="posts">
        { 
          Data & Data.map(post => {
            return (
              <div key= {post.id } className="box">
                <h3> { post.address } </h3> 
                <p> { post.address } </p>
              </div>
            )
        })}
      </div> */}

    {/* работещ за record.json  */}
      {
         Record.map( record => {
          return ( 
            <div className="box" key={record.id}>
             <strong>{record.name} </strong> 
                    {record.address}

            { record.museum && record.museum.map( data => {
              return (
                <div key= {record.id}>
                  {data.name}
                </div>
              )
              })
            }
            </div>
          )
        })
      } 
{/* край на работещия */}

      <Stocks />
   

    <div class="">
      <Tabs>
        <Tab label="Bus">b</Tab>
        <Tab label="Attractions">
          <div class="container">
            <div class="row">
              <div class="col-xs-12">
              <i class="fas fa-pin"></i>
                <span class="pull-left">Times Square</span>
                <p> 12 E 23rd St, New York , NY</p>   
                <i class="fa-solid fa-location-dot"></i>      
              </div>
            </div>
          </div>
          </Tab>
          <Tab label="Parks">
          <div class="main">
            <div class="iconbox">
              <span class="icon"><i class="fa-solid fa-location-dot"></i></span>
              <div class="detail">
                <h3>Central Park</h3>
                <p>12 E 23rd St, New York , NY</p>
              </div>
            </div>
            </div>
          </Tab>

          <Tab label="Museums">
            <div>
              <a href="https://example.com" target="_blank">
                <div class="bar">
                  <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
                  <div class="text"><b>Title</b>Description.</div>
                </div>
              </a>
            </div>
          </Tab>
      </Tabs>
      </div>
    </div>
  );
} 

const HomePageHeader = () => {
  return ( 
    <header className="header">
      <h2>Your Stock Tracker</h2>
    </header>
  );
};

export default App;
