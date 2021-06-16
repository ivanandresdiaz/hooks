import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Information.scss';

const Information = () => {
  return (
    <div className='Information'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Informacion de contacto:</h2>
        </div>
        <div className='Information-form'>
          <form action=''>
            <input type='text' placeholder='Nombre completo' name='name' />
            <input type='email' placeholder='correo electronico' name='email' />
            <input type='text' placeholder='direccion' name='address' />
            <input type='text' placeholder='apartamento' name='apto' />
            <input type='text' placeholder='ciudad' name='city' />
            <input type='text' placeholder='Pais' name='country' />
            <input type='text' placeholder='Estado' name='state' />
            <input type='text' placeholder='Codigo Postal' name='cp' />
            <input type='text' placeholder='Telefono' name='phone' />
          </form>
        </div>
        <div className='Information-buttons'>
          <div className='Information-back'>
            <Link to='/'>
            Regresar
            </Link>
            
          </div>
          <div className='Information-next'>
            <Link to='/checkout/payment'>
              Pagar
            </Link>
          </div>
        </div>
      </div>
      <div className='Information-sidebar'>
        <h3>Pedidos</h3>
        <div className='Information-item'>
          <div className='Information-element'>
            <h4>Item Name</h4>
            <span>$ 10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
