import { useEffect, useState } from "react";
import { supabase } from "@/api/supabase";

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
      <h1>Clients</h1>
      {dataClients.map((client) => (
        <li key={client.id}>{client.name}</li>
      ))}
    </div>
  );
}
