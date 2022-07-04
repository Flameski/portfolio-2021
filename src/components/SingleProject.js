import React from 'react';
import github from '../img/github.png';
import globe from '../img/globe.png';

const SingleProject = ({
  isBg,
  title,
  titleEn,
  techs,
  description,
  descriptionEn,
  desktopPic,
  mobilePic,
  url,
  githubUrl,
}) => {
  return (
    <div className='single-project'>
      <div className='single-project__img'>
        <img
          className='desktop'
          src={desktopPic}
          alt={`${titleEn} desktop view`}
        />

        {mobilePic ? (
          <img
            className='mobile'
            src={mobilePic}
            alt={`${titleEn} mobile view`}
          />
        ) : null}
      </div>
      <div className='project-description'>
        <h3>{isBg ? title : titleEn}</h3>
        {techs.map((tech, index) => {
          return (
            <div key={index} className='project-description__tag'>
              {tech}
            </div>
          );
        })}
        <p>{isBg ? description : descriptionEn}</p>
        <div className='project-description__link'>
          <img src={globe} alt='GitHub' />
          <a href={url}>
            {titleEn === 'This website'
              ? isBg
                ? 'Вече сте тук'
                : "You're here already"
              : 'Link'}
          </a>
        </div>
        <div className='project-description__link'>
          <img src={github} alt='GitHub' />
          <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
