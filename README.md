# Text Shortener

This is a text shortener that reduces the length of any string to either 6 or 7 characters. See below for explanation of the algorithm used.

## Link

client - https://link-shorten-client-b.web.app/  
server - https://link-short-server-b.herokuapp.com/

## Algorithm

The algorithm works by dividing the string into a number of segments. We then calculate the ASCII for each segment and then divide by a prime number. The code is converted back to characters

### Steps

- Calculate length of input string
- Calculate length of each segment by dividing length of string by number of segments
- Calculate the number of remaining characters by length of string modulo number of segments
- For each segment, calculate the sum of ASCII codes of each individual segment
- Divide the sum by a prime number
- If the result is less than 33, add 33 to the result
- Convert the resultant code back to character
- Append the character to the output string
- If there is a remainder, then perform the above steps and append the result to the output string

## Components

The `src` folder contains the code for both, the client and the server

### Client

Built using the React framework  
Libraries used:

- Axios: for network requests

### Server

Built using Express framework

### Tests

![BurhanuddinUdaipurwala](/screenshots/ss1.png)
![ThisIsATestString](/screenshots/ss2.png)
