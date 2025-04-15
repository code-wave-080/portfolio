interface ProjectPageProps {
    params: {
        id: string
    }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const {id} = params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/meta/${id}`, {
        cache: 'no-store'
    })

    const data = await response.json();

    return <div className="text-white">프로젝트 상세 페이지 - title: {data.title} - description: {data.description}</div>
}
