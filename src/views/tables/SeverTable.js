import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Button, Input, Spinner, Table } from "reactstrap";

export default function ServerTable({
  columns,
  data,
  pageCount,
  totalRows,
  fetchData,
  state,
  setState,
  loading,
}) {
  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    pageCount,
    state,
    onPaginationChange: setState.setPagination,
    onSortingChange: setState.setSorting,
    onColumnFiltersChange: setState.setColumnFilters,
    onGlobalFilterChange: setState.setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: false,
  });

  React.useEffect(() => {
    fetchData();
  }, [
    state.pagination,
    state.sorting,
    state.columnFilters,
    state.globalFilter,
  ]);

  return (
    <div className="p-4">
      {/* Global Filter */}
      <Input
        type="text"
        placeholder="Search..."
        value={state.globalFilter ?? ""}
        onChange={(e) => setState.setGlobalFilter(e.target.value)}
        className="mb-3"
      />

      <div className="table-responsive">
        <Table bordered hover>
          <thead className="table-light">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          className={
                            header.column.getCanSort()
                              ? "cursor-pointer user-select-none"
                              : ""
                          }
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted()] ?? ""}
                        </div>

                        {header.column.getCanFilter() && (
                          <Input
                            type="text"
                            value={header.column.getFilterValue() ?? ""}
                            onChange={(e) =>
                              header.column.setFilterValue(e.target.value)
                            }
                            placeholder="Filter..."
                            className="mt-1"
                          />
                        )}
                      </>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-4">
                  <Spinner size="sm" color="info" /> Loading...
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <span>
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of {pageCount}
          </strong>
        </span>

        <div>
          <Button
            color="secondary"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="me-2"
          >
            Previous
          </Button>
          <Button
            color="secondary"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
