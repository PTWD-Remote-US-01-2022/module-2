![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Axios CRUD exercise (with Node)

## Introduction

![image](https://user-images.githubusercontent.com/23629340/36733655-8c9903fa-1bd1-11e8-82f7-d425ab140c09.png)

In this exercise, we will use all what we have learned about APIs and how to connect an application to them through **Axios**.

## Requirements

- Fork this repo
- Then clone this repo

## Submission

- Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Instructions

The base URL is **`https://ih-crud-api.herokuapp.com`**. This API allows us to get some data from it, create new documents in its _characters_ collection, update existing characters as well as delete them from the database. Every character has these properties:

- `name` - String,
- `occupation` - String,
- `weapon` - String,
- `debt` - Boolean.

Here are the relevant API endpoints (routes) that the Characters API provides to use and which we will be using:

| Route             | HTTP Verb | Description                     |
| ----------------- | --------- | ------------------------------- |
| `/characters`     | GET       | List of all characters          |
| `/characters/:id` | GET       | Details of a specific character |
| `/characters`     | POST      | Create a new character          |
| `/characters/:id` | PUT/PATCH | Update a specific character     |
| `/characters/:id` | DELETE    | Delete a specific character     |

:::info
All these routes must be prefixed with the API's base URL: **`https://ih-crud-api.herokuapp.com`**.
:::

The way how the endpoints are presented in the table above is the usual approach you will find in the majority API documentations. The base URL will be given once, and it is considered that it will be prefixed to each endpoint by default. For example, the full URL of the `/characters` endpoint would be `https://ih-crud-api.herokuapp.com/characters`. 

<br>

**_Reminder_**: Whenever you use the data provided by the 3rd party APIs, **you should always log the response of an API** to check the structure of the data. Knowing the structure of the response will allow us to capture the right properties and to know what type of data we are working with.

<br>

## General setup

- Create `characters.routes.js` file inside the `routes` folder
  - Don't forget to link these newly created routes to the `app.js`
- Create the `characters-views` subfolder inside the `views` folder and then create the following HBS files:
  - `list-characters.hbs`
  - `details-character.hbs`
  - `create-character.hbs`
  - `edit-character.hbs`

### List all characters

- Create a **GET** route `/characters-list` in the `characters.routes.js` file. 
- Inside, use AXIOS to get the list of all characters using the `https://ih-crud-api.herokuapp.com/characters` endpoint.
- Render the response to the `list-characters.hbs`.

### Character Details Page

- Create a **GET** route `/characters/:id` in the `characters.routes.js` file. 
- Inside, use AXIOS to get the list of all characters using the `https://ih-crud-api.herokuapp.com/characters/:id` endpoint.
- Render the response to the `details-character.hbs`.

### Create a new character

- Create a **POST** route `/characters/create` in the `characters.routes.js` file.
- Inside, use AXIOS to POST a newly created character's object using the `https://ih-crud-api.herokuapp.com/characters` endpoint.
- Redirect to `/characters` to see the full list of characters and your new character on it.

### Update a character

- Create GET route `/characters/:id/edit` in the `characters.routes.js` file and render the `edit-character.hbs` page on it.
  - Make sure the form is pre-loaded with the details of a specific character you want to update. The form should have the method POST and action set to `/characters/:id/update` route.
- After that, create a **POST** route `/characters/:id/update` in the `characters.routes.js` file.
- Inside, use AXIOS to PUT/PATCH an updated character's object using the `https://ih-crud-api.herokuapp.com/characters/:id` endpoint.
- Redirect to `/characters/:id` to see the updated character details and the changes you made.

### Delete a character

- Create a form in the `details-character.hbs` file and set it to use POST method and action set to the route `/characters/:id/delete`.
- After that, create a **POST** route `/characters/:id/delete` in the `characters.routes.js` file.
- Inside, use AXIOS to DELETE a character object using the `https://ih-crud-api.herokuapp.com/characters/:id` endpoint.
- Redirect to `/characters` to see the full list of characters and to notice that the deleted character is not on the list.

<br>

That would be all!

<br>

Happy coding! :heart:
