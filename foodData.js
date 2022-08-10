const foodData = [

    {
        id: 1,
        meal: "breakfast",
        name: "Breakfast Muffins",
        ingredients: {
            dairy: ['150ml natural low-fat yogurt'],
            fruitsVeggies: ['1 ripe banana, mashed.', '100g blueberry'],
            meat: '',
            condiments: ['100g apple sauce or pureed apples', ' 1½ tsp cinnamon', '4 tbsp clear honey', '1 tsp vanilla extract'],
            grainsPasta: ['200g wholemeal flour', ' 50g rolled oats, plus extra for sprinkling'],
            otherStuff: ['50ml rapeseed oil', '2 tbsp mixed seed', '1½ tsp baking powder', '1½ tsp bicarbonate of soda']
        },
        servings: 4,
        servingsDetails: 'Makes 12 muffins',
        price: 6,
        time: '30 min',
        recipe: ['Heat oven to 180C/160C fan/gas 4. Line a 12-hole muffin tin with 12 large muffin cases. In a jug, mix the eggs, yogurt, oil, apple sauce, banana, honey and vanilla. Tip the remaining ingredients, except the seeds, into a large bowl, add a pinch of salt and mix to combine.', 'Pour the wet ingredients into the dry and mix briefly until you have a smooth batter – don’t overmix as this will make the muffins heavy. Divide the batter between the cases. Sprinkle the muffins with the extra oats and the seeds. Bake for 25-30 mins until golden and well risen, and a skewer inserted into the centre of a muffin comes out clean. Remove from the oven, transfer to a wire rack and leave to cool. Can be stored in a sealed container for up to 3 days.'],
        image: "images/muffins.jpg"
    },
    {
        id: 2,

        meal: "breakfast",
        name: "Easy Crêpes",
        ingredients: {
            dairy: '',
            fruitsVeggies: '',
            meat: ['3 large eggs. '],
            condiments: '',
            grainsPasta: ['175g plain flour.'],
            otherStuff: ['Sunflower oil. ']
        },
        servings: 6,
        servingsDetails: 'Makes 8 large pancakes',
        price: 3,
        time: '20 min',
        recipe: ['Weigh the flour in a large jug or bowl. Crack in the eggs, add half the milk and a pinch of salt. Whisk to a smooth, thick batter. Add the remaining milk and whisk again. Set aside for at least 30 mins.', "Heat a large non-stick crêpe pan or frying pan. Add a drizzle of oil, then wipe out the excess with kitchen paper. When the pan is hot, add enough batter to just cover the surface, swirling it and pouring any excess back into the bowl. The pancake should be as thin as possible. When the edges are peeling away from the sides of the pan, shake it to see if the pancake easily releases and is browning on the underside. If not, cook a little longer. Flip and cook the other side for a minute or two. Serve, or keep warm in a low oven."],
        image: "images/easyCrêpesRecipe.jpg"
    },
    {
        id: 3,

        meal: "breakfast",
        name: " Red Fruits Smoothie",
        ingredients: {
            dairy: '',
            fruitsVeggies: ['1 small ripe banana', '140g blackberries (blueberries, raspberries or strawberries)'],
            condiments: '',
            meat: '',
            grainsPasta: '',
            otherStuff: ['apple juice or mineral water', 'runny honey'],
        },
        servings: 1,
        servingsDetails: 'Makes 1 smoothie',
        price: 1,
        time: '5 mins',
        recipe: ['Slice the banana into your blender or food processor and add the berries of your choice. Whizz until smooth. With the blades whirring, pour in juice or water to make the consistency you like. Toss a few extra fruits on top, drizzle with honey and serve.'],
        image: "images/RedFruitsSmoothie.jpg"
    },
    {
        id: 4,

        meal: "breakfast",
        name: "Breakfast Bar ",
        ingredients: {
            dairy: ['100g butter'],
            fruitsVeggies: ['50g mixed dried fruit (a mixture of raisins, sultanas and apricots is nice)'],
            meat: '',
            condiments: '',
            grainsPasta: ['140g oats', '25g multi-grain hoop cereal'],
            otherStuff: ['50g mixed seed', '100g light muscovado sugar', '00g golden syrup']
        },
        servings: 3,
        servingsDetails: 'Makes 12 bars',
        price: 5,
        time: '25 min',
        recipe: ['Grease and line a 20cm square cake tin with baking parchment.', 'Put the dried fruit in a mixing bowl. Add the seeds, oats and cereal, and mix well.', 'Put the butter, sugar and golden syrup in the saucepan. Cook gently on the hob, stirring with the spatula, until the butter and sugar are melted.', 'Remove from the heat and pour the dry ingredients into the saucepan. Mix well until all the ingredients are coated with the syrup mix.', 'Fill the baking tin with the mixture. Use the spatula to press the mix down evenly. Bake at 160C/140C fan/gas 3 for 20 mins, then leave to cool completely before cutting into squares or fingers. Store in an airtight tin for up to 3 days - if they last that long!'],
        image: "images/breakfastBar.jpg"
    },
    {
        id: 5,

        meal: "breakfast",
        name: "Pear & blueberry bowl",
        ingredients: {
            dairy: ['150g pot 0% fat bio-yogurt', '3 tbsp skimmed milk , plus a bit extra'],
            fruitsVeggies: ['2 handfuls blueberries', '1 firm but ripe red-skinned pear , unpeeled'],
            meat: '',
            condiments: '',
            grainsPasta: ['2 tbsp oats'],
            otherStuff: ['1 tbsp pumpkin seeds']
        },
        servings: 1,
        servingsDetails: 'Makes one bowl',
        price: 2,
        time: '10-15 min',
        recipe: ['Grate the pear into a bowl and add the oats, half the yogurt, the milk and most of the seeds. Leave for 5-10 mins, then check the consistency and dilute with a little more milk or water if it is too thick. Spoon on the remaining yogurt, pile on the berries and remaining seeds, then serve.'],
        image: "images/blueberryandoats.jpg"
    },
    {
        id: 6,

        meal: "breakfast",
        name: "Stuffed Ham & Egg Bread",
        ingredients: {
            dairy: ['2 cups shredded sharp cheddar cheese'],
            fruitsVeggies: ['2 cups chopped fully cooked ham', '1 can (14-1/2 ounces) diced tomatoes, drained'],
            meat: ['6 large eggs, lightly beaten'],
            condiments: '',
            grainsPasta: '',
            otherStuff: ['2 teaspoons canola oil', '1 tube (11 ounces) refrigerated crusty French loaf']
        },
        servings: 8,
        servingsDetails: '8 servings',
        price: 8,
        time: '40 min',
        recipe: ['Preheat oven to 400°. In a large nonstick skillet, heat oil over medium heat. Add tomatoes; cook and stir until juices are evaporated, 12-15 minutes. Add eggs; cook and stir until they are thickened and and no liquid egg remains, 3-4 minutes. Remove from heat; stir in ham.', 'Unroll dough onto a greased baking sheet. Sprinkle cheese lengthwise down one half of the dough to within 1 in. of edges. Top with egg mixture. Fold dough over filling, pinching to seal; tuck ends under.', 'Bake until deep golden brown, 17-20 minutes. Cut into slices.'],
        image: "images/Stuffed-Ham-Egg-Bread_EXPS_SDFM17_197817_B10_05_5b-2.jpg"
    },
    {
        id: 7,

        meal: "breakfast",
        name: " banana Split",
        ingredients: {
            dairy: ['4 scoops natural frozen yogurt', '2 tbsp nut butter (almond or cashew butter is nice)'],
            fruitsVeggies: ['2 bananas', 'handful of berries(any)'],
            meat: '',
            condiments: '',
            grainsPasta: ['4 tbsp of granola'],
            otherStuff: '',
        },
        servings: 2,
        servingsDetails: 'Serves t2',
        price: 5,
        time: '5 min',
        recipe: ['Peel the bananas and split them down the centre. Place in 2 bowls, cut-sides facing upwards.', 'Spread the nut butter over the banana halves, place the scoops of frozen yogurt on top, add the berries and scatter over the granola.'],
        image: "images/banana-split-099eb16.webp"
    },
    {
        id: 8,
        meal: "lunch",
        name: "Chicken pasta bake",
        ingredients: {
            dairy: ['½ small bunch of parsley , finely chopped', '70g mature cheddar , grated', '50g grated mozzarella'],
            fruitsVeggies: ['1 onion , finely chopped', '2 x 400g cans chopped tomatoes', '2 garlic cloves , crushed',],
            meat: ['4 skinless chicken breasts, sliced into strips'],
            condiments: '',
            grainsPasta: ['300g penne'],
            otherStuff: ['6 tbsp mascarpone', '1 tsp caster sugar', '4 tbsp olive oil', '¼ tsp chilli flakes']
        },
        servings: 6,
        servingsDetails: 'Serves 6',
        price: 15,
        time: '1h15m',
        recipe: ['Heat 2 tbsp of the oil in a pan over a medium heat and fry the onion gently for 10-12 mins. Add the garlic and chilli flakes and cook for 1 min. Tip in the tomatoes and sugar and season to taste. Simmer uncovered for 20 mins or until thickened, then stir through the mascarpone.', 'Heat 1 tbsp of oil in a non-stick frying pan. Season the chicken and fry for 5-7 mins or until the chicken is cooked through.', 'Heat the oven to 220C/200C fan/gas 7. Cook the penne following pack instructions. Drain and toss with the remaining oil. Tip the pasta into a medium sized ovenproof dish. Stir in the chicken and pour over the sauce. Top with the cheddar, mozzarella and parsley. Bake for 20 mins or until golden brown and bubbling.'],
        image: "images/chickenPasta.jpg"
    },
    {
        id: 9,
        meal: "lunch",
        name: "Beef bourguignon",
        ingredients: {
            dairy: '',
            fruitsVeggies: ['chopped parsley', '400g mushrooms, halved', '2 onions', '3 large or 6 normal carrots'],
            meat: ['300g bacon lardons', '1.6kg braising steak, cut into large chunks'],
            condiments: '',
            grainsPasta: ['3 tbsp plain flour'],
            otherStuff: ['small knob butter', '1 tbsp tomato purée', '2 tbsp oil', '2 bottles cheap red wine', 'small bunch thyme', '3 bay leaves']
        },
        servings: 6,
        servingsDetails: 'Serves 6',
        price: 15,
        time: '3h30min',
        recipe: ['Tip 1.6kg braising steak, cut into large chunks, into a large bowl with 3 bay leaves, a small bunch of thyme, 2 bottles of red wine and some pepper, then cover and leave in the fridge overnight.', 'Heat the oven to 200C/180C fan/gas 6.', 'Place a colander over another large bowl and strain the marinated meat, keeping the wine.', 'Heat 1 tbsp oil in a large frying pan, then brown the meat in batches, transferring to a plate once browned. When all the meat is browned, pour a little wine into the now-empty frying pan and bubble to release any caramelised bits from the pan.', 'Heat 1 tbsp oil in a large casserole and fry 3 large or 6 normal carrots, cut into large chunks, and 2 roughly chopped onions until they start to colour. Stir in 3 tbsp plain flour for 1 min, then add 1 tbsp tomato purée.', 'Add the beef and any juices, the wine from the frying pan and the rest of the wine and herbs. Season and bring to a simmer. Give everything a good stir, then cover.', 'Transfer to the oven and bake for 2 hrs until the meat is really tender. Cool. Will freeze for up to 3 months.', 'To serve, defrost completely overnight in the fridge if frozen, then place on a low heat to warm through.', 'Meanwhile, heat a small knob of butter in a frying pan and add 300g bacon lardons and 500g peeled pearl onions or small shallots. Sizzle for about 10 mins until the bacon starts to crisp and the onions soften and colour.', 'Add 400g halved mushrooms and fry for another 5 mins, then stir everything into the stew and heat for 10 mins more. Serve scattered with chopped parsley.'],
        image: "images/beefStew.jpg"
    },
    {
        id: 10,

        meal: "lunch",
        name: "Chicken casserole with herby dumplings",
        ingredients: {
            dairy: ['140g cold butter'],
            fruitsVeggies: ['2 onions, sliced', '2 carrots, diced', '200g bacon lardons'],
            meat: ['12 skinless chicken pieces', '1 chicken stock cube'],
            condiments: '',
            grainsPasta: ['3 tbsp plain flour', '250g self-raising flour'],
            otherStuff: ['2 tbsp chopped mixed herb - try parsley, thyme and sage or chives', '2 tbsp sunflower oil', '3 bay leaves', '3 sprigs thyme', '250ml red wine', '3 tbsp tomato paste']
        },
        servings: 6,
        servingsDetails: 'Serves 6',
        price: 15,
        time: '1h15min',
        recipe: ['Heat oven to 180C/160C fan/gas 4. Toss the chicken pieces with the flour and some salt and pepper, to coat them – it’s easy to do this in a plastic food bag.', 'Heat the oil in a casserole with a lid. Brown the chicken pieces well on all sides – you’ll need to do this in batches. Remove all the pieces to a plate, and tip the onions, carrot, lardons, bay and thyme into the pan. Cook gently for 10 mins until the onion is softened.', 'Return the chicken pieces, with any juices that have collected on the plate. Then pour in the red wine, 250ml water and tomato paste and crumble in the stock cube. Add a splash more of water if you need, until the chicken is almost covered. Bring to the boil, then cover with a lid and bake in the oven for 20 mins. Remove the lid and bake for another 10 mins while you make the dumplings.', 'Rub the butter into the flour with your fingertips until it feels like fine breadcrumbs. Stir in the herbs with ½ tsp salt and some pepper. Drizzle over 150ml water, and stir in quickly with a cutlery knife to form a light dough. Use floured hands to shape into ping pong sized balls.', 'Place the dumplings on top of the stew and bake for 20 mins more until the dumplings are cooked through.'],
        image: "images/chickenCassarole.jpg"
    },
    {
        id: 11,

        meal: "lunch",
        name: "Jacket potatoes",
        ingredients: {
            dairy: ['200ml soured cream', '50g cheddar, grated'],
            fruitsVeggies: ['4 large baking potatoes', '4 spring onions'],
            condiments: '',
            meat: ['4 crispy bacon rashers, chopped'],
            grainsPasta: '',
            otherStuff: ['2 tsp olive oil']
        },
        servings: 6,
        servingsDetails: 'Serves 4',
        price: 9,
        time: '1 hr and 20 mins',
        recipe: ['Heat the oven to 220C/200C fan/gas 7. Rub the olive oil over the potatoes and put on the top shelf of the oven. Bake for 20 mins.', 'Turn down the oven to 190C/170C fan/gas 5 and bake for 45 mins-1 hr until the skin is crisp and the flesh soft.', 'Cut a cross on top of each potato, squeeze the sides, add the soured cream and your favourite toppings.'],
        image: "images/JackedPotatoes.jpg"
    },
    {
        id: 12,

        meal: "lunch",
        name: "Cauliflower soup",
        ingredients: {
            dairy: ['100ml single cream'],
            fruitsVeggies: ['½ small bunch of parsley', '1 large cauliflower (1.5kg)', '1 onion', '1 celery stick', '1 garlic clove'],
            meat: '',
            condiments: '',
            grainsPasta: '',
            otherStuff: ['½ tbsp ground cumin', '2 tbsp olive oil', '4 thyme sprigs', '750-850ml veg or chicken stock']
        },
        servings: 6,
        servingsDetails: 'Serves 4-6',
        price: 9,
        time: '45min',
        recipe: ['Heat the oven to 220C/200C fan/gas 7. Toss the cauliflower florets in a roasting tin with 1 tbsp olive oil, the cumin and the thyme. Roast for 15 mins or until golden and tender. Discard the thyme.', 'Heat the remaining oil in a saucepan with the onion and celery and fry over a medium heat for 10 mins or until softened. Add the garlic and cook for 1 min. Stir through most of the cauliflower, reserving some to top the soup with later. Add 750ml of the stock to the pan and bring to a simmer. Cook for 10 mins.', 'Blitz the soup until smooth using a hand blender or food processor. Stir through the cream and season to taste. Add extra stock if you like your soup a little thinner. Ladle into bowls and top with the parsley, reserved cauliflower and an extra drizzle of olive oil.'],
        image: "images/cauliflowerSoup.jpg"
    },
    {
        id: 13,

        meal: "dinner",
        name: "Tomato & basil soup",
        ingredients: {
            dairy: ['1 tbsp butter', '142ml pot soured cream', 'basil leaves, to serve'],
            fruitsVeggies: ['2 garlic cloves'],
            meat: '',
            condiments: '',
            grainsPasta: '',
            otherStuff: ['125g pot fresh basil pesto', '1 tsp sugar', '500ml turkey or vegetable stock', '3 x 400g cans plum tomatoes', '5 soft sundried or SunBlush tomatoes in oil']
        },
        servings: 4,
        servingsDetails: 'Serves 4',
        price: 8,
        time: '25min',
        recipe: ['Heat the butter or oil in a large pan, then add the garlic and soften for a few minutes over a low heat. Add the sundried or SunBlush tomatoes, canned tomatoes, stock, sugar and seasoning, then bring to a simmer. Let the soup bubble for 10 mins until the tomatoes have broken down a little.', 'Whizz with a stick blender, adding half the pot of soured cream as you go. Taste and adjust the seasoning – add more sugar if you need to. Serve in bowls with 1 tbsp or so of the pesto swirled on top, a little more soured cream and scatter with basil leaves.'],
        image: "images/tomatoSoup.jpg"
    },
    {
        id: 14,

        meal: "dinner",
        name: "Japanese noodle soup",
        ingredients: {
            dairy: '',
            fruitsVeggies: ['sliced green spring onions', '3 garlic cloves', '100g baby spinach', '4 boiled eggs'],
            meat: ['400g sliced cooked pork or chicken breast', '4 tbsp sweetcorn'],
            condiments: ['sprinkle of sesame seeds', '4 tbsp soy sauce', 'pinch of chilli powder', '½ tsp Chinese five spice', 'thumb-sized piece of ginger', '1 tsp Worcestershire sauce'],
            grainsPasta: ['375g ramen noodles'],
            otherStuff: ['700ml chicken stock', '2 tsp sesame oil', '1 sheet dried nori']
        },
        servings: 4,
        servingsDetails: 'Serves 4',
        price: 9,
        time: '40min',
        recipe: ['Mix 700ml chicken stock, 3 halved garlic cloves, 4 tbsp soy sauce, 1 tsp Worcestershire sauce, a sliced thumb-sized piece of ginger, ½ tsp Chinese five spice, pinch of chilli powder and 300ml water in a stockpot or large saucepan, bring to the boil, then reduce the heat and simmer for 5 mins.', 'Taste the stock – add 1 tsp white sugar or a little more soy sauce to make it sweeter or saltier to your liking.', 'Cook 375g ramen noodles following the pack instructions, then drain and set aside.', 'Slice 400g cooked pork or chicken, fry in 2 tsp sesame oil until just starting to brown, then set aside.', 'Divide the noodles between four bowls. Top each with a quarter of the meat, 25g spinach, 1 tbsp sweetcorn and two boiled egg halves each.', 'Strain the stock into a clean pan, then bring to the boil once again.', 'Divide the stock between the bowls, then sprinkle over 1 shredded nori sheet, sliced spring onions or shallots and a sprinkle of sesame seeds. Allow the spinach to wilt slightly before serving.'],
        image: "images/japoneseSoup.jpg"
    },
    {
        id: 15,

        meal: "dinner",
        name: "Pie with roasted veg",
        ingredients: {
            dairy: ['110g cold butter'],
            fruitsVeggies: ['2 baby carrots', '2 sage leaves', '1 large floury potato', '80g Brussels sprouts'],
            meat: ['1 skinless chicken breast', '1 pork sausage', '1 egg yolk'],
            condiments: ['gravy', '2 tbsp cranberry sauce'],
            grainsPasta: ['200g plain flour'],
            otherStuff: ['grating of nutmeg', '3 small parsnips', '3 tbsp vegetable or rapeseed oil', '1 tbsp fresh breadcrumbs']
        },
        servings: 1,
        servingsDetails: 'Serves 1',
        price: 4,
        time: '1h5min',
        recipe: ['To make the pastry, put the flour, sage, a pinch of salt and grating of nutmeg in a bowl. Rub in the butter using your fingers until sandy. Beat the egg yolk with 1-2 tbsp water. Add most to the pastry, reserving 1 tsp. Mix, then bring together into a dough with your hands. Flatten into a disc. Wrap. Chill for 30 mins.', 'For the filling, lay the chicken on a board, and with the palm of your hand pressing down on top, cut through the middle lengthways from the side without going all the way through. Open out like a book and cut into six strips. Squeeze the sausagemeat from the skin.', 'Cut a third of the pastry off and set aside. Roll out the rest of the pastry on a lightly floured surface to the thickness of a 10p coin. Line a 10cm pie dish (about 3cm deep), leaving any excess overhanging. Scatter the breadcrumbs in the base, then top with half the chicken. Season. Spoon in half the cranberry sauce, the sausagemeat, the remaining cranberry sauce, and the rest of the chicken. Season.', 'Roll the reserved pastry out so it’s large enough to cover the dish. Brush a little of the reserved egg around the edge of the pie, then top with the pastry lid, pressing the edge to seal. Trim away any excess. Brush with the rest of the egg and cut a small steam hole in the centre. Will keep chilled for up to 24 hrs, or frozen for two months.', 'Cook the potatoes in a pan of boiling water for 5-8 mins until fluffy but still holding their shape. Drain and leave to steam-dry. Heat the oven to 200C/180C fan/gas 6. Toss the potatoes in half the oil on a large baking tray. Season. Bake with the pie for 30 mins.', 'Push the potatoes to one end of the tray, then add the rest of the veg to the other end. Toss with the rest of the oil and season. Bake for 20 mins more, covering the pie with foil if it darkens too quickly. Remove the pie from the oven and roast the veg for 10-15 mins more until tender and the potatoes crisp. Serve with the gravy and extra cranberry sauce.'],
        image: "images/chickenPie.jpg"
    },
    {
        id: 16,

        meal: "dinner",
        name: "Roasted sweet potato & carrot soup",
        ingredients: {
            dairy: ['100ml crème fraîche'],
            fruitsVeggies: ['500g sweet potatoes', '2 garlic cloves', '2 onions', '300g carrots'],
            meat: '',
            condiments: '',
            grainsPasta: '',
            otherStuff: ['3 tbsp olive oil', '1l vegetable stock'],
        },
        servings: 4,
        servingsDetails: 'Serves 4',
        price: 8,
        time: '1h',
        recipe: ['Heat oven to 220C/200C fan/ gas 7 and put 500g chunked sweet potatoes and 300g chunked carrots into a large roasting tin, drizzled with 2 tbsp olive oil and plenty of seasoning.', 'Roast the vegetables in the oven for 25-30 mins or until caramelised and tender.', 'Meanwhile, put the remaining 1 tbsp olive oil in a large deep saucepan and fry 2 finely chopped onions over a medium-low heat for about 10 mins until softened.', 'Add 2 crushed garlic cloves and stir for 1 min before adding 1l vegetable stock. Simmer for 5-10 mins until the onions are very soft, then set aside.', 'Once the roasted vegetables are done, leave to cool a little, then transfer to the saucepan and use a hand blender to process until smooth. Stir in 100ml crème fraîche, a little more seasoning and reheat until hot.', 'Serve in bowls topped with a swirl of crème fraîche and a good grinding of black pepper.'],
        image: "images/carrotSoup.jpg"
    },
    {
        id: 17,
        meal: "snacks",
        name: "Healthy cookies",
        ingredients: {
            dairy: '',
            fruitsVeggies: ['2 ripe bananas ', '100g raspberries (fresh or frozen)'],
            meat: '',
            condiments: ['1⁄2 tsp cinnamon'],
            grainsPasta: ['150g porridge oats'],
            otherStuff: ['2 tbsp ground almonds'],
        },
        servings: 4,
        servingsDetails: '12 cookies',
        price: 10,
        time: '25min',
        recipe: ['Heat the oven to 200C/180C fan/gas 4 and line two baking trays with baking parchment. Mix the banana, oats, almonds, cinnamon and a pinch of salt in a bowl to make a sticky dough. Gently stir through the raspberries, trying not to break them up. Scoop up tablespoons of the mixture and roll into balls, then place on a baking tray and flatten with your hand.', 'Bake for 15 mins until the cookies feel firm around the edges and are golden brown. Leave to cool. Will keep in an airtight container for up to three days.'],
        image: "images/healthyCookies.jpg"
    },
    {
        id: 18,

        meal: "snacks",
        name: "Easy hummus recipe",
        ingredients: {
            dairy: ['3 tbsp 0% fat Greek yogurt'],
            fruitsVeggies: ['1 x 400g can chickpea', '1 fat garlic clove'],
            meat: '',
            condiments: '',
            grainsPasta: '',
            otherStuff: ['1 tbsp tahini paste', 'good squeeze lemon juice'],
        },
        servings: 4,
        servingsDetails: 'Makes 4 snack portions',
        price: 5,
        time: '5min',
        recipe: ['Drain the chickpeas into a sieve set over a bowl or jug to catch the liquid. Tip the chickpeas, tahini, garlic and yogurt into a food processor or blender and whizz to smooth.', 'Whizz in a tbsp of the chickpea liquid at a time until you have a nice consistency, then scrape into a bowl.', 'Stir in a squeeze of lemon juice and season to taste.'],
        image: "images/hummus.jpg"
    },
    {
        id: 19,

        meal: "snacks",
        name: "Chorizo & manchego scones",
        ingredients: {
            dairy: ['50g butter ', '150ml buttermilk'],
            fruitsVeggies: '',
            meat: ['60g chorizo', '110g manchego'],
            condiments: ['pinch of smoked paprika'],
            grainsPasta: ['225g self-raising flour'],
            otherStuff: ['¼ tsp salt'],
        },
        servings: 6,
        servingsDetails: '6 chorizos',
        price: 7,
        time: '25min',
        recipe: ['Heat oven to 220C/200C fan/gas 7. Put the flour, salt and butter in a food processor and pulse until you can’t feel any lumps of butter (or rub in any remaining lumps with your fingers).', 'Cut 60g chorizo and 60g manchego into small cubes and add them to the pulsed dry flour mixture with a pinch of smoked paprika.', 'Stir the buttermilk into the mixture and use a knife to quickly combine everything together to form a dough – stop when it has just combined and don’t overmix it.', 'Tip the dough onto a floured surface and lightly bring it together with your hands a couple of times. Press out gently until about 4cm thick, then stamp out 6-7cm rough squares. Re-shape any trimmings until all the dough is used. Grate another 50g manchego over the scones before baking. Spread out on a lightly floured baking sheet and bake for 10-12 mins or until well risen and golden.'],
        image: "images/chorizoScones.jpg"
    },
    {
        id: '',

        meal: "",
        name: "",
        ingredients: {
            dairy: [''],
            fruitsVeggies: [''],
            meat: [''],
            condiments: [''],
            grainsPasta: [''],
            otherStuff: [''],
        },
        servings: '',
        servingsDetails: '',
        price: '',
        time: '',
        recipe: [''],
        image: ""
    },

]

export default foodData


