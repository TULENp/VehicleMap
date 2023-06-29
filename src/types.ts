
export type TAppNavigation = {
    Main: undefined,
    Vehicle: { vehicle: TVehicle },
    Settings: undefined
}

export type TTabNavigation = {
    Map: { vehicles: TVehicle[] },
    List: { vehicles: TVehicle[] },
}

export type TRoute = {
    key: 'list' | 'map',
    title: string
}

export type TVehicle = {
    id: number,
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