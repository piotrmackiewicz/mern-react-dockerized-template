'use client';

import { useEffect } from 'react';

export const Test = () => {
  useEffect(() => {
    fetch('http://localhost:4000')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <p>TEST COMPONENT</p>;
};
