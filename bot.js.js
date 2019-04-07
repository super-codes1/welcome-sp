client.on("guildMemberAdd", member => {
  let welcome = member.guild.channels.find("name","name of chat");
  if(!welcome) return;
  if(welcome) {
      let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(member.user.avatarURL)  
      .setAuthor(member.user.username , member.user.avatarURL)
      .addField("**Welcome To**", `[${member.guild.name}]`, true)
      .addField(`**Number**`, `[${member.guild.memberCount}]`, true)
      .addField("**Name**", `[${member.user.username}#${member.user.discriminator}]`,true)
      .addField("**ID**", `[${member.user.id}]`, true)
      .addField('**Created AT**',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')}**n** `${moment(member.user.createdAt).fromNow()}``,true)            
      .addField("**Joined At**",`${moment(member.user.joinedAt).format('D/M/YYYY h:mm a')}**n** `${moment(member.user.joinedAt).fromNow()}``,true)    
      welcome.send(embed)

  }
  })
  
  ///////////////////////////BY AK//////////////super codes