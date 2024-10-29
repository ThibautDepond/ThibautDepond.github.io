import rdf from "./data/rdf.json"
import { interperseWith } from "../lib/utils"

let cvData = rdf.cv

const extractPerson = () => {
    return m("div.is-flex.flex-direction-column.align-items-center", [
        m("p.title.is-xx-large.m-0", cvData.name),
        m("p.subtitle.is-large.m-0", cvData.jobTitle),
    ])
}

const extractLanguages = () => {
}

const extractComplementaryInfo = () => {
}

const extractDetails = () => {
    return m("div", [
        m(".title.is-x-large.mb-2", "Details"), //TODO I18n
        m("div", `${cvData.address.addressLocality} - ${cvData.address.postalCode} - ${cvData.address.addressCountry}`),
        m("div",cvData.contactPoints.find((contact) => contact.email != undefined).email)
    ])
}

const extractProfessionalExperience = () => {
    let Occupations = cvData.hasOccupation.map((occupation) => {
        return m(".content", [
            m(".columns", [
                m(".column", [
                    m(".title.is-x-large.", occupation.roleName),
                    m(".subtitle.is-large", `${occupation.worksFor.name}`)
                ]),
                m(".column.is-one-quarter", [
                    m("p.to-right.is-smaller",`${occupation.startDate}/${occupation.endDate}`)
                ])
            ]),
            m("ul", occupation.hasOccupation.responsibilities.map((responsibility) => {
                return m("li", responsibility)
            }))
        ])
    })
    Occupations = interperseWith(Occupations, m("br"))
    return m("div", [
        m(".title.is-xx-large", "Professional Experience"), //TODO I18n
        m("br"),
        m("div", Occupations)
    ])
}

const extractCourses = () => {
    let Credentials = cvData.hasCredential.filter((credential) => {
        return credential.credentialCategory === "diplome"
    })
    Credentials = Credentials.map((credential) => {
        return m("div", [
            m(".title.is-medium", credential.name),
            m(".subtitle.is-medium", credential.temporal),
            m("p", credential.recognizedBy.legalName)
        ])
    })
    Credentials = interperseWith(Credentials, m("br"))

    return m("div", [
        m(".title.is-x-large.mb-2", "Courses"), //TODO I18n
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