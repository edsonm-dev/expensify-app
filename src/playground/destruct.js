/* const book={
    title:'Ego is the enemy',
    author:'Ryan',
    publisher:{
        
        location:'NY'
    }
}

const {name='Self published'}=book.publisher

console.log(`publisher is: ${name}`); */


const address=['23','noszlopy utca','budapest','Hungary']

const [,street,city]=address
const item=['coffee','2 dollarov','3 dollarov']
const [itm,,price]=item

console.log(`A medium ${itm} costs ${price}`);
