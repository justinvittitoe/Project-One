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
    
    for (i=0; i < 4; i++) {
        if (diet.mediterranean.primary[i] === userSelection.goal) {
            diet.mediterranean.rank += 3;
        }
        if (diet.mediterranean.primary[i] === userSelection.rest) {
            diet.mediterranean.rank += 1;
        }
        if (diet.mediterranean.primary[i]===userSelection.md) {
            diet.mediterranean.rank += 1;
        }
        if (diet.mediterranean.primary[i]===userSelection.age) {
            diet.mediterranean.rank += 1;
    }
    }
    for (i=0; i < 4; i++) {
        if (diet.keto.primary[i] === userSelection.goal) {
            diet.keto.rank += 3;
        }
        if (diet.keto.primary[i] === userSelection.rest) {
            diet.keto.rank += 1;
        }
        if (diet.keto.primary[i]===userSelection.md) {
            diet.keto.rank += 1;
        }
        if (diet.keto.primary[i]===userSelection.age) {
            diet.keto.rank += 1;
    }
    }
    for (i=0; i < 4; i++) {
        if (diet.paleo.primary[i] === userSelection.goal) {
            diet.paleo.rank += 3;
        }
        if (diet.paleo.primary[i] === userSelection.rest) {
            diet.paleo.rank += 1;
        }
        if (diet.paleo.primary[i]===userSelection.md) {
            diet.paleo.rank += 1;
        }
        if (diet.paleo.primary[i]===userSelection.age) {
            diet.paleo.rank += 1;
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




const allCombinations = cartesian(args);
const r = [allCombinations]
console.log(r);



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


document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.getElementById('nav-signin');
    const signInModal = document.getElementById('signInModal');
    const closeButton = document.querySelector('.close-button');
    const username = document.getElementById('username');
    const welcomeMessage = document.getElementById('welcomeMessage');
    
    if (signInButton && signInModal && closeButton) {
      signInButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent navigation for Sign In
        signInModal.style.display = 'flex';
      });
  
      closeButton.addEventListener('click', () => {
        signInModal.style.display = 'none';
      });
  
      window.addEventListener('click', (event) => {
        if (event.target === signInModal) {
          signInModal.style.display = 'non';
        }
      });
    } else {
      console.error("One or more elements are missing in the DOM.");
    }
    welcomeMessage.textContent = `Welcome, ${username.value}!`;
    welcomeMessage.style.display = 'block';
  });


// Hover Card Functionality

document.querySelectorAll('.flip-card').forEach((card) => {
    card.addEventListener('click', () => {
        const flipCardInner = card.querySelector('.flip-card-inner');
        flipCardInner.classList.toggle('flipped');
    });
});
