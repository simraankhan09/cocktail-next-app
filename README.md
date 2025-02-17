## Overview

The project is showcase for -

- Display Random cocktails
- Search cocktails by name
- Add/Remove cocktails from favourite list

This project uses -

- NextJS - 15
- Typescript
- TailwindCSS
- Third Party API from - [API](https://www.thecocktaildb.com/api.php)

## Run the project locally

1. Install Node Modules
   ```bash
   npm install
   #or
   yarn install
   ```
2. Run the server locally
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Run Test Suite

```bash
npm run test
# watch mode
npm run test:watch
```

## Aditional Information

- Since displaying random cocktail required to call an api 5 times and it have refresh button, I created client component, error handling & loading handle within that component.
- Since API not paginated I have created pagination with all search results.
- Since project have minimal UI elements, I am not using any UI library.

```

```
