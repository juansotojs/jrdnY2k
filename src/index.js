import React from 'react';
import ReactDOM from 'react-dom';
import pic from './download (1).jpeg';

const App = () => {
  return <>
  <div className="jaystatzwrld"></div>
  <div className="container">
  <div className="biography">
    <h1>"jaystatz"</h1>
    <p>Last Login: Today</p>
    <p>Location:</p>
    <p>The Bay</p>
    <img src={pic} className='jPic'/>
  </div>
  <div className="song"></div>
  <div className="postOne">
    <h1>get it (lyrics)</h1>
    <p>(Hook: asapjaystatz)
Born to go get it (what?)
I was born to go get it (what?)
I was born to go get it (huh?)
By any means
I was born to go get it (what?)
I was born to go get it (what?)
I was born to go get it (huh?)
By any means

(Verse 2: asapjaystatz)
Flipping it, whipping it, gripping it
Y'all just be listening
I'm on all types of that different shit
Roll a Royce to my Babymomma house
Call yo squad tell em all what I'm about
Fuck in the kitchen
We just be fuck in the kitchen
Showing my Ex what she missing
Baby you know i ain't dissin' (no,no,no)
But I just be hitting shit
Trynna be winning shit
This nigga poppin and Y'all never listening
I just be sippin it
I just be hitting it
Trynna get rich and I'm already finished with
Lemme bring it back
Never leave the trap
Lil boy with a strap
Who goin' get it back?</p>
  </div>
  </div>
  </>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
