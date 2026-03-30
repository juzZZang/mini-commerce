function HomePage() {
    const products = [
        { id: 1, name: "Classic Sneakers", price: "89000원"},
        { id: 2, name: "Minimal Hoodie", price: "59000원"},
        { id: 3, name: "Daily Backpack", price: "49000원"},
        { id: 4, name: "Smart Watch", price: "129000원"},
    ];

    return (
        <section className="space-y-10">
            <div className="rounded-3xl bg-white p-10 shadow-sm">
                <p className="text-sm font-semibold text-gray-500">MINI COMMERCE</p>
                <h1 className="mt-3 text-4xl font-bold text-gray-900">
                    원하는 상품을 빠르게 찾고 관리하세요
                </h1>
                <p className="mt-4 max-w-2xl text-gray-600">
                    React와 FastAPI 기반으로 만드는 미니 이커머스 프로젝트입니다.
                    상품 탐색, 로그인, 마이페이지 기능을 단계적으로 구현할 예정입니다.
                </p>

                <div className="mt-6 flex gap-3">
                    <button className="rounded-xl bg-black px-5 py-3 text-white">
                        쇼핑 시작
                    </button>
                    <button className="rounded-xl border px-5 py-3">
                        프로젝트 보기
                    </button>
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-2xl font-bold">카테고리</h2>
                <div className="flex flex-wrap gap-3">
                    <button className="rounded-full bg-white px-5 py-2 shadow-sm">Fashion</button>
                    <button className="rounded-full bg-white px-5 py-2 shadow-sm">Shoes</button>
                    <button className="rounded-full bg-white px-5 py-2 shadow-sm">Accessories</button>
                    <button className="rounded-full bg-white px-5 py-2 shadow-sm">Electronics</button>
                </div>
            </div>

            <div>
                <h2 className="mb-4 text-2xl font-bold">추천 상품</h2>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="rounded-2xl bg-white p-5 shadow-sm">
                            <div className="mb-4 h-40 rounded-xl bg-gray-100"></div>
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="mt-2 text-gray-600">{product.price}</p>
                            <button className="mt-4 w-full rounded-xl border px-4 py-2">
                                자세히 보기
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomePage;
