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


//Prefrence choices
const args = {
    goal: ['fiber','balanced','decrease sugar','transfat', 'weight', 'muscle', 'decrease sodium', 'excersise','vitamins','hydration'],
    rest: ['GF', 'DF','veg','vegan','halal','kosher','sugarfree','FODMAP','nutfree','eggfree','antiinflam'],
    md: ['celiac','lactose','diabetes','hypertension','high cholesterol','kidney disease','ibs', 'crohns'],
    age: ['0-30','31-50','50+']
}
//Diets Array
const diet = [
    mediterranean = {
        primary: [args.goal[1],args.goal[4],args.goal[8],args.rest[10],args.md[2],args.md[4],args.md[6],args.age[0],args.age[1],args.age[2]],
        rank: 0
    },
    keto = {
        primary: [args.goal[0],args.goal[2],args.goal[4],args.goal[5],args.goal[6],args.rest[0],args.rest[5],args.md[0],args.md[7],args.age[1]],
        rank: 0
    },
    paleo = {
        primary: [args.goal[0],args.goal[1],args.goal[2],args.goal[3],args.goal[5],args.rest[0],args.rest[1],args.rest[6],args.md[0],args.md[7],args.age[1]],
        rank: 0
    }
]
console.log(diet)

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

// Diet types and descriptions (use userDiet)
const dietData = {
    "Keto": {
        type: "Keto Diet",
        description: "A low-carb, high-fat diet The ketogenic (keto) diet and low-carb diets reduce carbohydrate intake and focus on high-fat, moderate protein foods. While the keto diet emphasizes a high-fat, very low-carb approach, low-carb diets may allow for more carbohydrates but still limit high-carb foods like bread, pasta, and sugar.",
        icons: ["🥑", "🥩", "🥓"]
    },
    "Vegan": {
        type: "Vegan Diet",
        description: "A plant-based diet avoiding all animal products.",
        icons: ["🥦", "🍎", "🌰"]
    },
    "Vegetarian": {
        type: "Vegetarian Diet",
        description: "A plant-based diet that avoids meat but may include dairy and eggs.",
        icons: ["🥦", "🍳", "🧀"]
    },
    "Mediterranean": {
        type: "Mediterranean Diet",
        description: "Emphasizes whole grains, lean proteins (especially fish), fruits, vegetables, legumes, nuts, seeds, and olive oil. It is rich in healthy fats, fiber, and antioxidants.",
        icons: ["🍅", "🐟", "🥖"]
    },
    "Paleo": {
        type: "Paleo Diet",
        description: "Based on the types of foods that ancient hunter-gatherers might have eaten, the paleo diet emphasizes lean meats, fish, fruits, vegetables, nuts, and seeds while eliminating grains, legumes, dairy, processed sugars, and artificial additives.",
        icons: ["🍅", "🐟", "🍗"]  
    },
    "Whole30": {
        type: "Whole30 Diet",
        description: "A 30-day program that eliminates sugar, alcohol, grains, legumes, soy, and dairy from your diet. It is designed to help you reset your eating habits and discover how certain foods make you feel.",
        icons: ["🍖", "🥦", "🍠"]
    },
    "GlutenFree": {
        type: "Gluten-Free Diet",
        description: "Eliminates gluten, a protein found in wheat, barley, and rye. It is essential for those with celiac disease, gluten sensitivity, or wheat allergy.",
        icons: ["🍞", "🥖", "🥯"]
    },
    "FODMAP": {
        type: "Low FODMAP Diet",
        description: "Eliminates foods high in FODMAPs (fermentable oligosaccharides, disaccharides, monosaccharides, and polyols) to reduce symptoms of irritable bowel syndrome (IBS).",
        icons: ["🍎", "🥦", "🍞"]
    },
    "Kosher": {
        type: "Kosher Diet",
        description: "A diet that follows Jewish dietary laws. It includes specific rules for the types of animals that can be eaten, how they are prepared, and which foods can be eaten together.",
        icons: ["🥩", "🍇", "✡️"]
    },
    "Halal": {
        type: "Halal Diet",
        description: "A diet that follows Islamic dietary laws. It includes specific rules for the types of animals that can be eaten, how they are prepared, and which foods can be eaten together.",
        icons: ["🥩", "🍇", "☪️"]
    },
};

    function loadDietRecommendation() {
            const selectedDiet = localStorage.getItem("userDiet") || "Mediterranean"; 
    
            if (dietData[selectedDiet]) {
                document.getElementById("diet-type").innerText = dietData[selectedDiet].type;
                document.getElementById("diet-description").innerText = dietData[selectedDiet].description;
                
                const iconsContainer = document.getElementById("diet-icons");
                iconsContainer.innerHTML = ""; // Clear previous icons
                dietData[selectedDiet].icons.forEach(icon => {
                    const iconElement = document.createElement("div");
                    iconElement.innerText = icon;
                    iconsContainer.appendChild(iconElement);
                });
            } else {
                document.getElementById("diet-type").innerText = "Diet Not Found";
                document.getElementById("diet-description").innerText = "Please try again.";
            }
        }




// function cartesian(args) {
//     const combinations = [];
//     //number of combinations
//     const max = (args.goal.length)*(args.rest.length)*(args.md.length)*(args.age.length);
//     console.log(`Number of combinations: ${max}`)
//     //generate all combinations of selections
//     for (let i=0; i<args.goal.length; i++ ) {
//         const goalItem = args.goal[i];
//         for (let j=0; j < args.rest.length; j++) {
//             const restItem = args.rest[j];
//             for (let k = 0; k < args.md.length; k++) {
//                 const mdItem = args.md[k];
//                 for ( l=0; l<args.age.length;l++) {
//                     ageItem = args.age[l];
//                     combinations.push([goalItem,restItem,mdItem,ageItem]);
//                 }
//             }

//         }

//     }
//     return combinations;
// }

// const allCombinations = cartesian(args);
// const r = [allCombinations]
// console.log(r);



