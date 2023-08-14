
import ProjectCard from "./ProjectCard";
import './css/ProjectCardContainer.css'

export default function ProjectCardContainer ({project_cards}:{project_cards:React.ReactElement[]}) {

    return (
    <div className='works_grid'>
        {project_cards}
    </div>
    )

}