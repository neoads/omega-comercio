import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Omega Comércio e Serviços Ópticos</h1>
        <span className="ml-4 text-sm">CNPJ: 61.324.567/0001-08</span>
      </div>
      <a href="#" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">LOGIN</a>
    </header>
  );
};

export default Header;

