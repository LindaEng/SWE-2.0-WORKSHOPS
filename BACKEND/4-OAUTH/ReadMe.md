# OAuth

## What are we learning today?
- Learn how to implement OAuth with Open ID Connect to log into an application using Google. 

- Touch base on expectations for the next 5 weeks.
- Group assignments for project.



## What is OAuth?
- It's a system that allows for Authentication to be relegated to another party. This means you can use login credentials from one provider to log onto the systems of another provider. For example, you can use google or apple login information to identify yourself in a game on your smartphone.

- OAuth attempts to provide a standard way for developers to offer their services via an api without forcing their users to expose their passwords (and other credentials).

- Say, you want to visit a site like eBay. Because this website allows financial transactions, the owners want you to create an account. You can make an account on their system, but this forces you to provide your billing information, remember yet another password and other such annoyances. Instead, you can log on using your Google account. When prompted to authenticate, you input your credentials in a pop-up from a server owned by Google, not eBay. 

- Google sends you an "OAuth-token": a cookie containing an encrypted message saying that Google is SURE you are who you say you are. The pop-up closes and the eBay-website collects the token, checks it and provides access. 

## Auth0 vs OAuth vs Open ID Connect
- OAuth - is a authorization framework for REST/APIs. 

- Open ID Connect - Simply put, OpenID is used for authentication while OAuth is used for authorization.

 - Auth0 - is an organisation, who manages Universal Identity Platform for web and mobile.

## Demo
- we will learn how to implement OAuth + Open ID Connect to be able to log in with our Google account. 
- we will learn how to configure our server to be able to integrate OAuth+OIDC
- Will will test out the endpoints that are provided for us once we configure our server to include OAuth.

## Stretch Goal
- I would like to invite you to implement OAuth for a Github login.