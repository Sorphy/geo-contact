import { FC, useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { TAddContactSchema } from "../../schema/addContactSchema";

const TableView: FC = () => {
  const [displayedContacts, setDisplayedContacts] = useState<
    TAddContactSchema[]
  >([]);

  useEffect(() => {
    // Fetch contacts from localStorage
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      const parsedContacts = JSON.parse(storedContacts);
      setDisplayedContacts(parsedContacts);
    }
  }, []);

  const getRandomAddress = (addresses: { value: string }[]) => {
    if (addresses.length > 1) {
      const randomIndex = Math.floor(Math.random() * addresses.length);
      return addresses[randomIndex].value;
    }
    return addresses[0]?.value;
  };

  const columns: TableColumn<TAddContactSchema>[] = [
    {
      name: "S/N",
      cell: (_row, index) => <span>{index + 1}</span>, // Serial number column
      width: "60px",
    },
    {
      name: "Name",
      selector: (row: TAddContactSchema) => row.name,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row: TAddContactSchema) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: TAddContactSchema) => row.email,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row: TAddContactSchema) => getRandomAddress(row.addresses),
      sortable: false,
    },
    {
      name: "Latitude",
      selector: (row: TAddContactSchema) => row.latitude,
      sortable: false,
    },
    {
      name: "Longitude",
      selector: (row: TAddContactSchema) => row.longitude,
      sortable: false,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "16px",
        color: "#1A237E",
      },
    },
  };

  return (
    <div className="overflow-x-auto">
      <DataTable
        columns={columns}
        data={displayedContacts}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15]}
        fixedHeader
        striped
        customStyles={customStyles}
      />
    </div>
  );
};

export default TableView;
