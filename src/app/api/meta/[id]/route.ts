import {NextRequest} from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params

    const metadata = {
        title: `제목: ${id}`,
        description: `설명: ${id}에 대한 설명입니다.`,
    }

    return new Response(JSON.stringify(metadata), {
        headers: { 'Content-Type': 'application/json' },
    })
}
