# EaglerReborn-plugins
list of official EaglerReborn plugins, and also some ones that I made.

## The plugins I have made are in the "custom" folder, currently there is:
- a test. when you press "z" a chat meassage sould pop up saying "enabled"

  ## to make your own:
  ``` javascript
var isToggled = false;

window.addEventListener("keydown", (event) => { //look for key down
  if (event.key.toLowerCase()==="z"){
    PluginAPI.displayToChat({msg: "Working!" + isToggled});
  }
});
  ```
you can veiw the pluginAPI file [here](https://github.com/EaglerReborn/reborn-example-plugin/blob/main/src/PluginAPI.d.ts)
# THIS DOES NOT CONTAIN ANY SOUCECODE OF EAGLER, SO YOU CAN'T DMCA
