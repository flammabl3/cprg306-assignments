export default function Dog(props) {
    return (
        <section className="bg-slate-300 m-4 p-2">
            <h2 className="font-bold text-lg text-orange-600">{props.name}</h2>
            <p className="text-orange-600">{props.age}</p>
            <p className="text-orange-600">{props.breed}</p>
            <p className="text-orange-600">{props.color}</p>
        </section>
    );
}