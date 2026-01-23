import { useState } from "react";

export default function UpdateView({ item, onSave }) {
    const [price, setPrice] = useState(item.price);
    const [isAvailable, setIsAvailable] = useState(item.isAvailable);

    return (
        <>
            <h2>Update {item.name}</h2>

            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

            <label>
                <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
                Available
            </label>

            <button onClick={() => onSave({ price: Number(price), isAvailable })}>
                Save
            </button>
        </>
    );
}
