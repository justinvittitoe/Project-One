// to hide the quiz section once the user clicks "submit" button

document.addEventListener("DOMContentLoaded", function() {
    // Select the submit button
    const submitButton = document.querySelector(".quiz .btn-success");
    const resultsDiv = document.querySelector(".results");
    resultsDiv.style.display = "none";
    
    // Add click event listener
    submitButton.addEventListener("click", function() {
        // Hide the parent quiz div
        document.querySelector(".quiz").style.display = "none";
        document.querySelector(".results").style.display = "block";
    });
});

//querySelector
const goalbtn = document.querySelector('#goal');
const restbtn = document.querySelector('#rest');
const mdbtn = document.querySelector('#md');
const agebtn = document.querySelector('#age');
const submit = document.querySelector('#submit')

//Preference choices
const args = {
    goal: ['fiber','balanced','decrease sugar','transfat','weight','muscle','decrease sodium','disease prevention'],
    rest: ['GF','DF','veg','vegan','sugarfree','FODMAP','antiinflam','nar'],
    md: ['celiac','lactose','diabetes','hypertension','high cholesterol','ibs', 'crohns','nam'],
    age: ['0-30','31-50','50+']
}

//Diets Array
const diet = {
    mediterranean: {
        primary: [args.goal[1],args.rest[10],args.md[7],args.age[0],args.age[1],args.age[2]],
        rank: 0,
        type: "Mediterranean Diet",
        description: "Emphasizes whole grains, lean proteins (especially fish), fruits, vegetables, legumes, nuts, seeds, and olive oil. It is rich in healthy fats, fiber, and antioxidants.",
        icons: ["🍅", "🐟", "🥖"]
    },
    keto: {
        primary: [args.goal[0],args.rest[6],args.md[7],args.age[0],args.age[1],args.age[2]],
        rank: 0,
        type: "Keto Diet",
        description: "A low-carb, high-fat diet The ketogenic (keto) diet and low-carb diets reduce carbohydrate intake and focus on high-fat, moderate protein foods. While the keto diet emphasizes a high-fat, very low-carb approach, low-carb diets may allow for more carbohydrates but still limit high-carb foods like bread, pasta, and sugar.",
        icons: ["🥑", "🥩", "🥓"]
 
    },
    paleo: {
        primary: [args.goal[5],args.rest[4],args.md[8],args.age[0],args.age[1],args.age[2]],
        rank: 0,
        type: "Paleo Diet",
        description: "Based on the types of foods that ancient hunter-gatherers might have eaten, the paleo diet emphasizes lean meats, fish, fruits, vegetables, nuts, and seeds while eliminating grains, legumes, dairy, processed sugars, and artificial additives.",
        icons: ["🍅", "🐟", "🍗"]

    },
    vegan: {
        primary: [args.goal[2],args.rest[3],args.md[1],args.age[0],args.age[1],args.age[2]],
        rank: 0,
        type: "Vegan Diet",
        description: "A plant-based diet avoiding all animal products.",
        icons: ["🥦", "🍎", "🌰"]

    },
    vegetarian: {
        primary: [args.goal[3],args.rest[2],args.md[4],args.age[0],args.age[1],args.age[2]],
        rank: 0,
        type: "Vegetarian Diet",
        description: "A plant-based diet that avoids meat but may include dairy and eggs.",
        icons: ["🥦", "🍳", "🧀"]
 
    },
    whole30: {
        primary: [args.goal[4],args.rest[1],args.md[2],args.age[0],args.age[1],args.age[2]],
        rank: 0,
        type: "Whole30 Diet",
        description: "A 30-day program that eliminates sugar, alcohol, grains, legumes, soy, and dairy from your diet. It is designed to help you reset your eating habits and discover how certain foods make you feel.",
        icons: ["🍖", "🥦", "🍠"]

    },
    glutenFree: {
        primary: [args.goal[6],args.rest[0],args.md[0],args.age[0],args.age[1],args.age[2]],
        rank: 0,
        type: "Gluten-Free Diet",
        description: "Eliminates gluten, a protein found in wheat, barley, and rye. It is essential for those with celiac disease, gluten sensitivity, or wheat allergy.",
        icons: ["🍞", "🥖", "🥯"]

    },
    fodmap: {
        primary: [args.goal[7],args.rest[5],args.md[6],args.age[0],args.age[1],args.age[2]],
        rank: 0,
        type: "Low FODMAP Diet",
        description: "Eliminates foods high in FODMAPs (fermentable oligosaccharides, disaccharides, monosaccharides, and polyols) to reduce symptoms of irritable bowel syndrome (IBS).",
        icons: ["🍎", "🥦", "🍞"]

    },
};

//Diet Videos
const dietVideos = {
    mediterranean: src="https://www.youtube.com/embed/2N0cRpuWz5U?si=JH3RCVO-j0_DXF7A",
    keto: src="https://www.youtube.com/embed/lddvPqgnZ_A?si=fOEoagUei42HjG9d" ,
    paleo: src="https://www.youtube.com/embed/R9mN-d2CDUU?si=w6d7BsRR56tiujH8" ,
    vegan: src="https://www.youtube.com/embed/uP2iVO9Rip8?si=P3NYKptVkRIIIxZc",
    vegetarian: src="https://www.youtube.com/embed/K8mGm2KLlCk?si=WtLAZRdvaIcic0Hg",
    whole30: src="https://www.youtube.com/embed/6vNAAwRn5cg?si=kQZSKbJe0R0eqAnR",
    glutenFree: src="https://www.youtube.com/embed/SHn21tbdyu4?si=JkTcKXvnk1zIZMc5",
    fodmap: src="https://www.youtube.com/embed/kGHVVyX6kQw?si=moU6TPXapCPRh66F"
};

console.log(diet)

function loadDietRecommendation(selectedDiet) {
    const userDiet = JSON.parse(localStorage.getItem('top diet'))||selectedDiet;

    if (diet[userDiet]) {
        document.getElementById("diet-type").innerText = diet[userDiet].type;
        document.getElementById("diet-description").innerText = diet[userDiet].description;
        document.getElementById("diet-video").src = dietVideos[userDiet];

    } else {
        document.getElementById("diet-type").innerText = "Diet Not Found";
        document.getElementById("diet-description").innerText = "Please try again.";
        document.getElementById("diet-video").src = "";
    }
}

//Get user selections
function getUserSelection(event) {
    event.preventDefault();
    const userSelection = {
        goal: '',
        rest: '',
        md: '',
        age: ''
    }
    userSelection.goal = document.getElementById('goal').value;
    userSelection.rest = document.getElementById('rest').value;
    userSelection.md = document.getElementById('md').value;
    userSelection.age = document.getElementById('age').value;
    console.log(userSelection)
    //save to local storage
    localStorage.setItem('userSelection',JSON.stringify(userSelection));
    
    for (const dietType in diet) {
        const primaryArray = diet[dietType].primary;
        //for each value in the primary array check to see if the user selection matches and if so add to the rank
        console.log(primaryArray)
        for(const value of primaryArray) {
            if (value === userSelection.goal) {
                diet[dietType].rank += 3;
            }
            if (value === userSelection.rest) {
                diet[dietType].rank += 1;
            }
            if (value === userSelection.md) {
                diet[dietType].rank += 1;
            }
            if (value === userSelection.age) {
                diet[dietType].rank += 1;
            }
        }
    }

    //sort diets by rank
    const sortedDiets = Object.keys(diet).sort((a,b) => diet[b].rank - diet[a].rank);
    console.log(sortedDiets);
    //display top diet
    const selectedDiet = sortedDiets[0];
    console.log(selectedDiet);
    localStorage.setItem('topDiet',JSON.stringify(selectedDiet));
    loadDietRecommendation(selectedDiet);
} 

//Event Listener for User Selections
submit.addEventListener('click',getUserSelection)
//retrieve user selection and rank diets
function getUserSelectionFromLocalStorage() {
    const storedSelection = localStorage.getItem('userSelection');
    if (storedSelection) {
         
    }
    return null;
}

document.addEventListener('mousemove', function () {
    const scrollThreshold = window.innerHeight / 2; // Adjust this value as needed
    if (window.scrollY > scrollThreshold) {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});


// Get modal elements
const modal = document.getElementById('signInModal');
const openModalButton = document.getElementById('openModalButton');
const closeModal = document.getElementById('closeModal');
const signInForm = document.getElementById('signInForm');
const welcomeMessage = document.getElementById('welcomeMessage');

// Open modal
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Handle form submission
signInForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from reloading the page
  const username = document.getElementById('username').value;
  welcomeMessage.textContent = `Welcome, ${username}!`;
  modal.style.display = 'none'; // Close the modal
});

// Hover Card Functionality

document.querySelectorAll('.flip-card').forEach((card) => {
    card.addEventListener('click', () => {
        const flipCardInner = card.querySelector('.flip-card-inner');
        flipCardInner.classList.toggle('flipped');
    });
});
