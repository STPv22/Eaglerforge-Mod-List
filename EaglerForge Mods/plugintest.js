var isToggled = false;

ModAPI.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "t"){
      if (isToggled){
          ModAPI.displayToChat({msg: ModAPI.sendchatmessage({message:"hello this is a example mod!"})})
        isToggled = !isToggled;
      }
      if (!isToggled){
        isToggled = true;
      }
  }
}); 
