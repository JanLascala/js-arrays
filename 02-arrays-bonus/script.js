const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// !! my first approach !!
//      const reversedTeachers = teachers.reverse();
//      console.log(reversedTeachers)

//!! my second approach !!

function reverseArray(teachers) {
  let reversed = [];
  for (let i = teachers.length - 1; i >= 0; i--) {
    reversed.push(teachers[i]);
  }
  return reversed;
}
const reversedTeachers = reverseArray(teachers)
console.log(reversedTeachers)     /* researched, done, not understood 100% */


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
//lenght! 

function longestString() {
  let longestString = "";
  for (let i = 0; i < teachers.length; i++) {
    if (
      typeof teachers[i] === "string" &&
      teachers[i].length > longestString.length
    ) {
      longestString = teachers[i];
    }
  }
  return longestString;
}
const longNames = longestString();
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers

const index_of_Ed = teachers.indexOf(`Ed`)
console.log(index_of_Ed)

if (index_of_Ed !== -1) {
  teachers.splice(index_of_Ed, 1);
}

console.log(teachers)   /*did but not undertstood 100%*/


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

const isFabioPresent = teachers.includes(`Fabio`);
console.log(isFabioPresent)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

const teachersString = null;