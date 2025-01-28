// to hide the quiz section once the user clicks "submit" button

document.addEventListener("DOMContentLoaded", function() {
    // Select the submit button
    const submitButton = document.querySelector(".quiz .btn-success");
    const resultsDiv = document.querySelector(".results");
    const nextCard = document.querySelector('#next-card')
    resultsDiv.style.display = "none";
    nextCard.style.display = 'none';
    
    
    // Add click event listener
    submitButton.addEventListener("click", function() {
        // Hide the parent quiz div
        document.querySelector(".quiz").style.display = "none";
        document.querySelector(".results").style.display = "block";
        document.querySelector('#next-card').style.display = 'block';
        
    });
});

//querySelector
const goalbtn = document.querySelector('#goal');
const restbtn = document.querySelector('#rest');
const mdbtn = document.querySelector('#md');
const agebtn = document.querySelector('#age');
const submit = document.querySelector('#submit');
const random = document.querySelector('#random');
const back = document.querySelector('#back')
const next = document.querySelector('#next')


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

    if(userSelection.rest === 'GF' || userSelection.md === 'celiac') {
        diet.glutenFree.rank += 5;
    }
        
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
    localStorage.setItem('dietRanking',JSON.stringify(sortedDiets));
    //Load the diet recomendation
    loadDietRecommendation(selectedDiet,sortedDiets);
    //Call the random dish function
    randomDish(selectedDiet);
    //Once a user selected their inputs they can see the next diet or go back to the first
    let currentIndex = 0;
    next.addEventListener('click', function() {
        const ranking = JSON.parse(localStorage.getItem('dietRanking'));
        currentIndex = (currentIndex + 1) % ranking.length;
        const selectedDiet = ranking[currentIndex];
        loadDietRecommendation(selectedDiet);
        randomDish(selectedDiet);
    });
    back.addEventListener('click', function() {
        const ranking = JSON.parse(localStorage.getItem('dietRanking'));
        currentIndex = (currentIndex - 1) % ranking.length;
        const selectedDiet = ranking[currentIndex];
        loadDietRecommendation(selectedDiet);
        randomDish(selectedDiet);
    });
        
    
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



//Random Dish function

//event listener
random.addEventListener('click',randomDish)

const recipe = {
    mediterranean: {
        name: ['Winter White Bean and Radicchio Salad','Mediterranean Chicken Bowl','Airfryer Salmon and Swiss Chard'],    
        link: [ 'https://www.goodhousekeeping.com/food-recipes/a41870158/winter-white-bean-and-radicchio-salad-recipe/','https://www.goodhousekeeping.com/food-recipes/a34221194/mediterranean-chicken-bowls-recipe/','https://www.goodhousekeeping.com/food-recipes/a41925316/air-fryer-salmon-and-swiss-chard-recipe/'],
    },
    keto:  {
        name: ['Summer Squash Frittata Recipe','Korean Pineapple Beed Letuce Wraps','Crispy Chicken with White Wine Pan Sauce'],
        link: ['https://www.goodhousekeeping.com/food-recipes/easy/a44726/summer-squash-frittata-recipe/','https://www.goodhousekeeping.com/food-recipes/easy/a47669/korean-pineapple-beef-lettuce-wraps-recipe/','https://www.goodhousekeeping.com/food-recipes/a37295/crispy-chicken-with-white-wine-pan-sauce-recipe/'],
    },
    
    paleo:  {
        name: ['Skillet Apple Chicken','Buffalo Beet BBQ Sauce Chicken Wings','Delicata Squash Pumpkin Curry'],
        link: ['https://thepaleodiet.com/recipe/skillet-apple-chicken/','https://thepaleodiet.com/recipe/buffalo-beet-barbecue-sauce/','https://thepaleodiet.com/recipe/delicata-squash-pumpkin-curry/'],
    },

    vegan: {
        name: ['Sesame Noodles','Ginger Spring Soup','Tomato and Chared Pepper Farro Salad'],
        link:['https://www.goodhousekeeping.com/food-recipes/a43700507/sesame-noodles-recipe/','https://www.goodhousekeeping.com/food-recipes/a43044745/gingery-spring-soup-recipe/','https://www.goodhousekeeping.com/food-recipes/a43685982/tomato-and-charred-pepper-farro-salad-recipe/']
    },
    vegetarian: {
        name: ['Cabbage Schnitzel','Pumpkin Ravioli','Green Chili White Bean Enchiladas'],
        link:['https://www.delish.com/cooking/recipe-ideas/a42257701/cabbage-schnitzel-recipe/','https://www.delish.com/cooking/recipe-ideas/a28556182/pumpkin-ravioli-recipe/','https://www.delish.com/cooking/recipe-ideas/a61791670/green-chili-white-bean-enchiladas-recipe/']
 
    },
    whole30: {
        name: ['Crockpot Chicken Tikka-Masala','Whole-30 Pot Roast','Baked Meatballs'],
        link:['https://thedefineddish.com/crockpot-chicken-tikka-masala/','https://thedefineddish.com/the-best-whole30-pot-roast/','https://thedefineddish.com/epic-whole30-baked-meatballs/']

    },
    glutenFree: {
        name: ['Beef Suya','Sheet Pan Honey Mustard Chicken','Asparagus Stuffed Chicken Rolls'],
        link:['https://www.tasteofhome.com/recipes/beef-suya/','https://www.tasteofhome.com/recipes/sheet-pan-honey-mustard-chicken/','https://www.tasteofhome.com/recipes/asparagus-stuffed-chicken-rolls/']
    },
    fodmap: {
        name: ['Chicken Ramen Noodle Soup','Vegetable Frittata','Tomato Basil Spaghetti Squash with Pumkin Seeds'],
        link:['https://www.monashfodmap.com/recipe/chicken-ramen-noodle-soup/','https://www.monashfodmap.com/recipe/vegetable-frittata/','https://www.monashfodmap.com/recipe/tomato-basil-spaghetti-squash-with-pumpkin-seeds/']
    },
    
}

function randomDish(selectedDiet) {
    const dish = Math.floor(Math.random() * 3);
    selectedDiet = JSON.parse(localStorage.getItem('topDiet'))
    document.getElementById("recipe-name").textContent = recipe[selectedDiet].name[dish];
    document.getElementById("recipe-link").href = recipe[selectedDiet].link[dish];
    document.getElementById("recipe-link").textContent = "Recipe Link";
    
}



function handleMouseMove () {
    const scrollThreshold = window.innerHeight / 2; // Adjust this value as needed
    if (window.scrollY > scrollThreshold) {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
        document.removeEventListener('mousemove', handleMouseMove);
    }
};

document.addEventListener('mousemove',handleMouseMove);

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

