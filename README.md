# text-regex-validation  ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)
## Introduction
This package includes the following functionalities 🐻

- **Text Validation:** This could include checks for length, presence of certain characters, format requirements (like email addresses or phone numbers), or any other rules you need. Use same method if you have your own regex with third parameter of your regex and make second parameter null.

- **Log Analysis:** For analyzing logs, you might want to create functions that parse log files and extract relevant data.

- **Search and Replace:** Implement functions that perform search and replace operations on strings..

- **URL Parsing:** Create functions that parse URLs into their component parts. Regular expressions can help with this by matching different parts of the URL (protocol, domain, path, query parameters, etc.) and extracting them into separate variables or objects.

- **Get Regex:** Create functions that return regex pattern for different inputs from user.

- - **Convert base64ToString:** This method will return string if we provide base64 value to it.
 
- - **Convert stringToBase64:** This method will return base64 if we provide string value to it.
## Installation

```bash
npm install text-regex-validation
```

OR

```bash
npm i text-regex-validation
```

## Usage Guidelines

### **Text Validation:**

To validate string or get regex you have to Call below function respectively. If you have your own regex then use same method by passing third parameter (your regex) and make second parameter null.

```.js
validateString(inputString, regexType) //string and regextype from table
validateString(inputString, null, {Your regex}) // Your regex must  be in /{your regex}/ like this not in "{your regex}" string. It will return true or false.
getRegex(regexType) // Regex Type will be same from the below regexType name It will return exact regex for that type
```

__regexType name must be same__

it will return **true or false(Boolean)**.
# Example
``` js
import {validateString,analyzeLog, searchAndReplace,parseUrl, base64ToString, stringToBase64} from 'text-regex-validation'
```
### TABLE

| regexType name | Input String Example | Description |
|:------:|:------:|:--:|
| email | `abc121@xyz.com` | This is for validation of E-mail pattern like {abc121@xyz.com} |
| url | `https://chat.openai.com` | This is for validation of URL pattern like {https://chat.openai.com} |
| date | `2024-03-04` | This is for validation of Date in pattern like {YYYY-MM-DD} |
| username | `username_123` | This is for validation of Username (Alphanumeric with underscores, hyphens, or periods) |
| time | `14:30` | This is for validation of Time (HH:MM 24-hour format) |
| ipv4 | `192.168.1.1` | This is for validation of IPv4 Address |
| ipv6 | `2001:0db8:85a3:0000:0000:8a2e:0370:7334` | This is for validation of IPv6 Address |
| creditcard | `4111111111111111` | This is for validation of Credit Card Number (Visa, MasterCard, American Express, Discover) |
| html | `<tag>content</tag>` | This is for validation of HTML Tags|
| zipus | `12345` or `12345-6789` | This is for validation of ZIP Code (U.S.) |
| phoneindia | `+911234567890` | This is for validation of Phone number og india like {+91{10 digits are allowed}} |
| phoneus | `+1 (555) 123-4567` | This is for validation of Phone number of US|
| phoneuk | `+44 20 1234 5678` | This is for validation of Phone number of UK|
| phoneaus | `+61 2 1234 5678` | This is for validation of Phone number of Australia|
| phonecan | `+1 (416) 123-4567` | This is for validation of Phone number of Canada|
| pin | `123456` | This is for validation of pin code |
| name | `John Doe` | This is for validation of name |
| password | `P@ssw0rd` | This is for validation of password |
| aadhar | `1234 5678 9101` | This is for validation of aadhar |
| username | `username123` | This is for validation of userName |


``` js
validateString("example@example.com", 'email')

// output :- true
```

### **Log Analysis:**

```js
analyzeLog('[2024-03-03 10:17:20] ERROR: Invalid username or password')

// output :- [
//  {
//    timestamp: '2024-03-03 10:17:20',
//    error: 'Invalid username or password',
//    ip: 'N/A'
//  }
// ]

```

### **Search and Replace:**

```js
searchAndReplace('This is sample data', 'is', 'not')

// output :- This not sample data

```

### **URL Parsing:**

```js
parseUrl('https://www.example.com:8080/path/to/page?param1=value1&param2=value2#section1')

// output :- {
//  protocol: 'https',
//  domain: 'www.example.com',
//  port: '8080',
//  path: '/path/to/page',
//  queryParams: [ 'param1=value1', 'param2=value2' ],
//  fragment: 'section1'
// }

```

### **Get Regex:**

``` js
getRegex('phoneindia')

// output :- /^\+?(91)?[\s-]?\d{10}$/

```

### **Convert base64ToString:**

```.js

const base64String = 'SGVsbG8sIFdvcmxkIQ==';
console.log(base64ToString(base64String));

// output :- Hello, World!

```

### **Convert stringToBase64:**

```.js

const base64String = 'Hello, World!';
console.log(stringToBase64(base64String));

// output :- SGVsbG8sIFdvcmxkIQ==

```

# Build
```bash
npm run build
```

# Contribute

If you would like to contribute your most welcome. Clone the repository 🐻.