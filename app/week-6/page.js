import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="bg-gray-950">
            <meta title="Shopping List"></meta>
            <h1 className="p-2 m-2   text-2xl font-bold">Shopping List</h1>
            <ItemList/>
        </main>
    );
}