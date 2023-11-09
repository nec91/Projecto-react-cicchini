const products = [
    { id: '1', name: 'Electra', category: 'Inverter', price: 1000, stock: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', img: "../public/aire1.jpg" },
    { id: '2', name: 'Hyundai', category: 'Inverter', price: 2000, stock: 2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', img: "../public/aire2.png" },
    { id: '3', name: 'Philco', category: 'Inverter', price: 3000, stock: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', img: "../public/aire3.jpg" },
    { id: '4', name: 'Surrey', category: 'Frio-Calor', price: 4000, stock: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', img: "../public/aire4.avif" },
    { id: '5', name: 'Candy', category: 'Frio-Calor', price: 5000, stock: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', img: "../public/aire5.webp" }
]

export const mFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id ? products.find(prod => prod.id === id) : products)
        }, 500)

    })
}


