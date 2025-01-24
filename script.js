// to hide the quiz section once the user clicks "submit" button

document.addEventListener("DOMContentLoaded", function() {
    // Select the submit button
    const submitButton = document.querySelector(".quiz .btn-success");
    
    // Add click event listener
    submitButton.addEventListener("click", function() {
        // Hide the parent quiz div
        document.querySelector(".quiz").style.display = "none";
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
    goal: ['fiber','balanced','decrease sugar','transfat', 'weight', 'muscle', 'decrease sodium', 'excersise','vitamins','hydration'],
    rest: ['GF', 'DF','veg','vegan','halal','kosher','sugarfree','FODMAP','nutfree','eggfree','antiinflam','nar'],
    md: ['celiac','lactose','diabetes','hypertension','high cholesterol','kidney disease','ibs', 'crohns','nam'],
    age: ['0-30','31-50','50+']
}
//Diets Array
const diet = {
    mediterranean: {
        primary: [args.goal[1],args.rest[10],args.md[7],args.age[1]],
        rank: 0,
        type: "Mediterranean Diet",
        description: "Emphasizes whole grains, lean proteins (especially fish), fruits, vegetables, legumes, nuts, seeds, and olive oil. It is rich in healthy fats, fiber, and antioxidants.",
        icons: ["🍅", "🐟", "🥖"]
    },
    keto: {
        primary: [args.goal[0],args.rest[0],args.md[7],args.age[1]],
        rank: 0,
        type: "Keto Diet",
        description: "A low-carb, high-fat diet The ketogenic (keto) diet and low-carb diets reduce carbohydrate intake and focus on high-fat, moderate protein foods. While the keto diet emphasizes a high-fat, very low-carb approach, low-carb diets may allow for more carbohydrates but still limit high-carb foods like bread, pasta, and sugar.",
        icons: ["🥑", "🥩", "🥓"]
    },
    paleo: {
        primary: [args.goal[4],args.rest[0],args.md[8],args.age[1]],
        rank: 0,
        type: "Paleo Diet",
        description: "Based on the types of foods that ancient hunter-gatherers might have eaten, the paleo diet emphasizes lean meats, fish, fruits, vegetables, nuts, and seeds while eliminating grains, legumes, dairy, processed sugars, and artificial additives.",
        icons: ["🍅", "🐟", "🍗"]
    },
    // vegan: {
    //     type: "Vegan Diet",
    //     description: "A plant-based diet avoiding all animal products.",
    //     icons: ["🥦", "🍎", "🌰"]
    // },
    // vegetarian: {
    //     type: "Vegetarian Diet",
    //     description: "A plant-based diet that avoids meat but may include dairy and eggs.",
    //     icons: ["🥦", "🍳", "🧀"]
    // },
    // whole30: {
    //     type: "Whole30 Diet",
    //     description: "A 30-day program that eliminates sugar, alcohol, grains, legumes, soy, and dairy from your diet. It is designed to help you reset your eating habits and discover how certain foods make you feel.",
    //     icons: ["🍖", "🥦", "🍠"]
    // },
    // glutenFree: {
    //     type: "Gluten-Free Diet",
    //     description: "Eliminates gluten, a protein found in wheat, barley, and rye. It is essential for those with celiac disease, gluten sensitivity, or wheat allergy.",
    //     icons: ["🍞", "🥖", "🥯"]
    // },
    // fodmap: {
    //     type: "Low FODMAP Diet",
    //     description: "Eliminates foods high in FODMAPs (fermentable oligosaccharides, disaccharides, monosaccharides, and polyols) to reduce symptoms of irritable bowel syndrome (IBS).",
    //     icons: ["🍎", "🥦", "🍞"]
    // },
};

console.log(diet)

function loadDietRecommendation(selectedDiet) {
    const userDiet = JSON.parse(localStorage.getItem('top diet'))||selectedDiet;

console.log(userDiet)
    if (diet[userDiet]) {
        document.getElementById("diet-type").innerText = diet[userDiet].type;
        document.getElementById("diet-description").innerText = diet[userDiet].description;

        // const iconsContainer = document.getElementById("diet-icons");
        // iconsContainer.innerHTML = ""; 
        // diet[userDiet].icons.forEach(icon => {
        //     const iconElement = document.createElement("div");
        //     iconElement.innerText = icon;
        //     iconsContainer.appendChild(iconElement);
        // });
    } else {
        document.getElementById("diet-type").innerText = "Diet Not Found";
        document.getElementById("diet-description").innerText = "Please try again.";
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



