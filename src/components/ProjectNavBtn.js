import React from 'react';

function ProjectNavBtn({ onClickFn, activeNavBtn, id, children }) {
  return (
    <div onClick={onClickFn} id={id === activeNavBtn ? 'active' : 'inactive'}>
      {children}
    </div>
  );
}

export default ProjectNavBtn;
