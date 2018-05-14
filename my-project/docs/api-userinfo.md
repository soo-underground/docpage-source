This method allows you to get all info about user's account


# Request syntax
`https://api.mywebsite.com/userinfo?uid=<user_id>`
query parameters:
  uid -- User Id

# Response syntax

Parameter | Info | Type
------------ | ------------- | ------------
uid | user id  | integer
age | user's age  | integer
text  | user's description  |  string

# Request example
`https://api.mywebsite.com/userinfo?uid=124334426`

# Response example
```JSON
user:
  {
    uid:124334426,
    age:21,
    text: 'test text'
  }
```
