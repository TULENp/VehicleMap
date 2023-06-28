
export type TAppNavigation = {
    Main: undefined,
    Vehicle: undefined,
    Settings: undefined
}

export type TVehicle = {
    id: number,
    name: string,
    category: string,
    driver: {
        name: string,
        number: string
    },
    location: {
        latitude: number,
        longitude: number
    }
}