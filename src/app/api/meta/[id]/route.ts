import { NextRequest } from 'next/server'

const metadataList = [
    {
        id: '1',
        title: '제목: 첫 번째',
        description: '설명: 첫 번째 항목입니다.',
        year: '2024',
        url: 'https://example.com/1',
        techStacks: ['React', 'Sass', 'Firebase', 'Vercel'],
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
