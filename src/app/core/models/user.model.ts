export interface User {
    id: string
    Name: Name
    Email: Email
    active: boolean
    createdAt: Date
}

interface Name {
    fisrtname: string,
    lastname: string
}

interface Email {
    address: string
}