// Define an array of parts for textBlock1: text or link objects
const parts1 = [
  "Details & Tech Stack\n----------------------------------------------------\Mac Mini \nPython Data Processing \nPure Data Sonification  \nPure Data patch \n\nCommisioned by Erika Tan\nTate Modern\n\n",
    { text: "Museum X Machine X Me", href: "https://www.tate.org.uk/whats-on/tate-modern/museum-machine-me-conference" },
  " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",
  "\n",
    { text: "Audio Recordings", href: "https://soundcloud.com/user307123979/the_museum_recording" },
  " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",
  "\n",
  { text: "GitHub", href: "https://github.com/danhearn/ancestral-revocations-installation" },
  " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",
  "\n"
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
Data sonification through a ‘DIY' diagnostic tool consisting of fragmented instruments/mechanised parts, and the feedback of live machine learning museum soundscapes. Working closely with artist Erika Tan, I constructed an archival sonification schema. The commissioned work has developed as a practice-led research project supported by the Decolonising Arts Institute, Transforming Collections Artist Research Residencies.

Ancestral (r)Evocations gathers and scrapes collections data referencing ‘Southeast Asia’ from British institutions (Tate and Wellcome Collection) to bring together forms of computational processes and human–computer collaboration where data, digitised and physical materials, speculation and generative processes create a series of loosely subjective and firmly indexical sound and image events. Probing the depths of museal collections, processes and their current states of ‘health and well-being’.

I was commissioned to develop the ‘semantic sound’ layer - collections data is translated into numerical vectors and ‘labelled’ (a machine learning process) based on the existence (or lack of) racialised collections data statements, separating data into binaries which feed new systems of sonification and machine learning. Sounds collected in the Tate Modern repository were used to train a Realtime Audio Variational autoEncoder (RAVE) - a neural network model that learns to re-synthesise the training corpus, artificially, in real-time.

The model learns a compressed, low-dimensional representation of the high-dimensional audio input. This compressed "manifold" can be explored through exploration of the “latent space” - movement within this space will modify the audio output, corresponding to different learned representations of the archival training data. This space is explored, and semantically meaningful movements can be automated using the translated numerical vectors. This creates a generative soundscape, constantly changing, yet supporting the conceptual framework of the artwork. These ‘live’ components of sound feedback machine learnt and generated sounds of ‘Tate Modern’ and a more musical track of reconfigured recordings of the instruments.
`;

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

