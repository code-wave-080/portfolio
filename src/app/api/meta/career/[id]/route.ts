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
                id: 'cargo',
                projectName: '화물 적재 시뮬레이션',
                startDate: '2025.05',
                endDate: null,
                summary: 'Three.js 기반 화물 적재 시뮬레이션 시스템 개발',
                achievements: `
                    <ul class="list-disc pl-6">
                        <li>useCargoStore를 활용해 화물, 컨테이너 목록, 적재 상태를 통합 관리하여 상태 일관성과 데이터 흐름 안정성 확보</li>
                        <li>Three.js로 적재 결과를 3D로 시각화하고, 사용자 입력에 따라 반영되는 실시간 인터랙션 및 반투명 처리, 라벨 표시 등 시각 효과 구현</li>
                        <li>Tailwind CSS 기반의 반응형 UI를 구성하고, 팝업·패널·레이아웃을 유연하게 설계하여 다양한 화면에서의 UX 개선</li>
                        <li>화물 추가/편집, 컨테이너 목록 테이블 관리, 로딩 컴포넌트 등 기능 모듈화로 유지보수성과 확장성 강화</li>
                    </ul>
                `,
                techStacks: [
                    'Vue3',
                    'TypeScript',
                    'Tailwind CSS',
                    'Three.js',
                    'Pinia',
                ],
            },
            {
                id: 'arches',
                projectName: 'Arches',
                startDate: '2023.01',
                endDate: null,
                summary: 'CRM 솔루션 신규 모듈 개발 및 유지보수',
                achievements: `
                    <ul class="list-disc pl-6">
                        <li>Vue2 기반 시스템을 Vue3로 마이그레이션하고, JavaScript 코드를 TypeScript로 변환하는 과정에서 전체 모듈의 약 90% 이상을 직접 개선하여 렌더링 성능과 코드 안정성, 기술 확장성을 강화</li>
                        <li>ComTextEditor, ComCalendar 등 공통 컴포넌트를 개발하여 반복 UI를 모듈화하고, 전반적인 화면에서 일관된 UX를 제공함으로써 유지보수성과 개발 효율 향상</li>
                        <li>Chart.js의 성능 및 시각화 한계를 보완하기 위해 ECharts로 전환하고, 데이터 중심의 인터랙션을 강화하여 사용자 시각적 해석력 향상</li>
                        <li>주요 API에 캐싱 전략을 적용하여 중복 호출을 줄이고 응답 속도를 최적화함으로써 사용자 경험 개선</li>
                        <li>페이지 전환 시 document.title을 자동으로 갱신하도록 구현하여 SEO 지표 개선 및 시각장애인 사용자를 고려한 접근성 강화</li>
                        <li>로그인 화면에 자동완성 기능을 적용하여 입력 편의성을 개선하고, 로그인 흐름을 간소화하여 사용자 만족도 향상</li>
                        <li>Tiptap 등 외부 라이브러리를 커스터마이징하여 프로젝트 요구사항에 맞춘 기능을 유연하게 확장하고, 라이브러리 기반 개발 역량 강화</li>
                        <li>데이터 동기화 오류 및 API 명세 불일치와 같은 협업 이슈에 대해 백엔드 개발자와 긴밀히 소통하며 신속히 문제를 해결하고 서비스 안정성 확보</li>
                        <li>반복적으로 발생하던 처리 오류를 개선하고 방지 로직을 도입하여 기술 부채 해소 및 시스템 전반의 안정성 향상</li>
                    </ul>
                `,
                techStacks: [
                    'Vue3',
                    'TypeScript',
                    'Style-Components',
                    'Vite',
                    'Vue-Router',
                    'Echarts',
                    'Tiptap',
                    'Vuelidate',
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
                        <li>Storybook 기반의 문서화를 도입하여 기존에 구두로 진행되던 QA 커뮤니케이션을 시각적 문서 중심으로 전환</li>
                        <li>약 20개 이상의 공통 컴포넌트를 문서화하며 컴포넌트 재사용성과 유지보수 편의성이 강화</li>
                        <li>문서 기반으로 컴포넌트 사용법과 예외 케이스를 명확히 정리하여, 개발자 간 커뮤니케이션 오류를 줄이고 협업 효율을 높임</li>
                    </ul>
                `,
                techStacks: [
                    'Storybook',
                    'Vue3',
                    'Typescript',
                    'Style-Components',
                ],
            },
            {
                id: 'maru',
                projectName: 'Maru',
                startDate: '2022.01',
                endDate: '2022.12',
                summary: '관리자 페이지 개선',
                achievements: `
                    <ul class="list-disc pl-6">
                        <li>공통코드, 그룹코드, 메뉴 관리 등 주요 관리자 기능의 유지보수 및 UI/UX 개선을 통해 사용자 편의성과 가시성을 향상</li>
                        <li>기존 스파게티성 코드를 기능 단위로 리팩터링하여 가독성과 유지보수 효율성 향상, 의존성 최소화로 확장성 확보</li>
                        <li>SQL IF 구문을 CASE 구문으로 전환하여 조건 분기 로직 단순화 및 데이터 처리 안정성 강화</li>
                        <li>누적된 UI 버그 및 데이터 동기화 오류 해결을 통해 시스템 안정성과 렌더링 성능 개선</li>
                        <li>사용자 VOC를 기반으로 반복 개선 작업을 수행, 기능 요청 반영 속도 단축 및 운영 효율성 향상</li>
                    </ul>
                `,
                techStacks: [
                    'Vue2',
                    'JavaScript',
                    'Spring Framework',
                    'Java',
                    'MySQL',
                ],
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
