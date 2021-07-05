# About

Add-on a Simpmeter command into your discord bot using this package

* Reduces the code that is being run in your bot, which in turn increases your bot-latency
* Also Usable as a random number generator
* Always use the stable version **1.1.2** in case you find any bugs in the other versions.


# Installation 

```
npm i simpmeter-discord.js
```

# Usage

**Usage in a discord bot:** (You can modify it to work for your needs.)
```javascript
const simpmeter = require('simpmeter-discord.js')

const Result = simpmeter.calculate(1,100)


        message.channel.send(`You have a rating of ${Result}% on the simpmeter`)

``` 

**Usage as a random number generator**
```javascript
const simpmeter = require('simpmeter-discord.js')

const Result = simpmeter.calculate(1,100)


        console.log(Result)
```

# Issues

 Feel free to contact me on [Twitter](https://twitter.com/RobertCodez1) to report any bugs, or suggest any improvements. Or you can open an Issue here.


