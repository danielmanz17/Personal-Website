const asciiArt = `
                               ..=:.-=-:. ....:......                                      
                          .-+*****##**#**************+:..                                  
  daniel manz :)      :=++*####***#%##**+###*#####*###*****+-                              
                   :+**#*###*****#########**##*##########*#****.                          
              ++****####*####*###########*####%##%######%%####*+                          
              :*###**###*####**#%###%######*######%############*:.                        
           :+*##################%#######*#############%#########*=:                        
          +#**######%##########*##*#####**#######*#######%%######*+                        
        .+#**#%%###%%#####%####*##*##*****#********#####%%#########+.                      
     . :+##**##%###%%%#####%###*##*##**##****+****######%%##%######+.                      
     .+*%##**#######%%%######******#+#*****+**+****###*%%%#######%#+.                      
     -+##*#*###%##########%####****####*#*#********##*#%%%##%####%%*-                      
    :+*##*#*#####*#########%###################********#%%%%%###%%%#+                      
    -**###****####**##*#**#####***#######*****##*******#%%%%%#%#%%%#+.                    
    -****#****#**####*****#*##*+====+**=:::::::-+++++**#%%%%%##%%%##*=                    
    .=*#*****##*******++=+*#**+-:::..:::....:::::--==++*###%%##%%%%##=.                    
     +*##*+=++++++***+=-::=+++-::...........::::::--==+*##%%%%%%%%##*=.                    
     =+*==-=--===-=++=::...::.................::::--==+#%%%%%%%####+==.                    
     =+*=:............................::::---::::::--+*%%%%%%%####+=*+-.                  
     =**+:.........................::-=======-----:--=*#%%%%%###%*+==+=:                  
     =**#-......................::-=+*++=-:::-----:::-=+*#%%####*===-==:                  
     :+*%*....................:-=+****+========--:::::=**#%##*#*#*++=--.                  
      =*##.:::::::::::::..:::--=++*#*+*#+%##++==-:...::-+**+***+**+++-.                    
      .+*+==+++++====--:...::-=++*+++-..***=---::.....::::-=++=--+=+=-:                    
       .-=::::--=*#***+-....:-=====--::::-::::........:::::-++--:==---.                    
         .=.:-*#*%%%#+=-....::---==-:::..............::::::----:+-::::-.                  
        .=+=:==-:-=----:....::::::---:::.............:::::::-:----:::.                    
          .:..::::::::::...::::::::::::::...........:::::::::::---::                      
            ........::.....:::::::::::...........::::::::::::::-=.                        
            ...............:::-----:............::::::::::::::--:                          
            ..............::::::----:.............::::::::::::--:                          
             ..............::-:::::--:...........:::::::::::::--:                          
              .............::-::-:--+-:..........::::::::::---:::                          
              .........::::--======+-:...........::::::::::---:::                          
               ..........-====+==--::.............:::::::::---:::                          
                ..........:::::.::::::..:.......::::::::::----:::                          
                 ...................::.....:...::::::::::-----:::                          
                 ................::.:..::::::..:::::::::-------::                          
                  .......:::::--======++--:::::::::::----------::.                        
                   .....:====+++*+====-::::::::::::::-----==---:::.                        
                    ....::----::-:--::::::::::::::::-----===---::::.                      
                     ....::----:---:---::::::::::::-----====---:::::.                      
                      ..::::---===----::::::::::::---==+====---::::::.                    
                        :::::---:::........::::----===++===-----::::::.                    
                         ::::::...........::::---==++++====------::::::.                  
                          .:::...........:::--===+++++====--:::--:::::::::--.              
                    .....:**=:::::::::::::-===+++++++===----::::--::::::.:-*#*-            
              .........:+#%%#*=--::::----=++++++++====----::::::--:::::..:+%%%##+=.        
            ..........-*%%%%%%+---=====+==========------::::::::::::::...=%%%%%%%%##=      
          ...........=#%%%%%##%-::---=========--------::::::::::::::::..-#%%%%%%%%%%%#=.  
         ...........+%%%%%%#%%%=::---=====--------:::::::::::::::::::..:#%%%%%%%%%%%%%%#*-.
        ..........:*%%%%%%#%#*=-::---====---------:::::::::::::::.::.::*%%%%%%%%%%%%%%%%%%%
      ...........:*%%%%%%##*-:::::------------------:::::::::::......:*%%%%%%%%%%%%%%%%%%%%
     ...........:#%%%%%##%=::::::::-----------------:::::::::...:...:*%%%%%%%%%%%%%%%%%%%%%
   ............:*%%%%%%#%+::...::::--------::::----:::::::::..:....:*%%%%%%%%%%%%%%%%%%%#%#
  .............%%%%%%%%%#=...::::::-------:::::::::::::::::.::.....*%%%%%%%%%%%%%%%%%%%%#*=
..............%%%%%%%%%%+:::::::::------::::::::::::::::...::.....*%%%%%%%%%%%%%%%%%%%#*+-:
`;

const contentMap = {
    Portfolio: `Brave, 2024
Embedded AI-driven sound synthesiser, enabling network-bending
---------------------------------------------------------------
Ancestral (r)Evocations, 2024
Archival sonification instrument, live ML feedback soundscape
---------------------------------------------------------------
Iconostasis, 2023
Audio-reactive roses, using JavaScript + PureData 
---------------------------------------------------------------`,
    CV: `This is the CV content.\nMore lines here...`,
    Bio: `Research-practitioner specialising in ML-based audio synthesis, instrument fabrication and human-AI interaction. 
Seeking to empower artists in a time of rapidly developing AI technology, leveraging unorthodox applications of generative models and user-centred design methodologies.`,
    Contact: `please feel free to contact me ⊹╰(⌣ʟ⌣)╯⊹
email: danmanzdesign@gmail.com
number: +44 7581 466 806
instagram: @manzzzzzzzzzzd
`
};

const portfolioLinks = {
  'Brave, 2024': 'brave.html',
  'Ancestral (r)Evocations, 2024': 'ancestral.html',
  'Iconostasis, 2023': 'iconostasis.html'
};

document.addEventListener("DOMContentLoaded", () => {
  const asciiTarget = document.getElementById("ascii-art");

  let asciiIndex = 0;
  let asciiDisplay = asciiArt.split('').map(ch => (ch === '\n' ? '\n' : ' '));

  const nonSpaceIndices = [];
  for (let i = 0; i < asciiArt.length; i++) {
    if (asciiArt[i] !== ' ' && asciiArt[i] !== '\n') {
      nonSpaceIndices.push(i);
    }
  }

  function renderAsciiStep() {

    const charsPerFrame = 6;

    for (
      let j = 0;
      j < charsPerFrame && asciiIndex < nonSpaceIndices.length;
      j++, asciiIndex++
    ) {
      const pos = nonSpaceIndices[asciiIndex];
      asciiDisplay[pos] = asciiArt[pos];
    }

    asciiTarget.textContent = asciiDisplay.join('');

    if (asciiIndex < nonSpaceIndices.length) {
      setTimeout(renderAsciiStep, 0); // Smooth animation
    } else {
      // Optional: show nav or trigger animations
      // document.querySelector("nav").style.display = "flex";
      // animateNavLinks();
    }
  }

  const textBox = document.getElementById("text-box");

  function renderTextBox(text, isPortfolio = false) {
    let i = 0;
    textBox.innerHTML = '';
    const chars = text.split('');
    const display = [];

    function renderStep() {
      if (i < chars.length) {
        display.push(chars[i]);
        textBox.textContent = display.join('');
        i++;
        setTimeout(renderStep, 0);
      } else if (isPortfolio) {
        Object.entries(portfolioLinks).forEach(([title, href]) => {
          textBox.innerHTML = textBox.innerHTML.replace(
            title,
            `<a href="${href}">${title}</a>`
          );
        });
      }
    }

    renderStep();
  }

renderAsciiStep();

document.querySelectorAll('nav .menu li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const key = e.target.textContent.trim();
    if (key === 'CV') {
      window.open('./assets/  docs/cv.pdf', '_blank');
    } else if (key === 'Portfolio') {
      renderTextBox(contentMap[key], true);
    } else if (contentMap[key]) {
      renderTextBox(contentMap[key]);
    }
  });
});
});
