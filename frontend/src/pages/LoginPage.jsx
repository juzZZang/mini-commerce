import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="mt-2 text-gray-600">
                이메일과 비밀번호를 입력해주세요.
            </p>

            <form className="mt-6 space-y-4">
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        이메일
                    </label>
                    <input
                        type="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        비밀번호
                    </label>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:border-black"
                    />
                </div>

                <button 
                    type="button"
                    className="w-full rounded-xl bg-black px-4 py-3 font-medium text-white"
                >
                    로그인
                </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
                아직 회원이 아니신가요? 회원가입 기능은 추후 추가 예정임
            </p>
        </section>
    );
}

export default LoginPage;
