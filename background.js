const svgIcons = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
</svg>
`,
  `<svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-tool"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" /></svg>`,
  `<svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-terminal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 7l5 5l-5 5" /><path d="M12 19l7 0" /></svg>`,
];

const container = document.getElementById('svg-background');

function generateBackground() {
  container.innerHTML = ''; // Очищаем фон
  let iconSize;

  if (window.innerWidth < 750) {
    iconSize = 45;
  } else {
    iconSize = 40;
  }

  const cols = (window.innerWidth / iconSize) * 4;

  const rows = Math.ceil(window.innerHeight / iconSize) * 4;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (Math.random() <= 0.2) {
        const div = document.createElement('div');
        div.classList.add('svg-icon');
        div.style.position = 'fixed';

        div.style.width = `${iconSize}px`;
        div.style.height = `${iconSize}px`;

        div.style.left = `${col * iconSize}px`;
        div.style.top = `${row * iconSize}px`;

        div.style.color = `rgba(128, 128, 128, 0.45)`;

        div.innerHTML = svgIcons[Math.floor(Math.random() * svgIcons.length)];

        container.appendChild(div);
      }
    }
  }
}

// Генерируем фон при загрузке страницы
generateBackground();

