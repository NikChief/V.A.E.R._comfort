import React from 'react';
import style from './Color.module.css'

function Color({color}) {
  return (
    <div className="col-md-3">
        <div className="custom-control custom-radio image-checkbox m-1 d-flex flex-column align-items-center">
            <label className="custom-control-label">
                <img className={`img-fluid ${style.image}`} src={`${process.env.REACT_APP_BASE_URL}/${color.image}`} alt="#" />
                <input type="radio" className="custom-control-input m-2" id={color.name} value={color.name} name="ck2" />
            </label>
        </div>
    </div>
  );
}

export default Color;
