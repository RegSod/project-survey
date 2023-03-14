import React from 'react';

export const Result = ({ name, food, drink, century }) => {
  return (

    <div className="result-box"> 

      <p>Your name is {name}</p>
      <p>Your favourite food is {food}</p>
      <p>Your favourite drink is {drink}</p>
      <p>Your favourit century is {century}</p>
      <p>You dont move like Marie Antoinette, 
        you don't dress like Erik XIV and you don't party like George V. 
        I'm sorry, but you are not ROYALTY!</p>
    </div>
  );
}