import React from "react";
function TableRows(posts) {
  const grouping = posts.reduce((acc, post) => {
    if (acc[post.location]) {
      acc[post.location]++;
    } else {
      acc[post.location] = 1;
    }
    return acc;
  }, {});

  const result = [];
  for (let location in grouping) {
    result.push(
      <tr key={location}>
        <th scope="row">{location}</th>
        <td className="text-center">
          <span className="badge text-bg-secondary">{grouping[location]}</span>
        </td>
      </tr>
    );
  }
  return result;
}

export default TableRows;
