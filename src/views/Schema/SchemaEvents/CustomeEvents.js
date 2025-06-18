import React from "react";
import ServerTable from "views/tables/SeverTable";

const CustomeEvents = () => {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "Anish",
      email: "anish@gmail.com",
    },
    {
      id: 2,
      name: "Libin",
      email: "libin@gmail.com",
    },
    {
      id: 3,
      name: "Sundhar",
      email: "sundhar@gmail.com",
    },
    {
      id: 4,
      name: "Vignesh",
      email: "vicky@gmail.com",
    },
    {
      id: 5,
      name: "Anish",
      email: "anishlogin@gmail.com",
    },
    {
      id: 6,
      name: "Ashok",
      email: "ashok@gmail.com",
    },
  ]);
  const [totalRows, setTotalRows] = React.useState(20);

  const [state, setState] = React.useState({
    pagination: { pageIndex: 0, pageSize: 10 },
    sorting: [],
    columnFilters: [],
    globalFilter: "",
  });
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
  ];

  const setPartialState = (partial) =>
    setState((prev) => ({ ...prev, ...partial }));

  const fetchData = async () => {
    const { pageIndex, pageSize } = state.pagination;
    const sorting = state.sorting;
    const filters = state.columnFilters;
    const search = state.globalFilter;

    //     const res = await fetch(
    //       /api/customers?page=${pageIndex + 1}&size=${pageSize}&sort=${JSON.stringify(sorting)}&filters=${JSON.stringify(filters)}&search=${search}
    //     );
    //     const json = await res.json();
    //     setData(json.data);
    //     setTotalRows(json.total);
  };
  return (
    <div>
      {" "}
      <ServerTable
        columns={columns}
        data={data}
        pageCount={Math.ceil(totalRows / state.pagination.pageSize)}
        totalRows={totalRows}
        fetchData={fetchData}
        state={state}
        setState={{
          setPagination: (val) => setPartialState({ pagination: val }),
          setSorting: (val) => setPartialState({ sorting: val }),
          setColumnFilters: (val) => setPartialState({ columnFilters: val }),
          setGlobalFilter: (val) => setPartialState({ globalFilter: val }),
        }}
        loading={false}
      />
    </div>
  );
};

export default CustomeEvents;
