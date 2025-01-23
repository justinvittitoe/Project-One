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
const diet = {
    mediterranean: {
        primary: [args.goal[1],args.rest[10],args.md[2],args.age[0],],
        rank: 0
    },
    keto: {
        primary: [args.goal[0],args.rest[0],args.md[7],args.age[1]],
        rank: 0
    },
    paleo: {
        primary: [args.goal[2],args.rest[1],args.md[0],args.age[1]],
        rank: 0
    }
}
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
    
    //This for loop grabs each diet's primary array and makes it a constant so we can loop through it
    for (const dietType in diet) {
        const primaryArray = diet[dietType].primary;
        //for each value in the primary array check to see if the user selection matches and if so add to the rank
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










