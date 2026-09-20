const guitars = [
    {
        id: 1,
        title: 'Ibanez S6570SK-STB Prestige',
        stock: 0,
    },
    {
        id: 2,
        title: 'Fender AM Ultra Luxe Strat MN PRB',
        stock: 2,
    },
    {
        id: 3,
        title: 'FGN Expert Odyssey SBB',
        stock: 11,
    },
    {
        id: 4,
        title: 'Gibson SG Standard Reissue Cherry VOS',
        stock: 1,
    },
    {
        id: 5,
        title: 'Jackson SL2A MAH Pro Soloist UWH',
        stock: 25,
    },
];

// A lista konténer elem kijelölése
const guitarList = document.getElementById('guitar-list');

// Végigmegyünk a tömb elemein
guitars.forEach(guitar => {
    // 1. Új <li> elem létrehozása
    const listItem = document.createElement('li');

    // 2. Szöveges tartalom beállítása (név és darabszám)
    listItem.textContent = `${guitar.title} - Készleten: ${guitar.stock} db`;

    // 3. Style binding használata a készlet alapján:
    // Ha a stock === 0 -> piros ('red'), különben -> zöld ('green')
    listItem.style.color = guitar.stock === 0 ? 'red' : 'green';

    // 4. Az elkészült <li> elem hozzáadása a listához
    guitarList.appendChild(listItem);
});