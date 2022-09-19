// STRETCH
const cars = [
    {
        vin: '3HGCM56364G702777',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '3G1JC1245WS848211',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: 'JM1BG2246R0816241',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)  
}