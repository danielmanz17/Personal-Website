// Define an array of parts for textBlock1: text or link objects
const parts1 = [
  "Details & Tech Stack\n----------------------------------------------------\nRaspberry Pi 5\n3D-printed housing \nPython networking script \nPure Data patch\nC++ libtorch\n\nDisplayed at UAL Creative Computing Institute Winter \nFestival, Eagle Wharf Gallery, 2024\n\n",
  { text: "Brave GitHub repository", href: "https://github.com/danielmanz17/Brave" },
  " <<<<<<<<<<<<<<<<<<<<<<<<<<<<",
  "\n\n",
  { text: "Video Demo", href: "https://www.youtube.com/watch?v=0HugWkdesgw" },
  " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",
  "\n\n"
];

function renderText() {
  if (index < textContent.length) {
    textBlock.textContent += textContent[index];
    index++;
    setTimeout(renderText, 0); // adjust speed here
  }
}

document.addEventListener('DOMContentLoaded', renderText);

// text-render.js
const textContent1 = `Details & Tech Stack
----------------------------------------------------  
Raspberry Pi 5
3D-printed housing 
Python networking script 
Pure Data patch
C++ libtorch

Displayed at UAL Creative Computing Institute Winter 
Festival, Eagle Wharf Gallery, 2024

Brave GitHub repository

Video Demo

`;

const textContent3 = `References
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  
[1]  Broad, T., Berns, S., Colton, S., and Grierson, M. Active divergence with generative deep learning - A survey and taxonomy. CoRR abs/2107.05599 (2021).
[2]  Marcuse, H. One-Dimensional Man: Studies in the Ideology of Advanced Industrial Society. Beacon Press, Boston, 1964.
[3] Fisher, M. Capitalist Realism: Is There No Alternative? Zero Books, Winchester, UK, 2009.
`;

const textContent2 = `Project Description
-------------------------------------------------------------------------------------------------------------------
“Brave” proposes an embedded, electro-acoustic network bending instrument. As neural audio synthesis advances, inadvertently becoming an agent of cultural construction, we face increased risk of cultural homogenisation - autophagous AI feedback cycles suppressing atypical expression. Training corpora are moving from the natural to the synthetic, supporting a cycle of self-consuming generative modelling. As these tools are further assimilated into society and artistic practice, active divergence [1] from their monolithic output becomes increasingly necessary.

Homogenisation anxiety echoes parallel concerns of mass-consumerism/late-capitalism. Herbert Marcuse, philosopher of the Frankfurt school, describes the “enchained possibilities of advanced industrial societies”. In his seminal “One-Dimensional Man”, he describes the “wholesale incorporation” of cultural values through “reproduction and display on a massive scale” [2]. These ideas were inherited by cultural theorist Mark Fisher. In “Capitalist Realism”, he argues the “future harbors only re-iteration and re-permutation” [3], an empty recital, and an eery prediction of the endless reconstruction of training datasets.

Methods such as data rebalancing , augmentation and poisoning aim to address this issue. This work contributes to the “network-bending” framework - the direct manipulation of neural network parameters in deep generative modelling. How can the manipulation of ML network architecture become, in itself, an act of creative expression? How can an artist interface with this internal architecture in the context of live performance, manifesting cerebral diversity?

Through the fabrication of a physical network-bending instrument, Brave seeks to democratise participation in network-bending technologies and inspire further investigation within music technologist/sound art communities; stimulating seditious use of ML technology and a step away from generative homogeneity.`;

const textBlock1 = document.getElementById('text-block');
const textBlock2 = document.getElementById('text-block-2');
const textBlock3 = document.getElementById('text-block-3');

function renderText(target, text, delay = 0) {
  let index = 0;
  function step() {
    if (index < text.length) {    
      target.textContent += text[index++];
      setTimeout(step, delay);
    }
  }
  step();
}

function renderPart(target, part, index = 0, callback) {
  if (typeof part === "string") {
    // Render string char by char as text nodes
    if (index < part.length) {
      const textNode = document.createTextNode(part[index++]);
      target.appendChild(textNode);
      setTimeout(() => renderPart(target, part, index, callback), 20);
    } else {
      callback();
    }
  } else {
    // Part is a link object, render link char by char
    const a = document.createElement('a');
    a.href = part.href;
    a.target = "_blank";
    a.style.color = "inherit";
    a.style.textDecoration = "none";
    a.onmouseover = () => a.style.textDecoration = "underline";
    a.onmouseout = () => a.style.textDecoration = "none";
    target.appendChild(a);
    function renderLinkText(i = 0) {
      if (i < part.text.length) {
        a.textContent += part.text[i];
        setTimeout(() => renderLinkText(i + 1), 20);
      } else {
        callback();
      }
    }
    renderLinkText();
  }
}

function renderPartsSequentially(target, parts, i = 0) {
  if (i < parts.length) {
    renderPart(target, parts[i], 0, () => renderPartsSequentially(target, parts, i + 1));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderPartsSequentially(textBlock1, parts1);
  renderText(textBlock2, textContent2);
  renderText(textBlock3, textContent3);
});

