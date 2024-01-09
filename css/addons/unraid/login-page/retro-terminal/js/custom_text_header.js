
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                   
      __  ______   __________    _______  _____________________  ___
     /  |/  /   | / ____/  _/   / ___/\ \/ / ___/_  __/ ____/  |/  /
    / /|_/ / /| |/ / __ / /_____\__ \  \  /\__ \ / / / __/ / /|_/ / 
   / /  / / ___ / /_/ // /_____/__/ /  / /___/ // / / /___/ /  / /  
  /_/  /_/_/  |_\____/___/___ /____/__/_//____//_/ /_____/_/  /_/   
                    /  _/ __ \/ ____/ / / / /                       
                    / // /_/ / __/ / / / / /                        
                  _/ // _, _/ /___/ /_/ / /___                      
                 /___/_/ |_/_____/\____/_____/                      


                                                                   
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
