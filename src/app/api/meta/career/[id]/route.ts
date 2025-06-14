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
                id: '1',
                projectName: '화물 적재 시뮬레이션',
                startDate: '2025.05',
                endDate: null,
            },
            {
                id: '2',
                projectName: 'Arches',
                startDate: '2023.01',
                endDate: null,
            },
            {
                id: '3',
                projectName: '공통 컴포넌트 문서화',
                startDate: '2023.09',
                endDate: '2024.01',
            },
            {
                id: '4',
                projectName: 'Maru',
                startDate: '2022.01',
                endDate: '2022.12',
            },
        ],
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
