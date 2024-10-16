import rdf from "./data/rdf.json"
import { interperseWith } from "../lib/utils"

let cvData = rdf.cv

const extractPerson = () => {
    return m("div.is-flex.is-flex-direction-column.is-align-items-center", [
        m("p.title", cvData.name),
        m("p.subtitle", cvData.jobTitle),
    ])
}

const extractDetails = () => {
    return m("div", [
        m(".title.is-5", "Details"),
        m("a", {
            href: cvData.email,
            target: "_blank",
            rel: "noreferrer"
        }, cvData.email),
        m("p", `${cvData.address.addressLocality} - ${cvData.address.postalCode} - ${cvData.address.addressCountry}`),
    ])
}

const extractProfessionalExperience = () => {
    let Occupations = cvData.hasOccupation.map((occupation) => {
        return m("div", [
            m(".columns", [
                m(".column", [
                    m("p.title.is-4", occupation.roleName),
                    m(".subtitle.is-4", `${occupation.worksFor.name}`)
                ]),
                m(".column.is-one-quarter", [
                    m("p.is-pulled-right",`${occupation.startDate}/${occupation.endDate}`)
                ])
            ]),
            m("ul", occupation.hasOccupation.responsibilities.map((responsibility) => {
                return m("li", responsibility)
            }))
        ])
    })
    Occupations = interperseWith(Occupations, m("br"))
    return m("div", [
        m(".title.is-3", "Professional Experience"),
        m("br"),
        m("div", Occupations)
    ])
}

const extractCourses = () => {
    let Credentials = cvData.hasCredential.map((credential) => {
        return m("div", [
            m("p.title.is-6", credential.name),
            m("p.subtitle.is-6", credential.temporal),
            m("p", credential.recognizedBy.legalName)
        ])
    })
    Credentials = interperseWith(Credentials, m("br"))

    return m("div", [
        m(".title.is-5", "Courses"),
        m("br"),
        m("div", Credentials)
    ])
}

export const getCVModuleFromRdf = () => {
    return {
        person: extractPerson(),
        details:extractDetails(),
        professionalExperience: extractProfessionalExperience(),
        courses: extractCourses()
    }
}