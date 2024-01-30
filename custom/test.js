var isToggled = false;

window.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase()==="z"){
    isToggled = !isToggled;
    PluginAPI.displayToChat({msg: "Working!" + isToggled});
  }
});
