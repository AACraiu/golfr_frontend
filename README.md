# Golfr Frontend

This is the code for the Golfr app frontend.

## Setup

1. Set up the `golfr_backend` repository
2. Go to `Actions` tab and enable workflows
3. Clone this repository
4. Install yarn
5. `yarn install`
6. Create a file `.env.local` with the following content
    ```
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    NEXT_PUBLIC_BASE_URL=http://localhost:3001
    ```
7. Start the frontend server `yarn dev -p 3001`
8. Visit http://localhost:3001
9. You can login using any of the accounts in the backend `seeds` file

## Development
<!-- 
#### Running unit tests

`yarn test`
 -->
#### Running eslint

`yarn lint`
