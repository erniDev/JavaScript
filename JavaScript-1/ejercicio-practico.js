//Social media Profile

//1. User Information
const username = 'ernidev'
const fullName = 'Erick Gonzalez'
const age = 26
const isStudent = true

//2. Address
const address = {
    street: '123 Main Street',
    city: 'Techville',
    state: 'CodingLand',
    zipCode: 12341
}

//3. Hobbies
const hobbies = ['Coding', 'PlayVideoGames','Read']

//4. Generating personalized bio
const personalizedBio = `Hola, soy ${fullName}.
Tengo ${age} anios.
Vivo en ${address.city}.
Me encanta ${hobbies.join(', ')}.
Sígueme para mas aventuras de código!`

//5. Print message 
console.log(personalizedBio)