// Define an array of parts for textBlock1: text or link objects
const parts1 = [
  "Details & Tech Stack\n----------------------------------------------------\nJavaScript.P5\nPureData \n\n",
  { text: "Deployment", href: "https://danielmanz17.github.io/Iconostasis/" },
  " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",
  "\n",

    { text: "Phone ◕_◕", href: "https://www.instagram.com/p/C9zR8CPvs_3/" },
  " <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",
  "\n",
  { text: "GitHub", href: "https://github.com/danielmanz17/Iconostasis" },
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

const textContent2 = `Project Description
-------------------------------------------------------------------------------------------------------------------
Iconostasis is an audio-reactive piece created using the p5 JavaScript library.  The work explores the “rose equation”  r = asin(nθ), discovered by Italian mathematician/philosopher Guido Grandi (1671-1742). High values of a are used, revealing geometric patterns at the very centre of these rose curves which typically remain unseen. Incrementing n by low values causes a perceived rotation as the curve moves through different configurations. The sound is taken from a jam with a sequencer I built in Pure Data. A combination of clicks and bursts of white noise are used to create generative rhythms.`;

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

