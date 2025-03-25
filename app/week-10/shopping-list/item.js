export default function Item({item, showGroup, setClickedItem}) {
    return (
        <li className="bg-purple-950 hover:bg-green-700 my-4 mx-3 p-2 rounded-sm w-full">
            <div onClick={() => setClickedItem(item)}>
                <h1 className="font-semibold text-lg">{item.name}</h1>
                {showGroup && <p>Category: {item.category}</p>}
                <p>Quantity: {item.quantity}</p>
            </div>
        </li>
    );
}