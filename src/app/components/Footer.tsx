export default function Footer() {
    return (
        <footer className="text-center pb-5 text-[#DEDEDE]">
            <div className="container">
                <p className="text-lg">
                    오늘보다 나은 개발을 위해,
                    <span className="hidden sm:inline">&nbsp;</span>
                    <br className="block sm:hidden" />
                    내일도 배우고 생각합니다.
                </p>
                <a
                    href="mailto:codewave080@gmail.com"
                    className="text-3xl sm:text-4xl font-anton font-bold inline-block mt-5 mb-10 hover:underline"
                >
                    codewave080@gmail.com
                </a>
                {/*<p>© 2025 codewave. All rights reserved.</p>*/}
            </div>
        </footer>
    )
}
