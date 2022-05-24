const nedb = require('nedb-promise');
const database = new nedb({ filename: 'database.db', autoload: true });

/** Databas operationer
 * insert() - Lägg till ny data i en databas
 * update() - Uppdatera befintlig data i en databas baserat på ett sökkriterie
 * find()   - Hitta data baserat på ett sökkriterie i en databas
 * remove() - Ta bort data baserat på ett sökkriterie
 */

// database.insert({ name: 'Christoffer', age: 33 });
// database.insert({ name: 'Ada', age: 30 });

async function getPerson() {
    // Hämta objektet vars namn är Ada
    const person = await database.find({ name: 'Ada' });
    console.log(person);

    // NeDB returnerar alltid en array med resultatet även om det bara är en träff
    // Ifall NeDB inte hittar något så retuneras en tom array
}

getPerson();

// Först väljer vi vilket objekt vi vill uppdatera och sen vad vi ska uppdatera

// database.update({ name: 'Ada' }, { $set: { knownFor: 'First programmer' }});
// database.update({ name: 'Ada' }, { $set: { age: 31 }});

database.remove({ name: 'Ada' });