import React from 'react';
import style from './Color.module.css'

function Color({color}) {
  return (
    <div className="col-md-3">
        <div className="custom-control custom-radio image-checkbox m-1 d-flex flex-column align-items-center">
            <label className="custom-control-label" htmlFor={color.name}>
                <img className={`img-fluid ${style.image}`} src={`http://localhost:4000/${color.image}`} alt="#" />
            </label>
            <input type="radio" className="custom-control-input m-2" id={color.name} value={color.name} name="ck2" />
        </div>
    </div>
  );
}

export default Color;
