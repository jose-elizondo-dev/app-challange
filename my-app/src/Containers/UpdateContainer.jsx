import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMenu, updateItem } from "../api/api";
import UpdateView from "../Views/UpdateView";

export default function UpdateContainer() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetchMenu({}).then((res) => {
            setItem(res.items.find((i) => i.id === id));
        });
    }, [id]);

    if (!item) return <p>Loading...</p>;

    return (
        <UpdateView
            item={item}
            onSave={async (data) => {
                await updateItem(id, data);
                alert("Updated");
            }}
        />
    );
}
