import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const title = searchParams.get('title');

  const setUrlParams = () => {
    // setSearchParams({
    //   id: 1,
    //   title: 'title1'
    // });

    setSearchParams('id=1&title=title1');
  };

  //
  const locationObj = useLocation();
  console.log(locationObj);
  console.log(window.location);

  return (
    <div>
      <h3>about</h3>
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
      </ul>
      <button type="button" onClick={setUrlParams}>set</button>
    </div>
  );
};

export default About;
