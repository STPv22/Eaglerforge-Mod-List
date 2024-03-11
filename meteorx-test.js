var guiVisible = false; // Variable to keep track of the visibility of the GUI

function toggleGui() { // Function to toggle the GUI visibility
    if (guiVisible) { // If the GUI is visible
        hideGui(); // Hide the GUI
    } else {
        showGui(); // Otherwise, show the GUI
    }
}

function showGui() { // Function to show the GUI
    hideGui(); // If the GUI is already open, this will hide it.
    var gui = document.createElement("gui"); // Create a new "gui" element
    gui.innerHTML =`
    <gui id="myGui" style="width: 100%;height: 100%;position: fixed;top: 0px;left: 0px;z-index: 10;color: white;font-family: Minecraftia, sans-serif;overflow: hidden scroll;background-color: rgba(80, 80, 80, 0.42);background-blend-mode: multiply;background-size: 64px;">
    <h1 style="text-shadow: 0px 0px 4px;">MeteorX GUI</h1>
    <p style="font-size: 0.8rem; color: yellow;">(totally not stollen from plugin manager's gui)</p><p style="font-size: 0.8rem; color: yellow;">ik the gui looks kinda bad for a hacked client but its meteorX alpha ig. i WILL update this gui in the future</p><p style="font-size: 0.8rem; color: orangered;">click on "Activate" to activate a hack and click on "Deactivate" to deactivate a hack</p>
    <table style="table-layout: fixed; width: 100%;">
        <tbody><tr style="background: rgb(80, 80, 80);">
            <th style="text-align: center;">hax</th>
            <th style="text-align: center; width: 15%;">active/deactive</th>
        </tr>
        <tr style="box-shadow: grey 0px 2px 0px;">
            <td style="user-select: text;background-color: #9d00ff30;">Jetpack (hold space to fly) 🎒💨</td>
            <td style="background-color: gray; text-align: center;">Activate</td>
        </tr>
    </tbody></table>
    <a style="background: transparent; text-align: center; color: yellow; cursor: pointer; font-family: Minecraftia, sans-serif; text-decoration: underline; border: 0px; margin-right: 1rem; font-size: 1rem;" href="https://github.com/radmanplays/MeteorX/issues/new" target="_blank">suggest a new feature/hack</a>
    <a style="background: transparent;text-align: center;color: orange;cursor: pointer;font-family: Minecraftia, sans-serif;text-decoration: underline;border: 0px;font-size: 1rem;" href="https://github.com/orgs/EaglerReborn/discussions/9" target="_blank">version Roadmap</a>
    
</gui>
    `; // Set the HTML content of the "gui" element
    gui.id = "myGui"; // Set the ID of the "gui" element to "myGui"
    gui.style.width = '100%';
    gui.style.height = '100%';
    gui.style.position = 'fixed';
    gui.style.top = '0px';
    gui.style.left = '0px';
    gui.style.zIndex = '10';
    gui.style.color = 'white';
    gui.style.fontFamily = 'Minecraftia, sans-serif';
    gui.style.overflow = 'hidden scroll';
    gui.style.backgroundColor = 'rgba(80, 80, 80, 0.42)';
    gui.style.backgroundBlendMode = 'multiply';
    gui.style.backgroundSize = '64px';
    document.body.appendChild(gui); // Append the "gui" element to the body of the document
    guiVisible = true; // Set the GUI visibility to true
}

function hideGui() { // Function to hide the GUI
    if (document.getElementById("myGui")) { // If the "myGui" element exists
        document.getElementById("myGui").remove(); // Remove the "myGui" element from the document
    }
    guiVisible = false; // Set the GUI visibility to false
}

window.addEventListener("keydown", (event) => { // Event listener for keydown events
    if (event.key === "Shift" && event.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) { // If the right Shift key is pressed
        toggleGui(); // Toggle the GUI visibility
    }
    
    if (event.key === "Escape") { // If the Escape key is pressed
        hideGui(); // Hide the GUI
    }
});
