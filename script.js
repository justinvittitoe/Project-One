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








function cartesian(args) {
    const combinations = [];
    //number of combinations
    const max = (args.goal.length)*(args.rest.length)*(args.md.length)*(args.age.length);
    console.log(`Number of combinations: ${max}`)
    //generate all combinations of selections
    for (let i=0; i<args.goal.length; i++ ) {
        const goalItem = args.goal[i];
        for (let j=0; j < args.rest.length; j++) {
            const restItem = args.rest[j];
            for (let k = 0; k < args.md.length; k++) {
                const mdItem = args.md[k];
                for ( l=0; l<args.age.length;l++) {
                    ageItem = args.age[l];
                    combinations.push([goalItem,restItem,mdItem,ageItem]);
                }
            }

        }

    }
    return combinations;
}

const allCombinations = cartesian(args);
const r = [allCombinations]
console.log(r);



