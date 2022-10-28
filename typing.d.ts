interface SanityBody {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
}

interface Image{
    _type : "Image"
    asset:{
        _ref: string
        _type: "reference"
    }
}

export interface PageInfo extends SanityBody{
    _type: "pageinfo"
    aboutpic: Image
    email: string
    location: string
    phonenumber: string
    profilepic: Image
    social: Social[]
}

export interface Skill extends SanityBody{
    _type: "skill"
    image: Image
    progress: number
    title: string
}

export interface Experience extends SanityBody{
    _type: "experience"
    companyname: string
    duration: string
    jobtitle: string
    companypic: Image
    technologies: Skill[]
}


export interface Social extends SanityBody{
    _type: "social"
    title: string
    url: string
}