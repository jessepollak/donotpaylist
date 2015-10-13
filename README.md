# Do not pay list

The goal of this project is to create a community maintained list of malicious (or problematic) Bitcoin addresses.

# User types

Do not pay list has two different types of users: consumers and contributors. These two user types can also be broken down into two distinct sets: businesses and individuals.

## Consumers

Consumers are individuals or organizations that want to determine whether a Bitcoin wallet address is potentially malicious. They should be able to do this by either entering the wallet address on the site or querying via an API.

### Authentication

Because this is a service for public good, you shouldn't need to authenticate to consume. 

## Contributors

Contributors are individuals or organizations that want to add malicious or problematic Bitcoin wallet addresses to the index. They should be able to do this by either entering the wallet address on the site or querying via an API.

### Authentication

#### Website Authentication

Individuals should be able to log in to the website with [Clef](getclef.com).

#### API Authentication

Organizations or individuals should be able to generate an API key that will allow them to make authenticated statements on wallets via an API.

# Address statements

An individual or organization should be able to make a _statement_ about a wallet address. This statement should include:

* type
    - malicious
    - address_overflow
* description

# Address quality score

An address in the system should have a score based on the number and type of statements made against it.

