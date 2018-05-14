This method allows you to get a user's note


# Request syntax
Every user has note id's starts from 00001. To access particular note you have to put doth user's and note's ids in query parameters.
`https://api.mywebsite.com/userinfo?uid=<user_id>&nid=<note_id>`
query parameters:
  uid -- User ID.
  nid -- Note number.

# Response syntax

Parameter | Info | Type
------------ | ------------- | ------------
nid | user id  | integer
title | note's title  | string
text  | note's body  |  string

# Request example
`https://api.mywebsite.com/userinfo?uid=124334426&nid=00012`

# Response example
```JSON
note:
  {
    nid:00012,
    title:'my note',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
```
