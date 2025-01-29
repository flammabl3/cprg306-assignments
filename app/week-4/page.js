import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <meta title="Shopping List"></meta>
            <h1 className="text-2xl font-bold">Shopping List</h1>
            <ItemList/>
        </main>
    );
}