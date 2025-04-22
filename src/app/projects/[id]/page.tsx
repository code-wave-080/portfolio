interface ProjectPageProps {
    params: {
        id: string
    }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { id } = params

    return <div>프로젝트 상세 페이지 - ID: {id}</div>
}
