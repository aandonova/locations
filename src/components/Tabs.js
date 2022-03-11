import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [selected, setSelected] = useState(Array(children.length).fill(false));

  const updateSelected = (index) => {
    const state = [...selected];
    state[index] = !state[index];
    setSelected(state);
  };

  return (
    <>
      {React.Children.map(children, (kids, index) => (
        <button
          className="tab-label"
          onClick={() => updateSelected(index)}
          data-active={selected[index]}
        >
          {kids.props.label}
        </button>
      ))}
      {React.Children.map(children, (kids, index) => (
        <div className="tab-content" data-active={selected[index]}>
          {kids}
        </div>
      ))}
    </>
  );
};

export default Tabs;