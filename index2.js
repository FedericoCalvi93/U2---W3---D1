const namePetInput = document.getElementById('firstname-field')

const ownerPetInput = document.getElementById('owner-field')

const speciesPetInput = document.getElementById('species-field')

const breedPetInput = document.getElementById('breed-field')

const contacts = []

class Contact {
    constructor (_firstName, _owner, _species, _breed
    ) {
    this.firstName = _firstName
    this.owner = _owner
    this.species = _species
    this.breed = _breed
    }
    sameOwners() {
        if(x.owner === y.owner) {
            return true
        }
        else (x.owner != y.owner);{
            return false
        }
    }
}

const x = new Contact (
    'Ulisse',
    'Luca',
    'Dog',
    'Dobermann'
)

const y = new Contact (
    'Spike',
    'Luca',
    'Dog',
    'Labrador'
)

console.log(x.owner === y.owner)

const showList = function () {
    const contactsList = document.querySelector('ul')
    contactsList.innerHTML = ''
    contacts.forEach((contact) => {
        const newLi = document.createElement('li')
        newLi.innerText = `${contact.firstName} ${contact.owner} ${contact.species} ${contact.breed}`
    contactsList.appendChild(newLi)
  })
    }

    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();

  const newContact = new Contact(
    firstNameInput.value,
    ownerPetInput.value,
    speciesPetInput.value,
    breedPetInput.value
  )

  console.log('CONTATTO CREATO', newContact)
  contacts.push(newContact)
  firstNameInput.value = ''
  ownerPetInput.value = ''
  speciesPetInput.value = ''
  breedPetInput.value = ''

  showList()
})