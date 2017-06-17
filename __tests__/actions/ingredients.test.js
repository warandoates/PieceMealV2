
import { fetchIngredients, putIngredient } from '../../src/actions';

 const ingredientResultModel = {
  ingredients: [
    {
      id: 5,
      name: 'almond milk',
      description: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
      active: true,
      image_url: null,
      tags: []
    },
    {
      id: 23,
      name: 'asafoetida (powder)',
      description: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
      active: true,
      image_url: null,
      tags: []
      }
    ]
  };

  let putIngredientModel = {
     id: 3,
     name: 'milk',
     description: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
     image_url: '',
     active: true,
     created_at: '2017-06-11T20:45:48.325Z',
     updated_at: '2017-06-13T23:42:55.900Z',
     alternatives: [
       {
         id: 5,
         name: 'almond milk',
         description: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
         image_url: '',
         active: true
       },
       {
         id: 6,
         name: 'coconut milk',
         description: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
         image_url: '',
         active: true
       }
     ],
     tags: [
       'dairy',
       'vegetarian'
     ]
   };

   let propObj = {
     navigation: {
       state: {
         params: {
           id: 3
         }
       }
     }
   };

   let putIngredientToChange = {
      id: 4,
      name: 'avocado',
      description: 'The best superfood there is',
      image_url: '',
      tags: [
        'vegan',
        'vegetarian'
      ],
      alternatives: []
    };

    let putIngredientToChangeResponse = {
      id: 4,
      name: "avocado",
      description: "The best superfood there is.",
      image_url: '',
      active: true,
      created_at: '2017-06-11T20:45:48.325Z',
      updated_at: '2017-06-14T22:55:46.472Z',
      alternatives: [],
      tags: [
        'vegan',
        'vegetarian'
      ]
    }

    let putPropObj = {
      navigation: {
        state: {
          params: {
            id: 4
          }
        }
      }
    };


 describe('tests ingredients async actions', () => {
   it('fetches and returns ingredients after async action is done', () => {
     fetch.mockResponse(JSON.stringify(ingredientResultModel));
     return fetchIngredients().then(ingredients => {
       expect(ingredients).toEqual(ingredientResultModel);
     });
   });

   it('Put request returns the ingredient untouched if no change in the ingredient is passed in', () => {
     fetch.mockResponse(JSON.stringify(putIngredientModel, propObj));
     return putIngredient(putIngredientModel, propObj).then(ingredient => {
       expect(ingredient.body).toEqual(JSON.stringify(putIngredientModel));
     });
   });

   it('this function returns updated ingredient when different information is passed to ingredient input', () => {
    fetch.mockResponse(JSON.stringify(putIngredientToChangeResponse));
    return putIngredient(putIngredientToChange, putPropObj).then(ingredient => {
      expect(ingredient.body).toEqual(JSON.stringify(putIngredientToChangeResponse));
    });
   });

  //  it('tests delete function and returns the ingredient that is deleted', () => {
  //    fetch.mockResponse(JSON.stringify(   ));
  //
  //  });
 });
