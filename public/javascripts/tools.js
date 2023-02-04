// scoreboard table-------------------------------------------------------------------

const scoreboard = document.querySelector(".input-data__scoreboard__table");
const scoreboardAdd = document.querySelector(".scoreboard__button__add");
const scoreboardSub = document.querySelector(".scoreboard__button__sub");

let inning_change = 0;

function addScoreboardColumn() {
    inning_change++;
    let inning = scoreboard.rows[0].cells.length
    if (inning_change % 2 == 1) {
        const firstCell = scoreboard.rows[0].insertCell(-1);
        firstCell.outerHTML = `<th>${inning}</th>`;
        const secondCell = scoreboard.rows[1].insertCell(-1);
        secondCell.innerHTML = `<input class="input-text" name="team1__${inning}th inning" min="0" type="number">`;
    }
    else {
        const thirdCell = scoreboard.rows[2].insertCell(-1);
        thirdCell.innerHTML = `<input class="input-text" name="team2__${inning-1}th inning" min="0" type="number">`;
    }
}

function subScoreboardColumn() {
    inning_change++;
    if (inning_change % 2 == 0) {
        const firstCell = scoreboard.rows[0];
        firstCell.deleteCell(-1);
        const secondCell = scoreboard.rows[1];
        secondCell.deleteCell(-1);
    }
    else {
        const thirdCell = scoreboard.rows[2];
        thirdCell.deleteCell(-1);
    }
}
scoreboardAdd.addEventListener('click', addScoreboardColumn);
scoreboardSub.addEventListener('click', subScoreboardColumn);

//------------------------------------------------------------------------------------



// player record----------------------------------------------------------------------

const team1HitterAdd = document.querySelector('.record__team1__hitter__add')
const team1HitterSub = document.querySelector('.record__team1__hitter__sub')
const team1PitcherAdd = document.querySelector('.record__team1__pitcher__add')
const team1PitcherSub = document.querySelector('.record__team1__pitcher__sub')
const team2HitterAdd = document.querySelector('.record__team2__hitter__add')
const team2HitterSub = document.querySelector('.record__team2__hitter__sub')
const team2PitcherAdd = document.querySelector('.record__team2__pitcher__add')
const team2PitcherSub = document.querySelector('.record__team2__pitcher__sub')

const team1Hitter = document.querySelector('.input-data__record__team1__hitter__table')
const team1Pitcher = document.querySelector('.input-data__record__team1__pitcher__table')
const team2Hitter = document.querySelector('.input-data__record__team2__hitter__table')
const team2Pitcher = document.querySelector('.input-data__record__team2__pitcher__table')

const hitterRecordHTML = document.querySelector('.input-data__record__team1__hitter1')
const pitcherRecordHTML = document.querySelector('.input-data__record__team1__pitcher1')

function addRecordRow(param) {
    if (param === '1h') {
        const newRow = team1Hitter.insertRow(-1);
        newRow.innerHTML = hitterRecordHTML.innerHTML
    }
    else if (param === '1p') {
        const newRow = team1Pitcher.insertRow(-1);
        newRow.innerHTML = pitcherRecordHTML.innerHTML
    }
    else if (param === '2h') {
        const newRow = team2Hitter.insertRow(-1);
        newRow.innerHTML = hitterRecordHTML.innerHTML
    }
    else if (param === '2p') {
        const newRow = team2Pitcher.insertRow(-1);
        newRow.innerHTML = pitcherRecordHTML.innerHTML
    }
}

function subRecordRow(param) {
    if (param === '1h') {
        const newRow = team1Hitter.deleteRow(-1);
    }
    else if (param === '1p') {
        const newRow = team1Pitcher.deleteRow(-1);
    }
    else if (param === '2h') {
        const newRow = team2Hitter.deleteRow(-1);
    }
    else if (param === '2p') {
        const newRow = team2Pitcher.deleteRow(-1);
    }
}

team1HitterAdd.addEventListener('click', function(){addRecordRow('1h')});
team1HitterSub.addEventListener('click', function(){subRecordRow('1h')});
team1PitcherAdd.addEventListener('click', function(){addRecordRow('1p')});
team1PitcherSub.addEventListener('click', function(){subRecordRow('1p')});
team2HitterAdd.addEventListener('click', function(){addRecordRow('2h')});
team2HitterSub.addEventListener('click', function(){subRecordRow('2h')});
team2PitcherAdd.addEventListener('click', function(){addRecordRow('2p')});
team2PitcherSub.addEventListener('click', function(){subRecordRow('2p')});

//------------------------------------------------------------------------------------



// submit-----------------------------------------------------------------------------

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    console.log({ value });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

//------------------------------------------------------------------------------------