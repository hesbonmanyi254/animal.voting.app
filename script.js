document.addEventListener("DOMContentLoaded", () => {
    const animalList = document.getElementById("animal-list");
    const animalImage = document.getElementById("animal-image");
    const animalName = document.getElementById("animal-name");
    const animalVotes = document.getElementById("animal-votes");
    const voteButton = document.getElementById("vote-button");
  
    // Updated sample data with complete image URLs
    const animals = [
        {
            id: 1,
            name: "Mr. Cute",
            image: "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
            votes: 0,
        },
        {
            id: 2,
            name: "Mx. Monkey",
            image: "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
            votes: 0,
        },
        {
            id: 3,
            name: "Ms. Zebra",
            image: "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
            votes: 0,
        },
        {
            id: 4,
            name: "Dr. Lion",
            image: "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
            votes: 0,
        },
        {
            id: 5,
            name: "Mme. Panda",
            image: "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
            votes: 0,
        },
    ];
  
    // Populate the animal list
    animals.forEach((animal) => {
        const listItem = document.createElement("li");
        listItem.textContent = animal.name;
        listItem.addEventListener("click", () => {
            displayAnimalDetails(animal);
        });
        animalList.appendChild(listItem);
    });
  
    // Display animal details
    function displayAnimalDetails(animal) {
        animalImage.src = animal.image;
        animalName.textContent = animal.name;
        animalVotes.textContent = animal.votes;
        voteButton.addEventListener("click", () => {
            animal.votes++;
            animalVotes.textContent = animal.votes;
        });
    }
  
    // Initial display
    if (animals.length > 0) {
        displayAnimalDetails(animals[0]);
    }
  });
  // ... (Your existing code)
  
  // Function to add a new animal to the list
  function addAnimal(name, image) {
    const newAnimal = {
        id: animals.length + 1, // Replace with a suitable unique ID generation
        name: name,
        image: image,
        votes: 0,
    };
  
    animals.push(newAnimal);
  
    // Add the new animal to the list
    const listItem = document.createElement("li");
    listItem.textContent = newAnimal.name;
    listItem.addEventListener("click", () => {
        displayAnimalDetails(newAnimal);
    });
    animalList.appendChild(listItem);
  
    // Reset the form
    document.getElementById("add-animal-form").reset();
  }
  
  // Event listener for the form submission
  document.getElementById("add-animal-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const animalNameInput = document.getElementById("animal-name-input");
    const animalImageInput = document.getElementById("animal-image-input");
    const name = animalNameInput.value.trim();
    const image = animalImageInput.value.trim();
  
    if (name !== "" && image !== "") {
        addAnimal(name, image);
    }
  });