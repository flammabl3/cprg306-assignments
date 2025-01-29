import Counter from './counter';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="text-4xl font-bold mb-5">Counter Demo</h1>
                <Counter />
            </div>
        </main>
    );
}