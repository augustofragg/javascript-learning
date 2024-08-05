//Progamacao funcional -- Heranca

const defaultUser = {
    name: ' ',
    email: ' ',
    level: 1
}

const user1 = {
    ...defaultUser,
    name: 'Carlos Augusto Fragoso Bastos',
    email: 'augustofragg@gmail.com'
}

console.log(user1);


const adm1 = {
    ...defaultUser,
    name: 'admin',
    email: 'admin@admin.com',
    level: 2
}

console.log(adm1);