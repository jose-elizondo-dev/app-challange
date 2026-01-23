import { useState } from "react";
import { createItem } from "../api/api";
import CreateView from "../Views/CreateView";

export default function CreateContainer() {
    const [form, setForm] = useState({
        name: "",
        category: "main",
        price: "",
        isAvailable: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createItem({ ...form, price: Number(form.price) });
        alert("Item created");
        setForm({ name: "", category: "main", price: "", isAvailable: true });
    };

    return <CreateView form={form} onChange={handleChange} onSubmit={handleSubmit} />;
}
