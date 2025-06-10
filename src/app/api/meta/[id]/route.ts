import { NextRequest } from 'next/server'

const metadataList = [
    {
        id: 'mcard',
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
        images: [
            'mcard_1',
            'mcard_2',
            'mcard_3',
            'mcard_4',
            'mcard_5',
            'mcard_6',
        ],
    },
    {
        id: 'wedding',
        title: 'WEDDING',
        description:
            '결혼식 정보를 효과적으로 전달하면서도 웹 성능과 사용자 경험을 함께 고려한 최적화 중심의 디지털 청첩장 웹 애플리케이션입니다. 인트로 영상, 이미지 갤러리, 참석 여부 확인, 지도, 연락처, 공유 기능 등 실사용을 염두에 둔 기능을 직접 구현했으며 미디어 자산 최적화와 상태 관리 전략을 적용해 빠르고 안정적인 사용자 경험을 제공하는 데 집중했습니다.',
        year: '2025',
        url: 'https://example.com/3',
        techStacks: ['React', 'typescript', 'SASS', 'Firebase', 'Vercel'],
        mainFeatures: `
            <ul class="list-disc pl-6">
                <li>인트로 영상 & 갤러리: WebM 기반 경량 영상, Swiper를 활용한 이미지 갤러리 구현</li>
                <li>청첩장 본문 / 지도 / 일정 안내: KakaoMap, Day Picker를 활용한 위치 및 날짜 표시</li>
                <li>연락처 섹션: 계좌 복사, 전화 연결, 카카오페이 송금 기능을 아코디언 UI로 구성</li>
                <li>참석 여부 확인: 모달 기반 입력, 로컬 스토리지로 상태 저장 처리</li>
                <li>공유 기능: 카카오톡 공유 및 URL 복사 기능 제공</li>
            </ul>
            `,
        technicalImprovements: `
            <ul class="list-disc pl-6">
                <li>미디어 최적화: Squoosh 압축, WebM 포맷 변환, CDN 적용으로 이미지 및 영상 로딩 개선</li>
                <li>렌더링 성능 최적화: useMemo, useCallback, Suspense를 활용한 불필요한 렌더링 방지</li>
                <li>안정성 확보: ErrorBoundary를 통한 하위 컴포넌트 오류 격리 및 Fallback UI 제공</li>
                <li>구조 개선: 로직과 뷰를 분리하여 재사용성과 유지보수성이 높은 컴포넌트 구조 설계</li>
                <li>UX 향상: 명확한 진행 피드백, 정보 공유 편의성, 다양한 사용자 환경 대응 고려</li>
            </ul>
        `,
        images: [],
    },
    {
        id: '3',
        title: 'TWITTER',
        description:
            '실시간 타임라인, OAuth 로그인, 해시태그 검색 등 SNS 서비스의 핵심 기능을 React와 Firebase 기반으로 구현한 프로젝트입니다. Firestore 실시간 동기화, 이미지 업로드, 사용자 인증, 다국어 처리 등 다양한 기능을 통해 사용자 중심의 흐름과 상태 관리 구조를 직접 설계했으며 모바일 대응 및 전역 상태 분리를 고려한 확장 가능한 구조로 구성했습니다.',
        year: '2024',
        url: 'https://example.com/2',
        techStacks: [
            'React',
            'typescript',
            'SCSS',
            'Firebase',
            'Recoil',
            'Vercel',
        ],
        mainFeatures: `
            <ul class="list-disc pl-6">
                <li>홈 타임라인: Firestore onSnapshot 기반 실시간 트윗 목록 표시 및 무한 스크롤 UI 구성</li>
                <li>트윗 CRUD 기능: Firebase Storage를 활용한 이미지 업로드 포함 글 작성/수정/삭제 처리</li>
                <li>OAuth 로그인 및 인증: Google OAuth 및 이메일 기반 회원가입/로그인 구현, 인증 여부에 따른 페이지 접근 제어</li>
                <li>프로필 및 좋아요 탭: 사용자 정보 확인, 좋아요한 게시글 모아보기 탭 구성</li>
                <li>해시태그 시스템: 글 작성 시 자동 해시태그 추출, 검색/탭 필터링 기능 구현</li>
                <li>다국어 설정 기능: 전역 텍스트 상태 관리 및 언어 변경 시 즉시 반영</li>
                <li>반응형 웹 구현: SCSS와 미디어 쿼리를 통해 모바일/데스크톱 UI 대응</li>
            </ul>
        `,
        technicalImprovements: `
            <ul class="list-disc pl-6">
                <li>실시간 데이터 처리: Firestore onSnapshot 구독을 활용한 실시간 타임라인 렌더링</li>
                <li>이미지 업로드 처리: Firebase Storage 연동으로 이미지 등록/수정/삭제 흐름 구성</li>
                <li>상태 분리 관리 전략: 인증 정보는 Recoil, UI/언어 상태는 Context API로 분리하여 역할 명확화</li>
                <li>라우팅 흐름 최적화: 인증 여부에 따라 접근 제어하는 AuthGuard 유사 구조 구현</li>
                <li>다국어 처리: 언어 설정 전역화 및 즉시 반영 가능한 전환 구조 구현</li>
                <li>모바일 대응 설계: 미디어 쿼리 기반 UI 대응 및 유동적 레이아웃 구성</li>
            </ul>
        `,
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
