import { supabase } from "./supabase";

export const getAllClients = async (setDataClients) => {
  const { data, error } = await supabase
    .from("clients")
    .select()
    .order("created_at", { ascending: false });
  if (error) {
    console.log("Error fetching data:", error.message);
  } else {
    setDataClients(data);
  }
};

export const getClientById = async (id, setFormData) => {
  const { data, error } = await supabase.from("clients").select().eq("id", id);
  if (error) {
    console.log("Error fetching data:", error.message);
  } else {
    setFormData(() => ({
      name: data[0].name,
      status: data[0].status,
      email: data[0].email,
      amount: parseFloat(data[0].amount),
    }));
  }
};

export const insertClient = async (formData, navigate) => {
  const { error } = await supabase.from("clients").insert(formData);
  if (error) {
    console.log("Error inserting data:", error.message);
  } else {
    navigate("/");
  }
};

export const updateClient = async (formData, id, navigate) => {
  const { error } = await supabase
    .from("clients")
    .update(formData)
    .eq("id", id);
  if (error) {
    console.log("Error updating data:", error.message);
  } else {
    navigate("/");
  }
};

export const deleteClient = async (id, navigate) => {
  const response = await supabase.from("clients").delete().eq("id", id);
  if (response.status === 204) {
    navigate(0);
  } else {
    console.log("Error deleting data:", error.message);
  }
};
