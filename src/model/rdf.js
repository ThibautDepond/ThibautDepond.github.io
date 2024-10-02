import rdf from "./data/rdf.json"

const getRDFData = (subject) => {
    return rdf[subject] || null 
}

export const createJSONLDscript = (pageName) => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    const triplets = getRDFData(pageName)
    if (triplets != null) {
        script.innerHTML = JSON.stringify(triplets)
        return script
    }
    return null
}