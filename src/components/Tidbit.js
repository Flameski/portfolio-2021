import React from 'react';

const Tidbit = ({ id, title, img, bgstyle, showTidbitDescription }) => {
  return (
    <div
      className="tidbit"
      style={{ backgroundImage: bgstyle }}
      onMouseOver={() => showTidbitDescription(id)}
      onMouseDown={() => showTidbitDescription(id)}
    >
      <img src={img.default} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Tidbit;
