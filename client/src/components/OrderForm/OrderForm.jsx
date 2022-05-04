import React from 'react';

function OrderForm(props) {
  return (
    <div>
      <form>
        <div className='mb-3'>
          <label for='address' className='form-label'>Адрес</label>
          <input type='text' className='form-control' id='address'></input>
        </div>
        <div className='mb-3'>
          <label for='phone' className='form-label'>Телефон</label>
          <input type='text' className='form-control' id='phone'></input>
        </div>
        <div className='mb-3'>
          <label for='name' className='form-label'>Имя</label>
          <input type='text' className='form-control' id='name'></input>
        </div>
        <button type='submit' className='btn btn-primary'>Оформить заказ</button>
      </form>
    </div>
  );
}

export default OrderForm;
