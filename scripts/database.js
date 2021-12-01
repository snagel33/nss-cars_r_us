const database = {
    orderBuilder: {},
    colors: [
        { id: 1, color: "Silver", price: 100 },
        { id: 2, color: "Midnight Blue", price: 200 },
        { id: 3, color: "Firebrick Red", price: 300 },
        { id: 4, color: "Spring Green", price: 400 }
    ],
    interiors: [
        { id: 1, interior: "Beige Fabric", price: 100 },
        { id: 2, interior: "Charcoal Fabric", price: 200 },
        { id: 3, interior: "White Leather", price: 300 },
        { id: 4, interior: "Black Leather", price: 400 }
    ],
    technologies: [
        { id: 1, technology: "Basic Package", price: 100 },
        { id: 2, technology: "Navigation Package", price: 200 },
        { id: 3, technology: "Visibility Package", price: 300 },
        { id: 4, technology: "Ultra Package", price: 400 }
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 100 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 200 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 300 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 400 },
    ],
    customOrders: [
        {
            id: 1,
            colorId: 3,
            interiorId: 2,
            technologyId: 3,
            wheelId: 2,
            timestamp: 1614659931693
        }
    ]
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}