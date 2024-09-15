import { useEffect, useState } from "react";
import { getAllClients } from "@/api/clients";
import { DataTable } from "@/components/tables/clients/data-table";
import { columns } from "@/components/tables/clients/columns";

export function Clients() {
  const [dataClients, setDataClients] = useState([]);

  useEffect(() => {
    getAllClients(setDataClients);
  }, []);

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={dataClients} />
    </div>
  );
}
