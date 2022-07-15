# JWT

## What are we covering today?

- Json Web Token to demonstrate authentication and authorization
- Break down the difference between Authentication and Authorization
- Enviornmental Variables
    -What are they?
    -How to set an Enviornment Variable
        -Temporary
        -Permanent
- How to create a token
- How to utilize JWT within routes 
    -register a user
    -log in as a user

## 3.1 - JWT
- What is JWT?
    - JWT JSON WEB TOKEN - is a way to securely transmit information between parties as a JSON object. JWT is mainly used for authentication (to verify a user) and for authorization ex: Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token.

- How does it work?<br>
    -sequencing: <br>
        - client ----- login credentials ----> Server(if credits are valid) <br>
                 <---- Signed JWT ------------   <br>

        - now that the client is logged in -  

        - client ----- request with JWT ----> Server(if JWT is valid (is the user))<br>
                 <---- response ------------    <br>  

    - we can create a JWT by using .sign(payload, secret) 
    - we also have the ability to decode the token to retrieve the original payload data by using .verify(token, secret) xxx.yyy.zzz -> {id: , username: }

## 3.2 - Environment Secrets
- What is an environmental variable?

An environment variable is a variable whose value is set outside the program, typically through functionality built into the operating system or microservice. An environment variable is made up of a name/value pair, and any number may be created and available for reference at a point in time.

- How to create an Enviornmental Variable
- Checking what enviornemental variables you have:
    - First lets check your Enviornmental variables by typing printenv.
    - If you want to check a specific environment variable, you can do check it with command “echo $variable_name” <br>

    - Temporary:<br> // testing purposes
        - in your terminal type export TEST_VARIABLE = test_variable //SCREAMING_SNAKE_CASE
        - printenv (check to see if its there!)
        - And then close the terminal window and open another one to check out if the set variable has disappeared or not.
    
    - Permanent: <br>
        - move to the top of your directory 
        - nano ~/.bash_profile or vim ~/.bash_profile
        - within the nano or vim editor
        - type export VARIABLE_NAME=yourData
        - make sure to save (if you don't know look it up!)
        - in a separate terminal: source ~/.bash_profile <-this saves and updates your bash_profile file
        - printenv to check your new permanent variable!

    - How to delete enviornmental Variables:
        - unset NAME_OF_VARIABLE

    
    - How to access enviornmental Variables in a project:
        - npm i dotenv
        - make sure you require('dotenv').config()
        - now you have access to process.env.NameOfVariable
        - make sure you use SCREAMING_SNAKE_CASE
        - make sure you add the .env file to your .gitignore so you do not upload any sensitive information to github.

    - to use Enviornmental Variables in your project
        - make sure your npm install dotenv

    - nano ~/.zshrc
    - make your changes
    - source ~/.zshrc
    - printenv 
    - Permanent Enviornement Variable

## 3.4 - DEMO Login + Register - JWT
- We'll demo how to utilize a JWT when registering a new user + logging in

## 3.5 - DEMO Auth Middleware - JWT
- We'll demo how to grant access to a user that is logged in
