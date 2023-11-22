import React from 'react';

const variants = {
  fadeIn: (direction, duration) => {
    return {
      hidden: { opacity: 0, y: direction === 'down' ? -20 : 20 },
      show: { opacity: 1, y: 0, transition: { duration: duration } },
      hidden: { opacity: 0, y: direction === 'down' ? -20 : 20 }
    };
  }
};

export default variants;