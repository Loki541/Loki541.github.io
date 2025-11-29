document.getElementById('run').addEventListener('click', () => {
  const txt = document.getElementById('input').value.trim();
  const out = document.getElementById('result');

  if (!txt) {
    out.innerText = 'Wpisz krótki opis sprzętu lub problemu.';
    return;
  }

  const sample = [
    'Zacznij od aktualizacji sterowników GPU.',
    'Sprawdź temperatury w AIDA64 / HWMonitor.',
    'Zmień plan zasilania na "High Performance".',
    'Obniż napięcie GPU o -50 mV (undervolt) jeśli temperatura duża.',
    'Dodaj dodatkowy przepływ powietrza - przestaw wentylatory.'
  ];

  const result = [
    `Analiza wejścia: ${txt}`,
    '',
    'Sugerowane kroki:',
    sample.slice(0, 3).map((s,i)=> `${i+1}. ${s}`).join('\n'),
    '',
    'Pakiet PDF: (demo) — w pełnej wersji wygenerujemy plik z instrukcjami.'
  ].join('\n');

  out.innerText = result;
});
