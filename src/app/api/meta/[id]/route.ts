import { NextRequest } from 'next/server'

const metadataList = [
    {
        id: '1',
        title: '제목: 첫 번째',
        description:
            'React와 Firebase를 활용해 개발한 블로그 SPA입니다. 초기에는 강의를 기반으로 구조를 익혔으며, 이후 실무 수준의 기술 도입과 기능 확장을 통해 4년차 개발자로서의 역량을 검증할 수 있는 수준까지 발전시켰습니다. 사용자 인증, 글 및 댓글 CRUD, 테마 전환, 반응형 등 주요 기능을 포함하며, 디자인/상태 관리/보안 측면까지 고려한 구조로 구성했습니다.',
        year: '2024',
        url: 'https://example.com/1',
        techStacks: ['React', 'Sass', 'Firebase', 'Vercel'],
        mainFeatures: `
            <ul>
                <li>사용자 인증 (회원가입, 로그인, 로그아웃) 및 권한에 따른 접근 제어</li>
                <li>블로그 글 CRUD (작성, 수정, 삭제, 조회)</li>
                <li>댓글 시스템 (작성, 수정, 삭제)</li>
                <li>다크모드 전환 (로컬 저장소 기반 유지)</li>
                <li>반응형 UI (모바일/데스크탑 대응)</li>
                <li>카테고리 필터링, 사용자 글 리스트 (Velog 스타일)</li>
            </ul>
            `,
        technicalImprovements: `
            <ul>
                <li>상태 관리 개선: React Query로 데이터 페칭/캐싱 최적화. 서버 상태와 클라이언트 상태 분리</li>
                <li>폼 유효성 검사: React Hook Form + Yup 조합으로 입력 검증 안정성 확보</li>
                <li>Firebase Rules 직접 작성: 인증된 사용자만 특정 작업 가능하도록 Firestore 보안 설정</li>
                <li>컴포넌트 구조화: 페이지/컴포넌트/훅 단위로 폴더 분리하여 유지보수성 향상</li>
                <li>TailwindCSS 도입: 빠르고 일관된 UI 구현 + BEM 스타일 제거</li>
            </ul>
        `,
    },
    {
        id: '2',
        title: '제목: 두 번째',
        description: '설명: 두 번째 항목입니다.',
        url: 'https://example.com/2',
    },
    {
        id: '3',
        title: '제목: 세 번째',
        description: '설명: 세 번째 항목입니다.',
        url: 'https://example.com/3',
    },
]

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = params

    const metadata = metadataList.find((item) => item.id === id)

    return new Response(JSON.stringify(metadata), {
        headers: { 'Content-Type': 'application/json' },
    })
}
