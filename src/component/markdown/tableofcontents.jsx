import React from "react";

const TableofContents = ({ html }) => {
  return (
    <div
      className="table-of-contents"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default TableofContents;