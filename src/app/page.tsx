'use client'

import Banner from '@/app/components/Banner'
import AboutMe from '@/app/components/AboutMe'
import MyStack from '@/app/components/MyStack'
import MyExperience from '@/app/components/MyExperience'
import MyProjects from '@/app/components/MyProjects'

export default function Home() {
    return (
        <div className="page-">
            <Banner />
            <AboutMe />
            <MyStack />
            <MyExperience />
            <MyProjects />
        </div>
    )
}
