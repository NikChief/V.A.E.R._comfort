import React from 'react';

function Color({color}) {
  return (
    <div class="col-md-3">
        <div class="custom-control custom-radio image-checkbox m-1">
            <input type="radio" class="custom-control-input" id={color.name + color.code} name="ck2" />
            <label class="custom-control-label" for={color.name + color.code}>
                <img src={color.image} alt="#" class="img-fluid" />
            </label>
        </div>
    </div>
  );
}

export default Color;
