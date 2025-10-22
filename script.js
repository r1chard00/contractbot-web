const output = document.querySelector(".intro__output");
const intro = document.querySelector(".intro");
const page = document.querySelector(".page");

const sequence = [
  {
    text: "Initializing secure uplink...",
    delayBetweenCharacters: 32,
    delayAfterLine: 650,
  },
  {
    text: "Connecting to Ministry mainframe [██████████]",
    delayBetweenCharacters: 28,
    delayAfterLine: 900,
  },
  {
    text: "Enter clearance code: **********",
    delayBetweenCharacters: 65,
    delayAfterLine: 1100,
  },
  {
    text: "Decrypting access token...",
    delayBetweenCharacters: 42,
    delayAfterLine: 700,
  },
  {
    text: "Biometric verification: <strong>Accepted</strong>",
    delayBetweenCharacters: 36,
    delayAfterLine: 750,
  },
  {
    text: "Cipher handshake complete.",
    delayBetweenCharacters: 34,
    delayAfterLine: 650,
  },
  {
    text: "ACCESS STATUS: <strong>GRANTED</strong>",
    delayBetweenCharacters: 50,
    delayAfterLine: 1300,
  },
];

async function typeLine({ text, delayBetweenCharacters, delayAfterLine }) {
  const paragraph = document.createElement("p");
  output.appendChild(paragraph);

  for (const char of text) {
    paragraph.innerHTML += char;
    await new Promise((resolve) => setTimeout(resolve, delayBetweenCharacters));
  }

  await new Promise((resolve) => setTimeout(resolve, delayAfterLine));
}

async function startIntro() {
  for (const line of sequence) {
    await typeLine(line);
  }

  intro.classList.add("is-unlocking");

  setTimeout(() => {
    intro.classList.add("is-complete");
    page.classList.add("is-visible");
  }, 900);
}

window.addEventListener("DOMContentLoaded", () => {
  if (!intro || !output || !page) return;
  startIntro();
  intro.addEventListener("animationend", (event) => {
    if (event.animationName === "fadeAway") {
      intro.remove();
    }
  });
});
