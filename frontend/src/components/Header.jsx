import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="border-b bg-white">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link to="/" className="text-xl font-bold text-gray-900">
                    Mini Commerce
                </Link>

                <div className="flex gap-6 text-sm font-medium text-gray-700">
                    <Link to="/" className="hover:text-black">Home</Link>
                    <Link to="/search" className="hover:text-black">Search</Link>
                    <Link to="/login" className="hover:text-black">Login</Link>
                    <Link to="/mypage" className="hover:text-black">MyPage</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;