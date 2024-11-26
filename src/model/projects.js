import content from "./data/content.json"
import { Key } from "../lib"
import { BAB } from "../lib"
import media from "../media"

const projects = content.projects

export const getProjects = () => {
    const projectList = []
    for (const project of projects) {
        let aProject = m(".box.w-40.is-flex.flex-direction-row", [
            m(".is-flex.align-items-center.no-select", 
                m("figure.m-0.x128.no-select", [
                    m("img.no-select", { src: media.projects[`img${project.ID}`] })
                ]),
            ),
            m(".is-flex.flex-direction-column.flex-grow-2.ml-2", [
                m(".title.is-medium", $t(`${Key.PROJECTS}.${project.ID}.name`)),
                m("p.subtitle.is-small", $t(`${Key.PROJECTS}.${project.ID}.description`)),
            ])
        ])
        projectList.push(aProject)
    }
    return projectList
}