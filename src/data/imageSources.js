const optimizedAssets = import.meta.glob('../assets/optimized/*.webp', {
  eager: true,
  import: 'default',
});

function asset(filename) {
  const url = optimizedAssets[`../assets/optimized/${filename}`];
  if (!url) throw new Error(`Missing optimized image: ${filename}`);
  return url;
}

function srcSet(name, widths) {
  return widths.map((width) => `${asset(`${name}-${width}w.webp`)} ${width}w`).join(', ');
}

function responsiveImage(name, widths, fallbackWidth = widths[widths.length - 1]) {
  return {
    src: asset(`${name}-${fallbackWidth}w.webp`),
    srcSet: srcSet(name, widths),
  };
}

export const imageSources = {
  hero: responsiveImage('hero-code', [640, 1024, 1440, 1920]),
  footer: responsiveImage('footer-coding', [640, 1024, 1440]),
  portrait: responsiveImage('portrait-jonathan', [447]),
  skills: {
    html: asset('skill-html-64w.webp'),
    css: asset('skill-css-64w.webp'),
    javascript: asset('skill-javascript-64w.webp'),
    react: asset('skill-react-64w.webp'),
    tailwind: asset('skill-tailwind-64w.webp'),
  },
  projects: {
    shopsphare: responsiveImage('shopsphare-candle', [480, 768, 1024]),
    '1255': responsiveImage('nexim-interface', [480, 609]),
    '1237': responsiveImage('disney-interface', [480, 768, 1024]),
    '1238': responsiveImage('laund3omat', [480, 768, 1024]),
    '1239': responsiveImage('purehaven', [480, 768, 1024]),
  },
};
