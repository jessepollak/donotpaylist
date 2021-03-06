# Getting started

To get started with development, run:

```bash

$ npm install
$ npm run devHotLoader
$ # now, in a separate tab
$ run run watchHotLoader

```

# Do not pay list

The Do Not Pay List provides a tool for Bitcoin users to report Bitcoin addresses associated with fraud or other malicious activity to a community maintained list. This list can be used by Bitcoin wallet providers to provide enhanced user feedback with regards to malicious addresses. 

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
    - big query

* description
    - malicious - let us know what happened 
    - big query - Is a particular Bitcoin address causing issues for your system. Let other wallet providers know what to look out for.
    
# Address quality score

An address in the system should have a score based on the number and type of statements made against it.

# API

## Addresses

```
GET /api/v1/addresses
GET /api/v1/addresses/:addressID
```

## Report

A report is a negative vote against an address.

There are two types of reports:

* _malicious_ - the address belongs to an evildoer
* _technical_ - the address is causing the wallet to experience technical difficulties

```
GET /api/v1/reports # get a list of all reports (filter by address)
POST /api/v1/reports # create a report

    * type - (string) malicious|technical
    * description - (string) a prose description of the report
```

## Endorse

An endorsement is a positive vote for an address.

```
GET /api/v1/endorsements # get a list of all endorsements (filter by address)
POST /api/v1/endorsements # create an endorsement
```

##Get List of Malicious Addresses

**HTTP Request**
```
GET /api/v1/malicious
```
Parameters

```
Field                    Description

Votes                    Denote the minimum amount of votes per address (1,2,...,10);
```

##Get List of Blacklisted Addresses

**HTTP Request**
```
GET /api/v1/blacklist
```

Parameters

```
Field                    Description

Votes                    Denote the minimum amount of votes per address (1,2,...,10);
```


