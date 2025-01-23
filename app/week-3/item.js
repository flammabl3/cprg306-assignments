export default function Item(props) {
    return (
        <section className="bg-purple-900 m-2 p-2 rounded-sm">
            <h1 className="font-medium">Name: {props.name}</h1>
            <ul>
                <li className="italic">Quantity: {props.quantity}</li>
                <li className="italic">Category: {props.category}</li>
            </ul>
        </section>
    );
}