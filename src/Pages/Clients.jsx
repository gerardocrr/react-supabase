import { useEffect, useState } from "react";
import { supabase } from "@/api/supabase";
import { DataTable } from "@/components/tables/clients/data-table";
import { columns } from "@/components/tables/clients/columns";

export function Clients() {
  const [dataClients, setDataClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("clients").select();
      if (error) {
        console.log("Error fetching data:", error.message);
      } else {
        setDataClients(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <DataTable columns={columns} data={dataClients} />
    </div>
  );
}
