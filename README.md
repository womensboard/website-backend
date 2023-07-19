### Installation

To make this work you have install the following:

- [direnv](https://direnv.net/docs/installation.html): A package used to manage env variables

### Setup

To setup the project add env variables using the env.example as follows:

- Create an `.envrc` or `.env` file
- Add env variables into the file using the format:
```bash
export VARIABLE_NAME1=VARIABLE_VALUE
export VARIABLE_NAME2=VARIABLE_VALUE
```
- Run `direnv allow` on your terminal. This adds all the env variables from your `.envrc` file 
- Start the server using `npm run dev` 
