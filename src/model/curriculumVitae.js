import { interperseWith } from "../lib/utils"
import { Key } from "../lib"
import rdf from "./data/rdf"

let cvData = rdf[i18n.currentLocale || i18n.DEFAULT_LOCALE].cv

const extractPerson = () => {
    return m("div.is-flex.flex-direction-column.align-items-center", [
        m("p.title.is-xx-large.m-0", cvData.name),
        m("p.subtitle.is-large.m-0", cvData.jobTitle),
    ])
}

const extractLanguages = () => {
    let languages = cvData.knowsLanguage.map((language) => {
        let languageCertification = cvData.hasCertification.find((certification) => certification.about['@id'] === language['@id'])
        if (languageCertification) {
            return m("div.mt-3", [
                m("span.title.is-medium", language.name),
                m("span.subtitle.is-medium", ` : ${languageCertification.certificationRating}, ${languageCertification.issuedBy.name}`),
                m("br"),
                m("a.pl-3", { href: languageCertification.url, target: "_blank" }, "", languageCertification.url),
            ])
        }
        return m("div", [
            m("span.title.is-medium", language.name),
        ])
    })
    return m("div", [
        m(".title.is-x-large.mb-2", $t(`${Key.CV}.languages`)),
        languages
    ])
}

const extractComplementaryInfo = () => {
    return m("div", [
        m(".title.is-x-large.mb-2", $t(`${Key.CV}.complementaryInfo`)),
        m("div", cvData.hasCredential.find((credential) => credential.credentialCategory === "administrative right").name)
    ])
}

const extractDetails = () => {
    return m("div", [
        m(".title.is-x-large.mb-2", $t(`${Key.CV}.details`)),
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
        m(".title.is-xx-large", $t(`${Key.CV}.experience`)),
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
        m(".title.is-x-large.mb-2", $t(`${Key.CV}.formation`)),
        m("div", Credentials)
    ])
}

export const getCVModuleFromRdf = () => {
    cvData = rdf[i18n.currentLocale || i18n.DEFAULT_LOCALE].cv
    return {
        person: extractPerson(),
        details:extractDetails(),
        professionalExperience: extractProfessionalExperience(),
        courses: extractCourses(),
        complementaryInfo: extractComplementaryInfo(),
        languages: extractLanguages()
    }
}