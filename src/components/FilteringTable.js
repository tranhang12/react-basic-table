import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './columns'
import {MOCK_DATA} from './MOCK_DATA.json'
import './table.css'

export const FilteringTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = useTable(
        {
            columns,
            data
        }
    )
    
  return (
    <table {...getTableProps()}>
      <thead>
        {
          headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>

      <tbody {...getTableBodyProps()}>
        {
          rows.map((row) => {
            prepareRow(row)
            return (
              <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            )
          })
        }
      </tbody>
    </table>
  )
}
