# Golfr Frontend

This is the code for the Golfr app frontend.

## Setup

1. Set up the `golfr_backend` repository
2. Clone this repository
3. Install yarn
4. `yarn install`
5. Create a file `.env.local` with the following content
    ```
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    NEXT_PUBLIC_BASE_URL=http://localhost:3001
    ```
6. Start the frontend server `yarn dev -p 3001`
7. Visit http://localhost:3001

## Development

#### Running unit tests

`yarn test`

#### Running eslint

`yarn lint`
