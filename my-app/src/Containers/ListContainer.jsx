import ListView from "../Views/ListView"
const ListContainer = () => {

    const items = [
        { id: "1", name: "Burger", category: "main", price: 12.5, isAvailable: true },
        { id: "2", name: "Fries", category: "side", price: 4.25, isAvailable: true },
        { id: "3", name: "Cola", category: "drink", price: 2.5, isAvailable: false },
    ];

    return <>
        <ListView items={items}/>
    </>
}

export default ListContainer