export default function Item(props) {
    return (
        <li className="bg-purple-950 my-4 mx-3 p-2 rounded-sm w-full">
            <h1 className="font-semibold text-lg">{props.item.name}</h1>
            {props.showGroup && <p>Category: {props.item.category}</p>}
            <p>Quantity: {props.item.quantity}</p>
        </li>
    );
}