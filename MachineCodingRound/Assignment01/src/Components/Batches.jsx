// src/components/Batches.jsx
import React, { useState, useMemo } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';

const Batches = () => {
  const data = useMemo(
    () => [
      { batch: 'Batch 1', status: 'Active' },
      { batch: 'Batch 2', status: 'Inactive' },
      { batch: 'Batch 3', status: 'Active' },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Batch',
        accessor: 'batch',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    setGlobalFilter,
    state: { globalFilter },
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-1/2">
        <input
          type="text"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search batches..."
          className="border p-2 rounded mb-4 w-full"
        />
        <table {...getTableProps()} className="min-w-full bg-white">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="py-2 px-4 border-b border-gray-200 bg-gray-100"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="py-2 px-4 border-b border-gray-200">
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Batches;
