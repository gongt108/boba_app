import React from 'react';
import { Navbar, Footer } from '../components';

const Contact = () => {
    return (
        <div className='page-content'>
            <div style={{marginTop: "50px", textAlign: "center", marginBottom:"100px"}}>
              <h2>Where should I try next?</h2>
              <form className='recommendations-form'>
                <label>Location:</label>
                  <label className='form-item'><input type="text" name="location" /></label>
                
                <label>Drink recommendations?:</label>
                <label className='form-item'><textarea rows="15" cols="35" name="drinks" /></label>
                <input type="submit" value="Submit" className='form-item' />
              </form>
            {/* <h2 style={{marginTop: "50px"}}>Got Feedback?</h2>
          <p>Email me at <a style={{color: "blue", textDecoration: "underline"}} href="mailto:gongt108@gmail.com">gongt108@gmail.com</a>.</p> */}
            </div>
    
  </div>
      );
}

export default Contact