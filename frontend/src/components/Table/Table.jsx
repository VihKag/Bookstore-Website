import React from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter} from '@fortawesome/free-solid-svg-icons';
import { GlobalFilter } from './GlobalFilter';

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <GlobalFilter filter={state.globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} className="w-full text-sm text-left text-gray-500">
        <thead className="text-md text-gray-700 uppercase bg-gray-50">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  
                  className="px-6 py-3"
                  style={{ cursor: 'pointer' }}
                >
                  <div {...column.getHeaderProps(column.getSortByToggleProps())} className="flex items-center justify-center">
                    {column.render('Header')}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr key={row.id} className="bg-white border-b text-gray-700 text-lg" {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td key={cell.id} className="px-6 py-4 text-center" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                    <button className="ml-2">
                        <FontAwesomeIcon icon={faFilter}/>
                    </button>
                  </td>
                ))}                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
