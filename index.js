import foodData from './foodData.js'

/* NAVEGATION*/
const appLink = document.querySelector('.app-link')

appLink.addEventListener('click', () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

/**MOBILE NAVEGATION MENU*/
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-content')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")

})


/*APPLICATION*/

const mealContainers = document.querySelector('.meal-containers')

mealContainers.addEventListener('click', function (e) {

    /*MainLeftDiv never changes. The containers inside it are either displayed or hidden after being clicked*/
    const allFoodsContainer = document.createElement('div');
    let mainLeftDiv = document.querySelector(".left-div")
    mainLeftDiv.append(allFoodsContainer);
    allFoodsContainer.classList.add('all-foods-container');
    allFoodsContainer.classList.add('hide');

    const allRecipesContainer = document.createElement('div');
    mainLeftDiv.append(allRecipesContainer);
    allRecipesContainer.classList.add('all-recipes-container');
    allRecipesContainer.classList.add('hide');

    const backToMealsButton = document.createElement('div');
    allFoodsContainer.append(backToMealsButton)
    backToMealsButton.classList.add('back-to-meals-btn')
    backToMealsButton.addEventListener('click', function () {
        allFoodsContainer.style.display = 'none';
        mealContainers.classList.remove('hide');
    })

    /* When a meal container is clicked (breakfast, lunch...), mealsContainers is hidden and allfoodsContainer is displayed with list of dishes*/
    if (e.target !== e.currentTarget) {
        const clickedItem = e.target.id;
        mealContainers.classList.add('hide');
        allFoodsContainer.classList.remove('hide');

        /*rightCategory loops over foodData(imported file). First, it filters the type of meal chosen (breakfast, lunch...), 
         then it creates an array with all meals from the same category and creates html elements to display information about each meal*/

        const rightCategory = foodData.filter(eachMeal => {
            if (clickedItem === eachMeal.meal) {
                return true;
            }
        }
        ).map(meal => {

            const foodContainer = document.createElement('div');
            allFoodsContainer.append(foodContainer);
            foodContainer.classList.add('food-container');
            foodContainer.style.backgroundImage = `url(${meal.image})`;
            foodContainer.setAttribute('id', meal.id)

            const mealName = document.createElement('h2');
            mealName.innerText = meal.name;
            foodContainer.append(mealName);
            /*set the same attribute to all elements inside div, so when inner tags are clicked, the user is taken to the same place*/
            mealName.setAttribute('id', meal.id)

            const mealServings = document.createElement('span')
            mealServings.innerText = `${meal.servings} servings`
            foodContainer.append(mealServings);
            mealServings.setAttribute('id', meal.id)

            const priceServings = document.createElement('span')
            priceServings.innerText = `${(meal.price / meal.servings).toFixed(2)
                }€ per serving`
            foodContainer.append(priceServings);
            priceServings.setAttribute('id', meal.id)

        })


        /*Everything inside recipeContainer needs to be removed, so it won't save a copy of what was previously clicked*/
        let recipeContainer;

        const backToFoodsButton = document.createElement('div');
        allRecipesContainer.append(backToFoodsButton)
        backToFoodsButton.classList.add('back-to-foods-btn')

        /*When this button is clicked, the container with recipes(allRecipesContainer) is hidden and container with list 
        of dishes(allFoodsContainer) is displayed*/

        backToFoodsButton.addEventListener('click', function () {
            recipeContainer.remove();
            allRecipesContainer.classList.add('hide');
            allFoodsContainer.style.display = 'grid';

        })

        /*Loop over the html elements created (foodContainer) and loop over foodData(imported file). If the element clicked has the same id (which 
        was set as an attribute) as one of the 'foods' in foodData, infomation about this specific food is displayed on the screen.
        (A div with a specific recipe)*/

        const foodContainers = [...document.querySelectorAll('.food-container')]
        const recipes = foodContainers.map(eachRecipe => {
            eachRecipe.addEventListener('click', function (event) {
                allRecipesContainer.classList.remove('hide');
                allFoodsContainer.style.display = 'none';
                const clickedId = event.target.id

                foodData.map(recipeData => {
                    if (clickedId == recipeData.id) {
                        recipeContainer = document.createElement('div');
                        recipeContainer.classList.add('recipe-container')
                        allRecipesContainer.append(recipeContainer);

                        /*Div 1 -> HEADING (h1 with title and add button)*/
                        const heading = document.createElement('div');
                        heading.classList.add('heading');
                        recipeContainer.append(heading);
                        const recipeTitle = document.createElement('h1');
                        heading.append(recipeTitle);
                        recipeTitle.innerText = recipeData.name
                        recipeTitle.classList.add('recipe-title');
                        const addToListBtn = document.createElement('div');
                        addToListBtn.setAttribute('id', recipeData.meal);
                        addToListBtn.innerText = '+ Add Meal';
                        addToListBtn.classList.add('add-to-meals-button')
                        heading.append(addToListBtn);

                        const imageAndicons = document.createElement('div')
                        imageAndicons.classList.add('image-and-icons')
                        const recipeImage = document.createElement('div')
                        recipeImage.style.backgroundImage = `url(${recipeData.image})`;
                        recipeImage.classList.add('recipe-image')
                        imageAndicons.append(recipeImage)
                        recipeContainer.append(imageAndicons)
                        const iconsContainer = document.createElement('div')
                        iconsContainer.classList.add('icons-container')
                        imageAndicons.append(iconsContainer)

                        const recipeTime = document.createElement('div')
                        recipeTime.classList.add('recipe-details')
                        const timeIcon = document.createElement('img')
                        timeIcon.classList.add('recipe-icon')
                        timeIcon.src = 'images/clock-7-48.png'
                        recipeTime.append(timeIcon)
                        const recipeTimeData = document.createElement('h4')
                        recipeTimeData.innerText = recipeData.time
                        recipeTime.append(recipeTimeData)
                        iconsContainer.append(recipeTime)

                        const recipeServings = document.createElement('div')
                        recipeServings.classList.add('recipe-details')
                        const servingsIcon = document.createElement('img')
                        servingsIcon.classList.add('recipe-icon')
                        servingsIcon.src = 'images/smallRestaurant.png'
                        recipeServings.append(servingsIcon)
                        const recipeServingsData = document.createElement('h4')
                        recipeServingsData.innerText = recipeData.servingsDetails
                        recipeServings.append(recipeServingsData)
                        iconsContainer.append(recipeServings)

                        /*ingredientsAndMethod - Two divs (one with a list of ingredients and the other with the recipe)*/
                        const ingredientsAndMethod = document.createElement('div')
                        ingredientsAndMethod.classList.add('ingredients-and-method')
                        recipeContainer.append(ingredientsAndMethod)

                        const ingredientListContainer = document.createElement('div')
                        ingredientListContainer.classList.add('ingredient-list-container')
                        ingredientsAndMethod.append(ingredientListContainer)

                        if (recipeData.ingredients.dairy.length !== -1) {
                            for (let i = 0; i < recipeData.ingredients.dairy.length; i++) {
                                let eachIngredientContainer = document.createElement('span')
                                eachIngredientContainer.innerText = recipeData.ingredients.dairy[i]
                                ingredientListContainer.append(eachIngredientContainer)

                            }
                            if (recipeData.ingredients.meat.length !== -1) {
                                for (let i = 0; i < recipeData.ingredients.meat.length; i++) {
                                    let eachIngredientContainer = document.createElement('span')
                                    eachIngredientContainer.innerText = recipeData.ingredients.meat[i]
                                    ingredientListContainer.append(eachIngredientContainer)
                                }
                            }
                            if (recipeData.ingredients.fruitsVeggies.length !== -1) {
                                for (let i = 0; i < recipeData.ingredients.fruitsVeggies.length; i++) {
                                    let eachIngredientContainer = document.createElement('span')
                                    eachIngredientContainer.innerText = recipeData.ingredients.fruitsVeggies[i]
                                    ingredientListContainer.append(eachIngredientContainer)
                                }
                            }
                            if (recipeData.ingredients.grainsPasta.length !== -1) {
                                for (let i = 0; i < recipeData.ingredients.grainsPasta.length; i++) {
                                    let eachIngredientContainer = document.createElement('span')
                                    eachIngredientContainer.innerText = recipeData.ingredients.grainsPasta[i]
                                    ingredientListContainer.append(eachIngredientContainer)
                                }
                            }
                            if (recipeData.ingredients.condiments.length !== -1) {
                                for (let i = 0; i < recipeData.ingredients.condiments.length; i++) {
                                    let eachIngredientContainer = document.createElement('span')
                                    eachIngredientContainer.innerText = recipeData.ingredients.condiments[i]
                                    ingredientListContainer.append(eachIngredientContainer)
                                }
                            }
                            if (recipeData.ingredients.otherStuff.length !== -1) {
                                for (let i = 0; i < recipeData.ingredients.otherStuff.length; i++) {
                                    let eachIngredientContainer = document.createElement('span')
                                    eachIngredientContainer.innerText = recipeData.ingredients.otherStuff[i]
                                    ingredientListContainer.append(eachIngredientContainer)
                                }
                            }
                        }

                        let recipeMethodContainer = document.createElement('div')
                        recipeMethodContainer.classList.add('recipe-method-container')
                        ingredientsAndMethod.append(recipeMethodContainer)

                        const recipeDescriptionText = recipeData.recipe
                        let step = 0
                        for (let i = 0; i < recipeDescriptionText.length; i++) {

                            step++
                            let stepText = document.createElement('span')
                            stepText.innerText = `STEP ${step}`

                            const recipeStepsContainer = document.createElement('div')
                            recipeStepsContainer.append(stepText)
                            recipeStepsContainer.classList.add('recipe-steps-container')
                            let textContainer = document.createElement('div')
                            textContainer.classList.add('text-container')
                            const recipeStepsText = document.createElement('p')
                            textContainer.append(recipeStepsText)
                            recipeStepsContainer.append(textContainer)
                            recipeStepsText.innerText = recipeDescriptionText[i]
                            recipeMethodContainer.append(recipeStepsContainer)
                        }


                        addToListBtn.addEventListener('click', addMealToList, false)

                        /*In order to connect 'added meal' to 'ingredientContainer', they were all given a specific random number after each loop. 
                        (let = uniqueNumber). This uniqueNumber is used later to remove these elements when the remove button is clicked*/

                        let uniqueNumber = 0

                        function addMealToList(ev) {

                            uniqueNumber = Math.floor(Math.random() * 9000)

                            if (ev.target.id == recipeData.meal) {

                                /*Use target.id to find the meal which meal should be added to chosen meals. Loop over rightLocation to find the container 
                                where it should go. (Breakfast, lunch...). Give added meals and ingredients the same uniqueNumber id*/

                                const rightLocation = [...document.getElementsByClassName('added-meal-container')];
                                rightLocation.map(container => {

                                    if (container.classList.contains(`${recipeData.meal}-container`)) {

                                        const addedMeal = document.createElement('div');
                                        addedMeal.classList.add('added-meal');
                                        addedMeal.setAttribute('id', uniqueNumber);
                                        addedMeal.innerText = recipeData.name;
                                        container.append(addedMeal);

                                        const removeBtn = document.createElement('div')
                                        const icon = document.createElement('img')
                                        icon.classList.add('trash-icon')
                                        icon.src = 'images/trash-outline.svg'

                                        removeBtn.append(icon)
                                        addedMeal.append(removeBtn)
                                        removeBtn.classList.add('remove-button')

                                        const dairySection = document.querySelector('.dairy-section')
                                        const meatSection = document.querySelector('.meat-section')
                                        const fruitsVeggiesSection = document.querySelector('.fruits-veggies-section')
                                        const grainsPastaSection = document.querySelector('.grains-pasta-section')
                                        const condimentsSection = document.querySelector('.condiments-section')
                                        const otherStuffSection = document.querySelector('.other-stuff-section')

                                        if (recipeData.ingredients.dairy !== null) {
                                            for (let i = 0; i < recipeData.ingredients.dairy.length; i++) {
                                                const ingredientContainer = document.createElement('div')
                                                ingredientContainer.classList.add('added-ingredient')
                                                ingredientContainer.innerText = recipeData.ingredients.dairy[i]
                                                dairySection.append(ingredientContainer);
                                                ingredientContainer.classList.add(uniqueNumber)
                                                console.log(ingredientContainer.className)
                                            }
                                            if (recipeData.ingredients.meat !== null) {
                                                for (let i = 0; i < recipeData.ingredients.meat.length; i++) {
                                                    const ingredientContainer = document.createElement('div')
                                                    ingredientContainer.innerText = recipeData.ingredients.meat[i]
                                                    meatSection.append(ingredientContainer);
                                                    ingredientContainer.classList.add('added-ingredient')
                                                    ingredientContainer.classList.add(uniqueNumber)
                                                }
                                                if (recipeData.ingredients.fruitsVeggies !== null) {
                                                    for (let i = 0; i < recipeData.ingredients.fruitsVeggies.length; i++) {
                                                        const ingredientContainer = document.createElement('div')
                                                        ingredientContainer.innerText = recipeData.ingredients.fruitsVeggies[i]
                                                        fruitsVeggiesSection.append(ingredientContainer);
                                                        ingredientContainer.classList.add('added-ingredient')
                                                        ingredientContainer.classList.add(uniqueNumber)
                                                    }
                                                    if (recipeData.ingredients.grainsPasta !== null) {
                                                        for (let i = 0; i < recipeData.ingredients.grainsPasta.length; i++) {
                                                            const ingredientContainer = document.createElement('div')
                                                            ingredientContainer.innerText = recipeData.ingredients.grainsPasta[i]
                                                            grainsPastaSection.append(ingredientContainer);
                                                            ingredientContainer.classList.add('added-ingredient')
                                                            ingredientContainer.classList.add(uniqueNumber)
                                                        }
                                                        if (recipeData.ingredients.condiments !== null) {
                                                            for (let i = 0; i < recipeData.ingredients.condiments.length; i++) {
                                                                const ingredientContainer = document.createElement('div')
                                                                ingredientContainer.innerText = recipeData.ingredients.condiments[i]
                                                                condimentsSection.append(ingredientContainer);
                                                                ingredientContainer.classList.add('added-ingredient')
                                                                ingredientContainer.classList.add(uniqueNumber)
                                                            }

                                                            if (recipeData.ingredients.otherStuff !== null) {
                                                                for (let i = 0; i < recipeData.ingredients.otherStuff.length; i++) {
                                                                    const ingredientContainer = document.createElement('div')
                                                                    ingredientContainer.innerText = recipeData.ingredients.otherStuff[i]
                                                                    otherStuffSection.append(ingredientContainer);
                                                                    ingredientContainer.classList.add('added-ingredient')
                                                                    ingredientContainer.classList.add(uniqueNumber)
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            /*ServingDivId locates which Servings section is being updated when a new meal is added.*/

                                            let servingDivId = document.getElementById(`${recipeData.meal}-container`);

                                            let value = parseInt(servingDivId.innerHTML)
                                            let totalCostElement = document.getElementById('total-cost')
                                            let totalCost = parseInt(totalCostElement.innerHTML)

                                            servingDivId.innerHTML = value + recipeData.servings
                                            totalCostElement.innerHTML = totalCost + recipeData.price

                                            servingDivId.innerHTML = value + recipeData.servings
                                            totalCostElement.innerHTML = totalCost + recipeData.price + '€'

                                            removeBtn.addEventListener('click', function (e) {
                                                value = servingDivId.innerHTML
                                                servingDivId.innerHTML = value - recipeData.servings
                                                totalCost = parseInt(totalCostElement.innerHTML)
                                                totalCostElement.innerHTML = totalCost - recipeData.price + '€'

                                                const toDelete = [...document.getElementsByClassName(addedMeal.id)];
                                                toDelete.map(each => {
                                                    console.log(each)
                                                    each.remove()
                                                }
                                                )
                                                this.parentElement.remove()
                                            })

                                            /*When an ingredient that has been added to the grocery list is clicked, change text decoration to line-through*/
                                            const markIngredient = [...document.getElementsByClassName(uniqueNumber)]
                                            markIngredient.map(element => {
                                                element.addEventListener('click', function () {
                                                    element.classList.toggle('cross-off')
                                                })
                                            })

                                        }
                                    }
                                })
                            }

                        }
                    }
                }
                )

            })
        })


    }


}

)





