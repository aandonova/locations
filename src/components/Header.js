import React, { useState } from 'react';


const Header = () => {
    const [inputList, setInputList] = useState([{ location: "" }]);

    // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { location: "" }]);
  };

  return (
   
    <div className="App">

        <header className="header">
        <i class="fa-solid fa-arrow-left"></i>
         </header>


      {inputList.map((x, i) => {
        return (
          <div className="box">
              
            <input
              name="location"
              placeholder="Current Location"
              value={x.location}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {/* {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>} */}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add destination</button>}
            </div>
          </div>
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>
  );
}




export default Header;