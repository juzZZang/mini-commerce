import Header from "../components/Header";

function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Header />
            <main className="mx-auto max-w-6xl px-6 py-8">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;