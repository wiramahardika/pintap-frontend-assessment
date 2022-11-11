# Pintap FE Assessment
https://pintap-frontend-assessment.vercel.app/

---

## Acceptance Criteria
This application will use https://dummyjson.com/docs for the data source

### Product Details Page
- The page shows the complete details of a products that includes:
  - Product name
  - Product images
  - Price is US$, show its original and its discounted price if its discounted
  - Stocks
  - Category
  - Rating (X of 5)
  - Product details
- User can add the products to the cart but does not link to the cart page because it’s
just a dummy
- User can view a list of products from the same category of the product
- User can open the cart page from this page

### User Cart Page
- Checkout page only consist of:
  - products in the cart,
  - the quantity of the product
  - product price and its discounted price if its discounted
  - total price
  - checkout button
- User can increase or decrease the quantities of an item
- User can remove an item from the cart
- User can check out the carts and return the user to last visited products
- User Cart Page use GET request from the API.

---

## Assumptions
- Since the acceptance criteria didn't mention which user should we use for the cart API, we hardcoded the user ID with `5`.
- For the requirement below, it didn't mention a specific expected behavior if user add an item to the cart, so in this project the "Add cart" button will act as a simple toggle. However, once the item sent to cart we can not remove it from the cart because the requirement also didn't mention the behavior for removing cart items from product details page.
```
User can add the products to the cart but does not link to the cart page because it’s just a dummy
```
- For the requirement below, there are no requirements for check out behavior and last visited product, thus when user click checkout it won't do anything.
```
User can check out the carts and return the user to last visited products
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---

## Deployment
This project deployed to production using [Vercel](https://vercel.com). You can view the deployed version of this project live on:

https://pintap-frontend-assessment.vercel.app/

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
