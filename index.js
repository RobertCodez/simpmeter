
/**
 * 
 * @param {Int} low This parameter will be your lowest digit [Example: If your "low" digit is '1' then it will give you a random number between 1 and "high"]
 * @param {Int} high This parameter will be your highest digit [Example: If your "high" digit is '30' then it will give you a random number between "low" and 30]
 * @returns 
 */

 const Discord = require('discord.js')


function calculate(low, high){
    let Result = Math.floor(Math.random() * (high - low) + low)
 let res = JSON.parse(Result)

 return res;
}


module.exports.calculate = calculate;



