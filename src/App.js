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
      {/* {
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
      }  */}
{/* край на работещия */}

      {/* <Stocks /> */}
   
      <Tabs>
{/* start tab bus */}
        <Tab label="Bus">
          <div className="list">

            <div className="item">
              <div className="icon"><i className="fa-solid fa-bus"></i></div>
              <div className="title">
                <span className="circle">17</span>
                
                Port Authority
              </div>
              <div className="address bus">8th Acw btwn 42nd St & 43rd, in front of..
     
                <div className="row">
                  <div className="col-md-3">
                    <div className="tour">
                      <button type="button" className="btn btn-sm btn-tour-1">Downtown Tour </button>
                      <button type="button" className="btn btn-sm btn-tour-2">Brooklyn Tour</button>
                      </div>
                    </div>  
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="tour">
                        <button type="button" className="btn btn-sm btn-tour-3">Uptown & Harlem Tour </button>
                        <button type="button" className="btn btn-sm btn-tour-4">Night Tour</button>
                        </div>
                      </div>  
                  </div>
              </div>  
            </div>

            <div className="item">
                <div className="icon"><i class="fa-solid fa-bus"></i></div>
                <div className="title">
                  <span className="circle-3">3</span>
                  Times Square West</div>
                <div className="address bus">46th St btwn 7th Ave & 8th Ave, in front of...
                  
                  <div className="tour second">
                    <button type="button" className="btn btn-sm btn-tour-1">Downtown Tour </button>
                    <button type="button" className="btn btn-sm btn-tour-3">Uptown & Harlem Tour </button>               
                  </div>           
                </div>
              </div>

          </div>    
        </Tab>
{/* end tab bus */}

        <Tab label="Attractions">
          <div className="list">

            <div className="item">
              <div className="icon"><i class="fa-solid fa-camera"></i></div>
              <div className="title">Times Square</div>
              <div className="address">12 E 23rd St, New York</div>
            </div>

            <div className="item">
              <div className="icon"><i class="fa-solid fa-camera"></i></div>
              <div className="title">Times Square Building</div>
              <div className="address">12 E 23rd St, New York , NY</div>
            </div>

          </div>
        </Tab>

        <Tab label="Parks">
          <div className="list">

            <div className="item">
              <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
              <div className="title">Central Park</div>
              <div className="address">12 E 23rd St, New York , NY</div>
            </div>

            <div className="item">
              <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
              <div className="title">Battery Park</div>
              <div className="address">12 E 23rd St, New York , NY</div>
            </div>

          </div>
        </Tab>

        <Tab label="Museums">
          <div className="list">

            <div className="item">
              <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
              <div className="title">Metropolitan Museum</div>
              <div className="address">12 E 23rd St, New York , NY</div>
            </div>

            <div className="item">
              <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
              <div className="title">Brooklyn Museum</div>
              <div className="address">12 E 23rd St, New York , NY</div>
            </div>

          </div>
        </Tab>
      </Tabs>
    </div>
  );
} 

const HomePageHeader = () => {
  return ( 
    <header className="header">
      <div className="float-left"> <i class="fa-solid fa-arrow-left"></i></div>
    </header>
  );
};

export default App;
