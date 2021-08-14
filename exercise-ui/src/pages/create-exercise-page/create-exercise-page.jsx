import React from 'react';
import { Link } from "react-router-dom";
import ExerciseTable from '../../components/exercise-table/exercise-table.component';
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
      <ExerciseTable headers={headers} rows={stores}></ExerciseTable>
        <ZipForm
          placeholder="12345"
          stores={stores}
        />
      <Link to="/"> Back home </Link>
    </div>
  );
};

export default StoreListPage;