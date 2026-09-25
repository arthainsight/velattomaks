// Sähköpostitilaus: lähetetään taustalla, jotta käyttäjä ei päädy MailerLiten
// raakaan JSON-vastaukseen. Jos lähetys ei onnistu, palataan tavalliseen
// lomakelähetykseen, jolloin tilaus menee silti perille.
document.querySelectorAll('.signup form').forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const card = form.closest('.signup');
    if (form.querySelector('[name="b_hp"]').value) return;   // botti
    btn.disabled = true;
    btn.textContent = 'Lähetetään…';
    try {
      await fetch(form.action, { method: 'POST', mode: 'no-cors', body: new FormData(form) });
      card.innerHTML = '<h3>Kiitos — vielä yksi klikkaus</h3>' +
        '<p>Lähetin sähköpostiisi vahvistuslinkin. Tilaus astuu voimaan vasta kun klikkaat sitä, ' +
        'joten käy kurkkaamassa postilaatikko (ja tarvittaessa roskaposti).</p>';
      card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    } catch {
      form.submit();
    }
  });
});
