# keyme-front

## Components:

### Products -
To display keys data, add a particular key design to cart and checkout cart, also created pagination for the keys with 9 keys showing up on each page.

### Cart
To show items added to the cart, go back to products if user wants to modify the order and go to the order form if cart items are correct.

### Order - 
To add shipping information in the order form and confirm order after shipping details are verified in the modal. After order confirmed in the modal, a snackbar like alert box appears at the bottom of the page and app goes to the products page.

## Design:
Used [TailwindCSS](https://tailwindcss.com/) an utility-first CSS framework which lets you add basic low-level components and design classes but also lets you add your own custom CSS classes and CSS styles along with tailwind's styling very well.

## State and routing:
Achieved routing between components using vue-router and maitaining order data and keys data across the app via state management using vuex.Kept it simple by using actions, getters and mutatations in a single store.

## Validation:
Implemented validation using [Vuelidate](https://vuelidate.js.org/). It's an awesome library with some basic validations like required, email and minLength etc. right out of the box and great documentation to create custom validators like validZip in the project.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
