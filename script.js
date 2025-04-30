const matchFormatSelect = document.getElementById("match-format");
const startMatchBtn = document.getElementById("start-match");
const scoreboardSection = document.getElementById("scoreboard");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const score1Display = document.getElementById("score1");
const score2Display = document.getElementById("score2");
const serveIndicator = document.getElementById("serve-indicator");
const setHistoryDisplay = document.getElementById("set-history");
const matchWinnerDisplay = document.getElementById("match-winner");
const resetBtn = document.getElementById("reset");

const name1Input = document.getElementById("name1");
const name2Input = document.getElementById("name2");
const initialServeSelect = document.getElementById("initial-serve");
const player1NameDisplay = document.getElementById("player1-name");
const player2NameDisplay = document.getElementById("player2-name");
const serve1Label = document.getElementById("serve1");
const serve2Label = document.getElementById("serve2");

const leaderboardBody = document.getElementById("leaderboard-body");
const recentMatchesBody = document.getElementById("recent-matches-body");

const restartMatchBtn = document.getElementById("restart-match-btn");
const newMatchBtn = document.getElementById("new-match-btn");
const saveMatchBtn = document.getElementById("save-match-btn");
const skipSaveBtn = document.getElementById("skip-save-btn");
const saveOptions = document.getElementById("save-options");

let player1Name = "Pemain 1";
let player2Name = "Pemain 2";
let previousSettings = null;
let match;

class Match {
  constructor(totalSets, serveTurn) {
    this.totalSets = totalSets;
    this.score1 = 0;
    this.score2 = 0;
    this.setsWon1 = 0;
    this.setsWon2 = 0;
    this.currentSet = 1;
    this.serveTurn = serveTurn;
    this.setHistory = [];
    this.inProgress = true;
  }

  addPoint(player) {
    if (!this.inProgress) return;

    if (player === 1) this.score1++;
    else this.score2++;

    if (this.checkSetWin()) {
      const finishedSet = `Set ${this.currentSet}: ${this.score1}–${this.score2}`;
      if (this.score1 > this.score2) this.setsWon1++;
      else this.setsWon2++;

      this.setHistory.push(finishedSet);
      this.currentSet++;

      if (this.checkMatchWin()) {
        this.inProgress = false;
        return this.getWinner();
      }

      this.score1 = 0;
      this.score2 = 0;
    }

    return null;
  }

  checkSetWin() {
    return (this.score1 >= 11 || this.score2 >= 11) && Math.abs(this.score1 - this.score2) >= 2;
  }

  checkMatchWin() {
    const needed = Math.ceil(this.totalSets / 2);
    return this.setsWon1 === needed || this.setsWon2 === needed;
  }

  switchServe() {
    const totalPoints = this.score1 + this.score2;
    if (totalPoints % 2 === 0) {
      this.serveTurn = this.serveTurn === 1 ? 2 : 1;
    }
  }

  getWinner() {
    return this.setsWon1 > this.setsWon2 ? player1Name : player2Name;
  }
}

function saveToLeaderboard(player) {
  const data = JSON.parse(localStorage.getItem("leaderboard") || "{}");
  data[player] = (data[player] || 0) + 1;
  localStorage.setItem("leaderboard", JSON.stringify(data));
}

function showLeaderboard() {
  const data = JSON.parse(localStorage.getItem("leaderboard") || "{}");
  const sorted = Object.entries(data).sort((a, b) => b[1] - a[1]);
  leaderboardBody.innerHTML = "";
  sorted.slice(0, 5).forEach(([name, score], index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${index + 1}</td><td>${name}</td><td>${score}</td>`;
    leaderboardBody.appendChild(row);
  });
}

function saveRecentMatch(winner, setHistory) {
  const matches = JSON.parse(localStorage.getItem("recentMatches") || "[]");
  matches.unshift({
    time: new Date().toLocaleString(),
    player1: player1Name,
    player2: player2Name,
    winner: winner,
    sets: [...setHistory]
  });
  if (matches.length > 5) matches.pop();
  localStorage.setItem("recentMatches", JSON.stringify(matches));
}

function showRecentMatches() {
  const matches = JSON.parse(localStorage.getItem("recentMatches") || "[]");
  recentMatchesBody.innerHTML = "";
  matches.forEach(m => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${m.time}</td>
      <td>${m.player1}</td>
      <td>${m.player2}</td>
      <td>${m.winner}</td>
      <td>${m.sets.join(", ")}</td>
    `;
    recentMatchesBody.appendChild(row);
  });
}

startMatchBtn.onclick = () => {
  player1Name = name1Input.value.trim() || "Pemain 1";
  player2Name = name2Input.value.trim() || "Pemain 2";
  const serveStart = parseInt(initialServeSelect.value);
  const totalSets = parseInt(matchFormatSelect.value);

  previousSettings = { player1Name, player2Name, serveStart, totalSets };

  player1NameDisplay.textContent = player1Name;
  player2NameDisplay.textContent = player2Name;

  match = new Match(totalSets, serveStart);
  scoreboardSection.classList.remove("hidden");
  matchWinnerDisplay.textContent = "";
  btn1.disabled = false;
  btn2.disabled = false;
  updateDisplay();
};

btn1.onclick = () => handleScore(1);
btn2.onclick = () => handleScore(2);

function handleScore(player) {
  const winner = match.addPoint(player);
  match.switchServe(); 
  updateDisplay();

  if (winner) {
    matchWinnerDisplay.textContent = "Pemenang: " + winner;
    btn1.disabled = true;
    btn2.disabled = true;
    restartMatchBtn.classList.remove("hidden");
    newMatchBtn.classList.remove("hidden");
    saveOptions.classList.remove("hidden");
  }
}

restartMatchBtn.onclick = () => {
  if (!previousSettings) return;
  player1Name = previousSettings.player1Name;
  player2Name = previousSettings.player2Name;
  player1NameDisplay.textContent = player1Name;
  player2NameDisplay.textContent = player2Name;
  match = new Match(previousSettings.totalSets, previousSettings.serveStart);
  btn1.disabled = false;
  btn2.disabled = false;
  matchWinnerDisplay.textContent = "";
  restartMatchBtn.classList.add("hidden");
  newMatchBtn.classList.add("hidden");
  saveOptions.classList.add("hidden");
  updateDisplay();
};

newMatchBtn.onclick = () => {
  scoreboardSection.classList.add("hidden");
  restartMatchBtn.classList.add("hidden");
  newMatchBtn.classList.add("hidden");
  saveOptions.classList.add("hidden");
  matchWinnerDisplay.textContent = "";
  btn1.disabled = false;
  btn2.disabled = false;
  name1Input.value = "";
  name2Input.value = "";
};

saveMatchBtn.onclick = () => {
  const winner = match.getWinner();
  saveToLeaderboard(winner);
  saveRecentMatch(winner, match.setHistory);
  showLeaderboard();
  showRecentMatches();
  saveOptions.classList.add("hidden");
};

skipSaveBtn.onclick = () => {
  saveOptions.classList.add("hidden");
};

resetBtn.onclick = () => {
  localStorage.clear();
  location.reload();
};

function updateDisplay() {
  score1Display.textContent = match.score1;
  score2Display.textContent = match.score2;
  serveIndicator.textContent = "Servis: " + (match.serveTurn === 1 ? player1Name : player2Name);
  serve1Label.textContent = match.serveTurn === 1 ? "(Servis)" : "";
  serve2Label.textContent = match.serveTurn === 2 ? "(Servis)" : "";
  setHistoryDisplay.textContent =
    "Riwayat Set: " +
    match.setHistory.join(", ") +
    (match.inProgress ? `, Set ${match.currentSet}: ${match.score1}–${match.score2}` : "");
}

showLeaderboard();
showRecentMatches();
