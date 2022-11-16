import React from 'react'
import { Table } from 'react-bootstrap';

const DataTable = ({universities}) => {
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
      {universities.map((uni, index) => {
        return (
          <tr key={index}>
            <td>{index}</td>

            <th>{uni.name}</th>
            <th>
              <a link={`.${uni.web_pages}.`}>{uni.web_pages}</a>
            </th>
            <th>{uni.alpha_two_code}</th>
            <th>{uni.country}</th>
            <th>
              <ul>{uni.domains}</ul>
            </th>
    
          </tr>
        );
      })}
      </tbody>
    </Table>
   </div>
  )
}

export default DataTable;