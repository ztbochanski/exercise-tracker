import React from 'react';
import { Link } from "react-router-dom";
import Table from '../../components/table/table.component';
import ZipForm from '../../components/zip-form/zip-form.component';

const StoreListPage = ({ stores }) => {
    
  const headers = [
    'city',
    'state',
    'zip code'
  ]

  return(
    <div>
      <h1>Other Locations</h1>
      <Table headers={headers} rows={stores}></Table>
        <ZipForm
          placeholder="12345"
          stores={stores}
        />
      <Link to="/"> Back home </Link>
    </div>
  );
};

export default StoreListPage;