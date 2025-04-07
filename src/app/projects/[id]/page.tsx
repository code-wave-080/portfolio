interface ProjectPageProps {
    params: {
        id: string
    }
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { id } = params

    await delay(1000)

    return <div>프로젝트 상세 페이지 - ID: {id}</div>
}
