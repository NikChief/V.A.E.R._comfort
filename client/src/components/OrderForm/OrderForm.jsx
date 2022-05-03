import React from 'react';

function OrderForm(props) {
  return (
    <div>
      <form>
        <div class='mb-3'>
          <label for='address' class='form-label'>Адрес</label>
          <input type='text' class='form-control' id='address'></input>
        </div>
        <div class='mb-3'>
          <label for='phone' class='form-label'>Телефон</label>
          <input type='text' class='form-control' id='phone'></input>
        </div>
        <div class='mb-3'>
          <label for='name' class='form-label'>Имя</label>
          <input type='text' class='form-control' id='name'></input>
        </div>
        <button type='submit' class='btn btn-primary'>Оформить заказ</button>
      </form>
    </div>
  );
}

export default OrderForm;
