const Discord = require(`discord.js`)

function simpmeter(Options){

    var RandomNumber = Math.floor(Math.random() * (100 - 1) + 1)

    let Sentence = ` has a rating of % on the simpmeter!`
    let MentionedUser = message.mentions.users.first()
    if(Options.Simp === 'mentioned'){
        MentionedUser = message.mentions.users.first()
    }else if(Options.Simp === 'author'){
        MentionedUser = message.author
    }else if(Options.Simp === 'mentioned/author'){
        MentionedUser = message.mentions.users.first() || message.author
    }else{
         MentionedUser = message.mentions.users.first() || message.author
    }

    Sentence = (`${MentionedUser.username} has a rating of ${RandomNumber}% on the simpmeter!`)






    
       
      
        
    
    
   

  

}


module.exports.simpmeter = simpmeter;



