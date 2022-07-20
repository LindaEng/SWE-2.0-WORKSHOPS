# OAuth

## What are we learning today?
- What is OAuth?


# What is OAuth?
-It's a system that allows for Authentication to be relegated to another party. This means you can use login credentials from one provider to log onto the systems of another provider. For example, you can use google or apple login information to identify yourself in a game on your smartphone.

-Say, you want to visit a site like eBay. Because this website allows financial transactions, the owners want you to create an account. You can make an account on their system, but this forces you to provide your billing information, remember yet another password and other such annoyances. Instead, you can log on using your Google account. When prompted to authenticate, you input your credentials in a pop-up from a server owned by Google, not eBay. Google sends you an "OAuth-token": a cookie containing an encrypted message saying that Google is SURE you are who you say you are. The pop-up closes and the eBay-website collects the token, checks it and provides access. At the same time, through a separate channel, Google provides access to your billing information (if you opted-in, of course).

# Auth0 vs OAuth
- The difference between Auth0 and OAuth is:

- Auth0 makes OAuth

    - OAuth - an authorization standard that allows a user to grant limited access to their resources on one site to another site, without having to expose their credentials. You use this standard every time you log in to a site using your Google account and you are asked if you agree with sharing your email address and your contacts list with that site.

    - Auth0 - is an organisation, who manages Universal Identity Platform for web, mobile and IoT can handle any of them — B2C, B2B, B2E, or a combination.

# OpenID Connect (OIDC)
    - OpenID Connect (OIDC) is an open authentication protocol that profiles and extends OAuth 2.0 to add an identity layer. OIDC allows clients to confirm an end user’s identity using authentication by an authorization server. Implementing OIDC on top of OAuth 2.0 creates a single framework that promises to secure APIs, mobile native applications and browser applications in a single, cohesive architecture.