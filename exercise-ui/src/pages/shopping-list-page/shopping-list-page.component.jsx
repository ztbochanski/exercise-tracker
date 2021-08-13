import React from 'react';
import { Link } from "react-router-dom";
import Table from '../../components/table/table.component';

const ShoppingListPage = ({items}) => {

  const headers = [
    'item',
    'price',
    'quantity'
  ]

  return(
    <div className="shoppingListPage">
      <h1>Adjust items you want to buy</h1>
      <Table headers={headers} rows={items}></Table>
      <Link to="/"> Back home </Link>
    </div>
  );
};

export default ShoppingListPage;