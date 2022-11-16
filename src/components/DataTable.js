import React from 'react'
import { Table } from 'react-bootstrap';

const DataTable = () => {
  return (
   <div className="mt-4 d-flex">
   <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>University Name</th>
          <th>Website</th>
          <th>Alpha_two_code</th>
          <th>Country</th>
          <th>Domains</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
     
      </tbody>
    </Table>
   </div>
  )
}

export default DataTable;