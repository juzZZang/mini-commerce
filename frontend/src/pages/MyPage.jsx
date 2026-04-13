function MyPage() {
    const user = {
        name: "홍길동",
        email: "test@exmaple.com",
    };
    
    return (
        <section className="space-y-8">
            <h1 className="text-3xl font-bold">My Page</h1>

            {/* 프로필 카드 */}
            <div>
                <h2 className="text-xl font-semibold">프로필</h2>

                <div className="mt-4 space-y-2">
                    <p className="text-gray-700">
                        <span className="font-medium">이름:</span> {user.name}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-medium">이메일:</span> {user.email}
                    </p>
                </div>
            </div>

            {/* 주문 내역 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold">주문 내역</h2>

                <div className="mt-4 text-gray-500">
                    아직 주문 내역이 없음.
                </div>
            </div>

            {/* 찜 목록 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold">찜 목록</h2>

                <div className="mt-4 text-gray-500">
                    찜한 상품 없음
                </div>
            </div>
        </section>
    );
}

export default MyPage;