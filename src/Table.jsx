import React from 'react';
import data from './data';

export default (props) => {

  const {sortColumn, compare} = props;
  let sortedData = data;
  if (compare) {
    sortedData = data.sort((a, b) => compare(a[sortColumn], b[sortColumn]));
  }

  const cities = sortedData.map(info => {
    return (
      <tr>
        <td>{info[0]}</td>
        <td>{info[1]}</td>
        <td>{info[2]}</td>
        <td>{info[3]}</td>
        <td>{info[4]}</td>
        <td>{info[5]}</td>
        <td>{info[6]}</td>
        <td>{info[7]}</td>
        <td>{info[8]}</td>
        <td>{info[9]}</td>
      </tr>
    );
  });
  
  return(
    <div className="cities_table">
    <table>
      <tr>
        <th>Id</th>
        <th>City</th>
        <th>Country</th>
        <th>All Buildings</th>
        <th>100m+</th>
        <th>150m+</th>
        <th>200m+</th>
        <th>300m+</th>
        <th>Telecom Towers</th>
        <th>All Structures</th>
      </tr>
      {cities}
    </table>
    </div>
  );
};