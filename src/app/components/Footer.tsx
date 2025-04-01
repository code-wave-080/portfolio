export default function Footer() {
    return (
        <footer className="text-center pb-5 text-[#DEDEDE]">
            <div className="container">
                <p className="text-lg">
                    프로젝트 협업 또는 채용 문의를 기다리고 있습니다
                </p>
                <p className="text-lg">언제든지 메일로 연락 주세요</p>
                <a
                    href="mailto:codewave080@gmail.com"
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    codewave080@gmail.com
                </a>
                {/*<p>© 2025 codewave. All rights reserved.</p>*/}
            </div>
        </footer>
    )
}
