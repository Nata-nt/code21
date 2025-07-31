// Ubah nama teman (bisa juga prompt saat halaman dibuka)
document.getElementById('nama').textContent = 'Amira';

// Tiup lilin
const blowBtn = document.getElementById('blowBtn');
const flame = document.getElementById('flame');
const miniGame = document.getElementById('miniGame');

blowBtn.addEventListener('click', () => {
  flame.style.display = 'none';
  blowBtn.disabled = true;
  blowBtn.textContent = 'Lilin sudah ditiup!';
  setTimeout(() => { miniGame.style.display = 'block'; }, 800);
});

// Mini-game tebak angka
const submitGuess = document.getElementById('submitGuess');
const guessInput = document.getElementById('guess');
const resultMini = document.getElementById('resultMini');

const secret = Math.floor(Math.random() * 10) + 1;

submitGuess.addEventListener('click', () => {
  const user = Number(guessInput.value);
  if (!user || user < 1 || user > 10) {
    resultMini.textContent = 'Masukkan angka 1–10!';
    return;
  }
  if (user === secret) {
    resultMini.textContent = '🎉 Benar! Selamat, Anda dapat hadiah kejutan!';
    submitGuess.disabled = true;
  } else {
    resultMini.textContent = `Salah! Angkanya ${secret}. Tetap semangat!`;
    submitGuess.disabled = true;
  }
});