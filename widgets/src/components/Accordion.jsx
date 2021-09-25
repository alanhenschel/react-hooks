import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div
          aria-hidden="true"
          className={`title ${active}`}
          onClick={() => onTitleClick(index)}
          onKeyDown={() => onTitleClick(index)}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
    </div>
  );
};

Accordion.defaultProps = {
  items: Array,
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Accordion;
