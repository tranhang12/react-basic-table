import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './columns'

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
    <div>FilteringTable</div>
  )
}
