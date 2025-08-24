import { NextRequest } from 'next/server'

const metadataList = [
    {
        id: 'xeno',
        companyName: 'XENOIMPACT',
        position: 'Frontend Developer',
        startDate: '2022.01',
        endDate: null,
        projects: [
            {
                id: 'kori',
                projectName: 'Kori Chat App',
                startDate: '2025.08',
                endDate: null,
                summary: '데스크톱·브라우저 환경에서 동작하는 AI 기반 채팅 애플리케이션 개발',
                achievements: `
                    <ul class="list-disc pl-6">
                        <li>파일 업로드 상태 아이콘의 구조를 단순화하고 CSS 애니메이션을 적용해 사용자가 전송 상태를 직관적으로 인지할 수 있도록 개선</li>
                        <li>Electron 환경 설정 및 패키징을 통해 멀티 플랫폼 배포 기반을 마련</li>
                        <li>Vitest 기반 테스트 환경을 도입하여 핵심 기능의 안정성 검증과 배포 품질 향상 지원</li>
                    </ul>
                `,
                techStacks: [
                    'Vue3',
                    'TypeScript',
                    'Electron',
                    'SCSS',
                    'Tailwind CSS',
                    'Pinia',
                    'Vitest',
                ],
            },
            {
                id: 'cargo',
                projectName: '화물 적재 시뮬레이션',
                startDate: '2025.05',
                endDate: null,
                summary: 'Three.js 기반 화물 적재 시뮬레이션 시스템 개발',
                achievements: `
                    <ul class="list-disc pl-6">
                        <li>useCargoStore 기반의 상태 관리 구조를 설계해 적재 데이터의 일관성과 확장성을 확보</li>
                        <li>커스텀 SVG를 각 면의 비율에 따라 자동으로 비율이 조정되도록 처리해 UI 왜곡 없이 정확한 출력 구현</li>
                        <li>CanvasTexture 생성 시 해시 키로 관리하는 캐싱 전략으로 적용하여 GPU 메모리 사용량을 절감하고 렌더링 성능 개선</li>
                        <li>하이라이트 상태를 4가지로 구분하여 렌더링 처리 효율과 코드 유지보수성 개선</li>
                        <li>ViewCube 클릭 기반 시점 전환 기능 구현으로 UX 직관성 강화 및 인터랙션 간소화</li>
                        <li>컨테이너와 화물의 무게중심 기능을 시각화하여 적재 안정성 검토 효율성 향상</li>
                    </ul>
                `,
                techStacks: [
                    'Vue3',
                    'TypeScript',
                    'Three.js',
                    'Tailwind CSS',
                    'Pinia',
                ],
            },
            {
                id: 'arches',
                projectName: 'Arches',
                startDate: '2023.01',
                endDate: '2025.05',
                summary: 'CRM 솔루션 신규 모듈 개발 및 유지보수',
                achievements: `
                    <ul class="list-disc pl-6">
                        <li>Vue2 기반 시스템을 Vue3 + TypeScript로 마이그레이션하며 전체 모듈의 약 80%를 직접 개선하여 코드 복잡도와 유지보수 시간을 단축</li>
                        <li>비용 부담이 있던 기존 유료 에디터를 확장성과 커스터마이징 유연성이 높은 Tiptap으로 교체하고, 이미지 삽입, 입력·출력 화면 간 일관성 등 복합 요구사항을 반영해 기능 구현 주도</li>
                        <li>Chart.js의 성능 및 시각화 한계를 보완하기 위해 ECharts로 전환하고, 데이터 중심의 인터랙션을 강화하여 사용자 시각적 해석력 향상</li>
                        <li>주요 API에 캐싱 전략을 적용해 중복 호출을 25% 이상 줄이고, 평균 API 응답 속도를 약 40% 단축</li>
                        <li>신규 모듈 개발에서 전체 구조와 기능 구현을 주도하였고, 반복 UI는 공통 컴포넌트로 설계·구현하여 전체 화면에 재사용되도록 구조화</li>
                        <li>SEO 및 접근성 향상을 위해 페이지 이동 시 브라우저 탭 제목을 자동으로 갱신하는 메타 정보 처리 로직을 구현</li>
                        <li>로그인 자동완성 기능 등 사용자 편의성 향상을 위한 개선 요소를 지속적으로 도입</li>
                    </ul>
                `,
                techStacks: [
                    'Vue3',
                    'TypeScript',
                    'Vite',
                    'Style-Components',
                    'Echarts',
                    'Tiptap',
                ],
            },
            {
                id: 'storybook',
                projectName: '공통 컴포넌트 문서화',
                startDate: '2023.09',
                endDate: '2024.01',
                summary: 'Storybook 기반 공통 컴포넌트 문서화',
                achievements: `
                    <ul class="list-disc pl-6">
                        <li>구두 중심이던 QA 커뮤니케이션의 비효율을 개선하기 위해 Storybook 기반 컴포넌트 문서화를 적용</li>
                        <li>자주 사용되는 Tab, Dialog, Toast 등 10개 이상의 공통 컴포넌트를 직접 문서화하여 사용법, 상태별 동작, 예외 케이스을 명확히 정의</li>
                        <li>시각화된 문서를 통해 개발자 간 커뮤니케이션 오류를 줄이고, 테스트 요청 및 코드 리뷰 소요 시간을 단축</li>
                        <li>도입 이후 신규 기능 개발 시 문서 기반 재사용이 활성화되어, 컴포넌트 적용률 및 유지보수 효율이 향상</li>
                    </ul>
                `,
                techStacks: ['Vue3', 'Typescript', 'Storybook'],
            },
            {
                id: 'maru',
                projectName: 'Maru',
                startDate: '2022.01',
                endDate: '2022.12',
                summary: '관리자 페이지 유지보수 및 기능 개선',
                achievements: `
                    <ul class="list-disc pl-6">
                        <li>공통코드와 그룹코드 기능을 개발해 사용자 권한을 세분화하고, 권한 기반 메뉴 접근 제어를 구현</li>
                        <li>메뉴 항목 및 정렬 순서를 설정할 수 있는 기능을 구축하여 관리자 화면의 운영 편의성 향상</li>
                        <li>SQL 분기 로직을 CASE 문으로 개선해 상태값 리스트 불일치 문제를 해결하고, UI 조건 로직 수정으로 색상 반영 오류를 해소</li>
                        <li>레거시 코드를 기능 단위로 리팩터링하고 의존성 최소화를 통해 구조적 확장성과 유지보수 효율성 확보</li>
                        <li>UI/UX를 전반적으로 개선하고, 누적된 버그 및 데이터 동기화 오류를 해결해 시스템 안정성과 렌더링 성능 개선</li>
                    </ul>
                `,
                techStacks: ['Vue2', 'JavaScript', 'Spring', 'Java', 'MySQL'],
            },
        ],
    },
]

export async function GET(request: NextRequest, { params }) {
    const { id } = params

    const metadata = metadataList.find((item) => item.id === id)

    return new Response(JSON.stringify(metadata), {
        headers: { 'Content-Type': 'application/json' },
    })
}
