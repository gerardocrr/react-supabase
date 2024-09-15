import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { useNavigate, useParams } from "react-router-dom";
import { insertClient, getClientById, updateClient } from "@/api/clients";

export function FormClient() {
  const navigate = useNavigate();
  const params = useParams();
  const [isUpdate, setIsUpdate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    email: "",
    amount: "",
  });

  useEffect(() => {
    if (params.id) {
      setIsUpdate(true);
      getClientById(params.id, setFormData);
    } else {
      setIsUpdate(false);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "amount" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isUpdate) {
      insertClient(formData, navigate);
    } else {
      updateClient(formData, params.id, navigate);
    }
  };

  return (
    <div className="container mx-auto grid items-center py-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Jhon Doe"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="status">Status</label>
          <Select
            value={formData.status}
            onValueChange={(value) => {
              setFormData((prevData) => ({
                ...prevData,
                status: value,
              }));
            }}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-5">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="email@company.com"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="amount">Amount</label>
          <Input
            type="number"
            id="amount"
            name="amount"
            placeholder="000.00"
            onChange={handleChange}
            value={formData.amount}
            required
          />
        </div>

        <Button type="submit">
          {isUpdate ? "Update client" : "Save client"}
        </Button>
      </form>
    </div>
  );
}
