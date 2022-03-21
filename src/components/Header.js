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
      {/* <header className="header"></header> */}

      <div className="wrapper">
        <div className="header-box">
          <i className="icon icon-back fa-solid fa-arrow-left"></i>
          <div class="box-content">
            <div className="box-row">
              <i class="line"></i>
              <i className="icon fa-solid fa-circle"></i>
              <input
                className="input-field"
                name="location"
                placeholder="Current Location"
              />
              <i class="fa-solid fa-light-switch"></i>
            </div>

            {inputList.map((x, i) => 
              <div className="box-row">
                <i class="line"></i>
                <i className="icon fa-solid fa-location-dot"></i>
                <input
                  className="input-field"
                  name="location"
                  placeholder="Choise destination"
                />
                <button type="button" className="input-field" onClick={() => handleRemoveClick(i)}>
                {/* <i class="fas fa-arrows-alt-v"></i> */}
                <i class="far fa-times-circle"></i>
                </button>
              </div>
            )}

            <div className="box-row">
              <i class="icon fas fa-plus-circle"></i>
              <button onClick={handleAddClick} className="input-field">
                Add destination</button>
            </div>
          </div>


        </div>
      </div>
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>
  );
}




export default Header;