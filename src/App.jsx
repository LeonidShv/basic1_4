import React from 'react';
import HelloName from './components/HelloName';
import getInfo from './components/getInfo';

const student = {
  name: 'Leo',
  position: 'student',
};

const element = <p>learn react</p>;

function App() {
  return (
    <>
      {element}
      <HelloName name="Leo" />
      <getInfo info={student} />
    </>
  );
}

export default App;
