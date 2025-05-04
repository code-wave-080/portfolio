import { NextRequest } from 'next/server'

const metadataList = [
    {
        id: '1',
        title: 'CARD',
        description:
            '카드 신청과 상태 확인 흐름을 중심으로, 실사용 목적의 서비스를 React와 Firebase 기반으로 구현한 프로젝트입니다. 사용자 인증, 상태 관리, 실시간 상태 반영, 성능 최적화 등 다양한 측면을 고려하여 프론트엔드 아키텍처 전반에 대한 이해와 응용력을 검증할 수 있는 구조로 설계했습니다.',
        year: '2025',
        url: 'https://example.com/1',
        techStacks: ['React', 'typescript', 'Emotion', 'Recoil', 'Firebase'],
        mainFeatures: `
            <ul class="list-disc pl-6">
                <li>카드 목록/상세/신청 기능: 무한 스크롤 구현 및 상세 이동 시 스크롤 최상단 처리</li>
                <li>카드 신청 상태 확인: Firestore 저장 후 폴링 방식으로 상태 갱신 및 라우팅 분기</li>
                <li>사용자 인증 흐름: Firebase Auth 기반 로그인/회원가입 처리 및 접근 제한 적용</li>
                <li>공통 UI 컴포넌트 설계: Button, Input 등 재사용 컴포넌트 구성 및 Emotion 기반 스타일링</li>
                <li>마이페이지 구현: 프로필 이미지 업로드 및 개인정보 확인 기능 제공</li>
            </ul>
        `,
        technicalImprovements: `
            <ul class="list-disc pl-6">
                <li>상태 분리 관리: 인증과 UI 상태를 Recoil로 구조화하고 서버 상태는 React Query로 분리</li>
                <li>비동기 UX 최적화: Suspense 기반 로딩 처리 및 단계별 진행 피드백 제공</li>
                <li>성능 최적화 적용: Skeleton UI 도입, Lazy Loading 구현, Lodash 모듈 트리쉐이킹 처리</li>
                <li>컴포넌트 구조 개선: 로직 분리 및 합성 패턴 적용으로 재사용성과 유지보수성 향상</li>
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
    {
        id: '4',
        title: 'Blog App',
        description:
            'React와 Firebase 기반으로 구현한 블로그 SPA입니다. 기초 구조는 학습한 내용을 참고했지만, 상태 관리, 보안 규칙 설정, 폴더 구조 개선 등 실무 흐름을 반영하여 실제 서비스 수준으로 확장했습니다. 사용자 인증, 글/댓글 CRUD, 다크모드, 반응형 대응 등 핵심 블로그 기능을 포함하며, 퍼포먼스와 유지보수성 모두를 고려한 구조로 설계했습니다.',
        year: '2024',
        url: 'https://example.com/4',
        techStacks: [
            'React',
            'typescript',
            'Tailwind CSS',
            'Firebase',
            'Vercel',
        ],
        mainFeatures: `
            <ul class="list-disc pl-6">
                <li>회원가입/로그인/로그아웃: Firebase Auth 기반 인증 및 권한별 접근 제어 구현</li>
                <li>게시글 기능: 작성, 수정, 삭제, 조회 포함한 글 CRUD 구현</li>
                <li>댓글 기능: 각 게시글에 대한 댓글 작성 및 수정/삭제 처리</li>
                <li>다크모드 전환: 로컬 스토리지 기반 테마 전환 및 상태 유지</li>
                <li>카테고리 필터링: 카테고리별 글 필터 기능 및 사용자 전용 글 리스트 구성</li>
                <li>반응형 UI: Tailwind CSS 기반 모바일/데스크톱 대응 설계</li>
            </ul>
            `,
        technicalImprovements: `
            <ul class="list-disc pl-6">
                <li>상태 관리 개선: React Query로 서버 상태를 관리하고 Context로 UI 전역 상태를 분리</li>
                <li>유효성 검사 강화: React Hook Form + Yup 조합으로 입력값 검증 로직 구성</li>
                <li>보안 규칙 설정: Firestore Rules 커스터마이징으로 인증 조건별 읽기/쓰기 권한 설정</li>
                <li>컴포넌트 구조화: 페이지, 컴포넌트, 훅 단위로 폴더 구조 정리하여 유지보수성 향상</li>
                <li>스타일링 개선: Tailwind 도입으로 빠르고 일관된 UI 구현 + 기존 BEM 방식 제거</li>
            </ul>
        `,
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
