import recipeResults from '../../src/reducers/RecipesReducer';
import recipeSelectionReducer from '../../src/reducers/RecipeSelectionReducer';

const INITIAL_STATE = { recipes: [{}] };
const NEXT_STATE = { recipes: [{}] };
const recipeExample = [
  {
      "id": 11,
      "active": true,
      "name": "broken lasagna with lots of greens",
      "description": "lighter, more casual way to enjoy lasagna",
      "prep_time": null,
      "cook_time": null,
      "notes": "",
      "image_url": "",
      "ingredients": [
        {
          "id": 2,
          "name": "testing",
          "description": "string",
          "image_url": "string",
          "active": true,
          "alternatives": [],
          "tags": [
            "vegetarian"
          ]
        },
        {
          "id": 3,
          "name": "milk",
          "description": "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.",
          "image_url": "",
          "active": true,
          "alternatives": [
            {
              "id": 5,
              "name": "almond milk",
              "description": "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.",
              "image_url": "",
              "active": true
            },
            {
              "id": 6,
              "name": "coconut milk",
              "description": "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.",
              "image_url": "",
              "active": true
            }
          ],
          "tags": [
            "dairy",
            "vegetarian"
          ]
        }
      ],
      "instructions": [
        {
          "step_number": 0,
          "instructions": "First, boil a large pot of salted water. Cook the lasagna noodles until al dente, about 9 minutes. Drain and arrange in a single layer on a baking sheet or clean counter so they don’t stick together"
        },
        {
          "step_number": 1,
          "instructions": "While the pasta cooks, scoop the ricotta cheese into a large bowl and mix in the zest of 1 lemon, juice of 2 lemons, mint, chives, 1 teaspoon of salt, and 1/4 cup olive oil. Set aside"
        },
        {
          "step_number": 2,
          "instructions": "Heat the remaining tablespoon of olive oil in a skillet over medium heat. Sauté the asparagus and peas with a pinch of salt until bright green and just tender, about 3 minutes"
        },
        {
          "step_number": 3,
          "instructions": "Toss the lasagna noodles with the ricotta cheese mixture. Taste and add salt if needed. Arrange the coated noodles on a large platter or in a serving bowl. Top with asparagus, peas, basil, watercress, and pine nuts. To finish, sprinkle over the remaining lemon zest and serve warm or at room temperature"
        }
      ],
      "tags": [
        "weeknight dinner"
      ]
    }
  ]

describe('recipe reducers tests', () => {
  it('returns initial state when no state is specified', () => {
    expect(recipeResults(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('returns original state object when no matching case is specified', () => {
    expect((recipeResults(INITIAL_STATE, {}) === recipeResults(INITIAL_STATE, {}))).toBe(true);
    expect((recipeResults(INITIAL_STATE, {}) === recipeResults(NEXT_STATE, {}))).toBe(false);
  });

  it('returns isfetching property to true and didInvalidate property to false when pending case is specified', () => {
    expect(recipeResults(INITIAL_STATE, { type: 'GET_RECIPE_RESULTS_PENDING' })).toEqual({ ...INITIAL_STATE, isFetching: true, didInvalidate: false });
  });

  it('returns recipes when fulfilled case is specified', () => {
    expect(recipeResults(INITIAL_STATE, { type: 'GET_RECIPE_RESULTS_FULFILLED', payload: recipeExample })).toEqual(recipeExample);
  });
});

describe('recipe select reducer tests', () => {
  it('returns inital state when no state is specified', () => {
    expect(recipeSelectionReducer(undefined, {})).toEqual(null);
  });

  it('returns original state object when no matching case is specified', () => {
    expect((recipeSelectionReducer(INITIAL_STATE, {}) === recipeSelectionReducer(INITIAL_STATE, {}))).toBe(true);
    expect((recipeSelectionReducer(INITIAL_STATE, {}) === recipeSelectionReducer(NEXT_STATE, {}))).toBe(false);
  });

  it('returns payload as state when fulflilled case is specified by action', () => {
    expect(recipeSelectionReducer(null, { type: 'SELECT_RECIPE_FULFILLED', payload: 1 })).toEqual(1);
   });
});
