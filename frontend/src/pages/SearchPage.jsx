import { useEffect, useState } from "react";

function SearchPage() {
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Fashion", "Shoes", "Accessories", "Electronics"];

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, []);

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchText.toLocaleLowerCase());

        const matchesCategory =
            selectedCategory === "All" || product.category === selectedCategory;

            return matchesSearch && matchesCategory;
    });

    return (
        <section className="space-y-8">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
                <h1 className="text-3xl font-bold">상품 검색</h1>

                <div className="mt-6 flex gap-3">
                    <input
                        type="text"
                        placeholder="상품명을 검색해보세요"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-full rounded-xl border px-4 py-3"
                    />
                    <button className="rounded-xl bg-black px-6 py-3 text-white">
                        검색
                    </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`rounded-full px-4 py-2 text-sm ${
                                selectedCategory === category
                                ? "bg-black text-white"
                                : "bg-gray-100 text-gray-700"
                            }`}
                            >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div>
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                            <p className="mt-2 text-gray-600">{product.price}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">검색 결과가 없습니다.</p>
                )}
            </div>
        </section>
    );
}

export default SearchPage;
