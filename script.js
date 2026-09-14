/* ---------- Anna Rotenshtein & Eden Kaushansky ---------- */

const PROPERTIES = {
  'display': {
    hint: 'קובע אם השדה מתנהג כ-Flex Container',
    lesson: 'כל סידור ב-Flexbox מתחיל כאן. ברגע שנותנים למכיל display: flex, כל הפריטים שבתוכו הופכים ל"פריטי פלקס" ומסתדרים לאורך ציר אחד. בלי השורה הזו שאר התכונות פשוט לא עושות כלום.',
    options: ['block', 'flex'],
    values: {
      'block': 'התנהגות רגילה – כל פריט תופס שורה משלו, אחד מתחת לשני',
      'flex': 'מפעיל את Flexbox – הפריטים מסתדרים לאורך הציר הראשי'
    },
    initial: 'block'
  },

  'flex-direction': {
    hint: 'כיוון הציר הראשי – שורה או טור',
    lesson: 'קובעת לאיזה כיוון "זורם" הציר הראשי. זו התכונה הכי חשובה להבנה, כי היא משנה את המשמעות של justify-content ושל align-items: מה שהיה לרוחב הופך לגובה, ולהפך.',
    options: ['row', 'row-reverse', 'column', 'column-reverse'],
    values: {
      'row': 'שורה משמאל לימין (ברירת המחדל)',
      'row-reverse': 'שורה מימין לשמאל – הפריט הראשון בקצה הימני',
      'column': 'טור מלמעלה למטה',
      'column-reverse': 'טור מלמטה למעלה – הפריט הראשון בתחתית'
    },
    initial: 'row'
  },

  'justify-content': {
    hint: 'פריסת הפריטים לאורך הציר הראשי',
    lesson: 'פורסת את הפריטים לאורך הציר הראשי – אותו כיוון ש-flex-direction קבע. כשהכיוון הוא row זה עובד לרוחב, וכשהוא column זה עובד לגובה.',
    options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    values: {
      'flex-start': 'הכל נדחף לתחילת הציר (ברירת המחדל)',
      'flex-end': 'הכל נדחף לסוף הציר',
      'center': 'הכל מתרכז באמצע',
      'space-between': 'הראשון והאחרון נצמדים לקצוות, והמרווחים ביניהם שווים',
      'space-around': 'לכל פריט מרווח זהה משני צדדיו, ולכן המרווח בקצוות נראה חצי',
      'space-evenly': 'כל המרווחים שווים לגמרי, כולל אלה שבקצוות'
    },
    initial: 'flex-start'
  },

  'align-items': {
    hint: 'יישור הפריטים לאורך הציר המשני',
    lesson: 'מיישרת את הפריטים לאורך הציר המשני – הציר הניצב לציר הראשי. כשהכיוון הוא row זה עובד לגובה, וכשהוא column זה עובד לרוחב.',
    options: ['stretch', 'flex-start', 'flex-end', 'center'],
    values: {
      'stretch': 'הפריטים נמתחים לכל אורך הציר המשני (ברירת המחדל). לנינג\'ות שלנו יש גודל קבוע, ולכן כאן זה נראה כמו flex-start',
      'flex-start': 'יישור לתחילת הציר המשני',
      'flex-end': 'יישור לסוף הציר המשני',
      'center': 'יישור למרכז הציר המשני'
    },
    initial: 'stretch'
  },

  'flex-wrap': {
    hint: 'האם מותר לפריטים לרדת לשורה נוספת',
    lesson: 'קובעת מה קורה כשהפריטים לא נכנסים בשורה אחת: להישאר דחוסים ולגלוש אל מחוץ למכיל, או לרדת לשורה נוספת.',
    options: ['nowrap', 'wrap', 'wrap-reverse'],
    values: {
      'nowrap': 'הכל נשאר בשורה אחת, גם אם הפריטים גולשים מחוץ למכיל (ברירת המחדל)',
      'wrap': 'פריטים שלא נכנסים יורדים לשורה הבאה',
      'wrap-reverse': 'כמו wrap, אבל השורות הנוספות נערמות בכיוון ההפוך'
    },
    initial: 'nowrap'
  }
};

const BOARD_DEFAULTS = {
  'display': 'flex',
  'flex-direction': 'row',
  'justify-content': 'flex-start',
  'align-items': 'stretch',
  'flex-wrap': 'nowrap'
};

const RANKS = [
  { from: 9, jp: '火影', num: 6, name: 'Hokage' },
  { from: 8, jp: '暗部', num: 5, name: 'Anbu' },
  { from: 6, jp: '上忍', num: 4, name: 'Jonin' },
  { from: 4, jp: '中忍', num: 3, name: 'Chunin' },
  { from: 2, jp: '下忍', num: 2, name: 'Genin' },
  { from: 0, jp: '学生', num: 1, name: 'Academy Student' }
];

const STORAGE_KEY = 'naruto-flexbox-progress';


const missionsNav  = document.getElementById('missionsNav');
const missionCount = document.getElementById('missionCount');
const missionTitle = document.getElementById('missionTitle');
const missionTask  = document.getElementById('missionTask');
const gradeBox     = document.getElementById('grade');
const lessonBox    = document.getElementById('lesson');
const controlsBox  = document.getElementById('controls');
const board        = document.getElementById('board');
const targetsLayer = document.getElementById('targets');
const unitsLayer   = document.getElementById('units');
const jutsuFx     = document.getElementById('jutsu');
const squadList    = document.getElementById('squad');
const codeEditor   = document.getElementById('codeEditor');
const codeNote     = document.getElementById('codeNote');
const autocomplete = document.getElementById('autocomplete');
const messageBox   = document.getElementById('message');
const attemptsBox  = document.getElementById('attempts');
const checkBtn     = document.getElementById('checkBtn');
const resetBtn     = document.getElementById('resetBtn');
const nextBtn      = document.getElementById('nextBtn');
const restartBtn   = document.getElementById('restartBtn');
const victory         = document.getElementById('victory');
const victoryMissions = document.getElementById('victoryMissions');
const victoryAttempts = document.getElementById('victoryAttempts');
const victoryPerfect  = document.getElementById('victoryPerfect');
const victoryReplay   = document.getElementById('victoryReplay');
const victoryClose    = document.getElementById('victoryClose');


let currentIndex = 0; 
let values = {};
let progress = loadProgress();


function loadProgress() {
  const empty = { unlocked: 0, completed: [], attempts: {} };
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : empty;
  } catch (e) {
    return empty;
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
  }
}

function loadLevel(index) {
  currentIndex = index;
  const level = LEVELS[index];

  const solved = progress.completed.indexOf(index) !== -1;

  values = {};
  level.controls.forEach(function (prop) {
    values[prop] = solved ? level.solution[prop] : PROPERTIES[prop].initial;
  });

  missionCount.textContent = 'משימה ' + pad(index + 1) + ' מתוך ' + pad(LEVELS.length);
  missionTitle.textContent = level.title;
  missionTask.textContent = level.task;

  buildBoard(level);
  buildLesson(level);
  buildControls(level);
  updateBoard();
  updateNav();
  updateGrade();
  updateAttempts();

  clearMessage();
  nextBtn.hidden = true;
  checkBtn.disabled = false;
}

function pad(n) {
  return n < 10 ? '0' + n : String(n);
}

function pieceFor(level, i) {
  if (level.pieces === 'clones') {
    return CLONE;
  }
  return NINJAS[i % NINJAS.length];
}

function buildBoard(level) {
  targetsLayer.innerHTML = '';
  unitsLayer.innerHTML = '';
  squadList.innerHTML = '';

  for (let i = 0; i < level.units; i++) {
    const piece = pieceFor(level, i);
    const number = i + 1;

    const target = document.createElement('div');
    target.className = 'target';
    target.style.setProperty('--aura', piece.color);
    target.innerHTML =
      '<img class="target__img" src="' + piece.img + '" alt="">' +
      '<span class="target__num">' + number + '</span>';
    targetsLayer.appendChild(target);

    const unit = document.createElement('div');
    unit.className = 'unit';
    unit.style.setProperty('--aura', piece.color);
    unit.style.animationDelay = (i * 0.06) + 's';
    unit.title = piece.name;

    const fallback = document.createElement('span');
    fallback.className = 'unit__fallback';
    fallback.textContent = piece.short;
    unit.appendChild(fallback);

    const img = document.createElement('img');
    img.className = 'unit__img';
    img.src = piece.img;
    img.alt = piece.name;
    img.addEventListener('error', function () { img.remove(); });
    unit.appendChild(img);

    const num = document.createElement('span');
    num.className = 'unit__num';
    num.textContent = number;
    unit.appendChild(num);

    unitsLayer.appendChild(unit);
  }

  buildSquadList(level);

  applyStyle(targetsLayer, Object.assign({}, BOARD_DEFAULTS, level.solution));
}

function buildSquadList(level) {
  const shown = [];

  for (let i = 0; i < level.units; i++) {
    const piece = pieceFor(level, i);
    if (shown.indexOf(piece.name) !== -1) continue;
    shown.push(piece.name);

    const item = document.createElement('li');
    item.className = 'squad__item';
    item.style.setProperty('--aura', piece.color);
    item.innerHTML = '<span class="squad__dot"></span>' + piece.name;
    squadList.appendChild(item);
  }
}

function buildLesson(level) {
  lessonBox.innerHTML = '';

  level.controls.forEach(function (prop) {
    const info = PROPERTIES[prop];

    const box = document.createElement('details');
    box.className = 'scroll';
    box.open = false;

    const title = document.createElement('summary');
    title.className = 'scroll__title';
    title.innerHTML = '📜 מגילת הג\'וטסו · <code>' + prop + '</code>';

    const lesson = document.createElement('p');
    lesson.className = 'scroll__lesson';
    lesson.textContent = info.lesson;

    const list = document.createElement('ul');
    list.className = 'values';

    info.options.forEach(function (option) {
      const item = document.createElement('li');
      item.className = 'value';
      item.dataset.prop = prop;
      item.dataset.value = option;
      item.innerHTML =
        '<code class="value__name">' + option + '</code>' +
        '<span class="value__desc">' + info.values[option] + '</span>';
      list.appendChild(item);
    });

    box.appendChild(title);
    box.appendChild(lesson);
    box.appendChild(list);
    lessonBox.appendChild(box);
  });
}

function highlightValues() {
  const items = lessonBox.querySelectorAll('.value');

  items.forEach(function (item) {
    const isActive = values[item.dataset.prop] === item.dataset.value;
    item.classList.toggle('is-active', isActive);
  });
}


function buildControls(level) {
  controlsBox.innerHTML = '';

  level.controls.forEach(function (prop) {
    const info = PROPERTIES[prop];

    const wrapper = document.createElement('div');
    wrapper.className = 'control';

    const label = document.createElement('label');
    label.className = 'control__label';
    label.setAttribute('for', 'select-' + prop);
    label.textContent = prop;

    const hint = document.createElement('span');
    hint.className = 'control__hint';
    hint.textContent = info.hint;

    const select = document.createElement('select');
    select.className = 'control__select';
    select.id = 'select-' + prop;
    select.dir = 'ltr';

    info.options.forEach(function (option) {
      const opt = document.createElement('option');
      opt.value = option;
      opt.textContent = option;
      select.appendChild(opt);
    });

    select.value = values[prop];

    select.addEventListener('change', function () {
      values[prop] = select.value;
      updateBoard();
      clearMessage();
      nextBtn.hidden = true;
    });

    wrapper.appendChild(label);
    wrapper.appendChild(hint);
    wrapper.appendChild(select);
    controlsBox.appendChild(wrapper);
  });
}


function applyStyle(element, style) {
  element.style.display        = style['display'];
  element.style.flexDirection  = style['flex-direction'];
  element.style.justifyContent = style['justify-content'];
  element.style.alignItems     = style['align-items'];
  element.style.flexWrap       = style['flex-wrap'];
}

function renderBoard() {
  const style = Object.assign({}, BOARD_DEFAULTS, values);
  applyStyle(unitsLayer, style);
  highlightValues();
}

function updateBoard() {
  renderBoard();
  syncSelects();
  writeCode();
}

function syncSelects() {
  Object.keys(values).forEach(function (prop) {
    const select = document.getElementById('select-' + prop);
    if (select) {
      select.value = values[prop];
    }
  });
}

function writeCode() {
  const level = LEVELS[currentIndex];
  const style = Object.assign({}, BOARD_DEFAULTS, values);

  let code = '.field {\n';
  code += '  display: ' + style['display'] + ';\n';

  level.controls.forEach(function (prop) {
    if (prop !== 'display') {
      code += '  ' + prop + ': ' + style[prop] + ';\n';
    }
  });

  code += '}';

  codeEditor.value = code;
  codeEditor.rows = code.split('\n').length;
  showCodeNotes([]);
}


function readCode() {
  const level = LEVELS[currentIndex];
  const pattern = /([a-zA-Z-]+)[ \t]*:[ \t]*([a-zA-Z-]+)/g;
  const notes = [];
  const seen = {};

  let match;
  while ((match = pattern.exec(codeEditor.value)) !== null) {
    const prop = match[1].toLowerCase();
    const value = match[2].toLowerCase();

    if (level.controls.indexOf(prop) === -1) {
      if (prop === 'display') {
        if (value !== BOARD_DEFAULTS['display']) {
          notes.push('במשימה הזו display קבוע על flex');
        }
      } else if (PROPERTIES[prop]) {
        notes.push('התכונה ' + prop + ' לא בשימוש במשימה הזו');
      } else {
        notes.push('לא מכיר את התכונה ' + prop);
      }
      continue;
    }

    seen[prop] = true;

    if (PROPERTIES[prop].options.indexOf(value) === -1) {
      notes.push('הערך ' + value + ' לא חוקי עבור ' + prop);
      continue;
    }

    values[prop] = value;
  }

  level.controls.forEach(function (prop) {
    if (!seen[prop]) {
      values[prop] = PROPERTIES[prop].initial;
    }
  });

  renderBoard();
  syncSelects();
  showCodeNotes(notes);
}

function showCodeNotes(notes) {
  if (notes.length === 0) {
    codeNote.textContent = '';
    codeNote.className = 'code-note';
    return;
  }

  const unique = notes.filter(function (note, i) {
    return notes.indexOf(note) === i;
  });

  codeNote.textContent = '⚠ ' + unique.join(' · ');
  codeNote.className = 'code-note is-visible';
}


let acItems = [];
let acIndex = 0;
let acPrefix = '';
let acKind = 'prop';

let charWidth = 0;

function measureCharWidth() {
  if (charWidth) {
    return charWidth;
  }

  const ruler = document.createElement('span');
  ruler.textContent = '0'.repeat(50);
  ruler.style.cssText = 'position:absolute;visibility:hidden;white-space:pre';
  ruler.style.font = getComputedStyle(codeEditor).font;
  document.body.appendChild(ruler);
  charWidth = ruler.getBoundingClientRect().width / 50;
  ruler.remove();

  return charWidth;
}

function lastWord(text) {
  return text.match(/[a-zA-Z-]*$/)[0].toLowerCase();
}

function caretContext() {
  const upToCaret = codeEditor.value.slice(0, codeEditor.selectionStart);
  const lines = upToCaret.split('\n');
  const lineText = lines[lines.length - 1];
  const colon = lineText.indexOf(':');

  const where = { line: lines.length - 1, col: lineText.length };

  if (colon === -1) {
    return Object.assign({ kind: 'prop', prefix: lastWord(lineText) }, where);
  }

  if (lineText.slice(colon + 1).indexOf(';') !== -1) {
    return Object.assign({ kind: 'none' }, where);
  }

  return Object.assign({
    kind: 'value',
    prop: lastWord(lineText.slice(0, colon).trim()),
    prefix: lastWord(lineText)
  }, where);
}

// showAll = true כשלוחצים עם העכבר, ואז מציגים את כל האפשרויות
function updateAutocomplete(showAll) {
  const level = LEVELS[currentIndex];
  const context = caretContext();
  let candidates = [];

  if (context.kind === 'none') {
    return hideAutocomplete();
  }

  if (context.kind === 'prop') {
    // בהקלדה צריך לפחות אות אחת, בלחיצה מציגים גם על מילה שלמה
    if (!showAll && context.prefix.length === 0) {
      return hideAutocomplete();
    }
    candidates = level.controls.slice();

  } else {
    if (!PROPERTIES[context.prop]) {
      return hideAutocomplete();
    }
    candidates = PROPERTIES[context.prop].options.slice();
  }

  const matches = showAll ? candidates : candidates.filter(function (item) {
    return item.indexOf(context.prefix) === 0 && item !== context.prefix;
  });

  if (matches.length === 0) {
    return hideAutocomplete();
  }

  acItems = matches;
  acKind = context.kind;
  acPrefix = showAll ? '' : context.prefix;

  const current = acItems.indexOf(wordAtCaret());
  acIndex = (showAll && current !== -1) ? current : 0;

  renderAutocomplete(context);
}

function wordAtCaret() {
  const text = codeEditor.value;
  const caret = codeEditor.selectionStart;
  let start = caret;
  let end = caret;

  while (start > 0 && /[a-zA-Z-]/.test(text[start - 1])) {
    start--;
  }
  while (end < text.length && /[a-zA-Z-]/.test(text[end])) {
    end++;
  }

  return text.slice(start, end).toLowerCase();
}

function renderAutocomplete(context) {
  autocomplete.innerHTML = '';

  acItems.forEach(function (item, i) {
    const li = document.createElement('li');
    li.className = 'ac__item' + (i === acIndex ? ' is-selected' : '');
    li.setAttribute('role', 'option');
    li.setAttribute('aria-selected', i === acIndex ? 'true' : 'false');

    const typed = item.slice(0, acPrefix.length);
    const rest = item.slice(acPrefix.length);

    li.innerHTML = '<span class="ac__text"><b>' + typed + '</b>' + rest + '</span>';

    li.addEventListener('mousedown', function (event) {
      event.preventDefault();
      acceptCompletion(i);
    });

    autocomplete.appendChild(li);
  });

  const style = getComputedStyle(codeEditor);
  const lineHeight = parseFloat(style.lineHeight);
  const left = parseFloat(style.paddingLeft) + context.col * measureCharWidth();
  const top = parseFloat(style.paddingTop) + (context.line + 1) * lineHeight + 4;

  autocomplete.style.left = '0px';
  autocomplete.style.top = top + 'px';
  autocomplete.hidden = false;
  codeEditor.setAttribute('aria-expanded', 'true');

  const maxLeft = Math.max(0, codeEditor.clientWidth - autocomplete.offsetWidth - 6);
  autocomplete.style.left = Math.min(left, maxLeft) + 'px';
}

function hideAutocomplete() {
  autocomplete.hidden = true;
  acItems = [];
  codeEditor.setAttribute('aria-expanded', 'false');
}

function moveAutocomplete(step) {
  acIndex = (acIndex + step + acItems.length) % acItems.length;

  autocomplete.querySelectorAll('.ac__item').forEach(function (li, i) {
    li.classList.toggle('is-selected', i === acIndex);
    li.setAttribute('aria-selected', i === acIndex ? 'true' : 'false');
  });
}

function acceptCompletion(index) {
  const chosen = acItems[index];
  const kind = acKind;
  const text = codeEditor.value;
  const caret = codeEditor.selectionStart;

  let start = caret;
  while (start > 0 && /[a-zA-Z-]/.test(text[start - 1])) {
    start--;
  }

  let end = caret;
  while (end < text.length && /[a-zA-Z-]/.test(text[end])) {
    end++;
  }

  const newLine = text.indexOf('\n', end);
  const rest = text.slice(end, newLine === -1 ? text.length : newLine);

  let addition;
  if (kind === 'prop') {
    addition = /^\s*:/.test(rest) ? '' : ': ';
  } else {
    addition = /^\s*;/.test(rest) ? '' : ';';
  }

  const before = text.slice(0, start) + chosen + addition;

  codeEditor.value = before + text.slice(end);
  codeEditor.setSelectionRange(before.length, before.length);

  hideAutocomplete();
  readCode();

  if (kind === 'prop') {
    updateAutocomplete();
  }
}


function checkAnswer() {
  const level = LEVELS[currentIndex];

  const isCorrect = level.controls.every(function (prop) {
    return values[prop] === level.solution[prop];
  });

  progress.attempts[currentIndex] = (progress.attempts[currentIndex] || 0) + 1;
  updateAttempts();

  if (isCorrect) {
    onSuccess(level);
  } else {
    onFailure();
  }

  saveProgress();
  updateNav();
  updateGrade();
}

function onSuccess(level) {
  const isLast = (currentIndex === LEVELS.length - 1);

  showMessage(isLast
    ? 'סיימת את כל המשימות. מונית ל-Hokage 火影 🏆'
    : 'המשימה הושלמה! כל הצוות בנקודות הציון ⟡', 'ok');

  playJutsu();

  if (progress.completed.indexOf(currentIndex) === -1) {
    progress.completed.push(currentIndex);
  }
  if (currentIndex + 1 > progress.unlocked) {
    progress.unlocked = currentIndex + 1;
  }

  checkBtn.disabled = true;
  nextBtn.hidden = isLast;

  // כל המשימות הושלמו - מציגים את מסך הסיום אחרי אנימציית הג'וטסו
  if (progress.completed.length === LEVELS.length) {
    setTimeout(showVictory, 1500);
  }
}

function showVictory() {
  let total = 0;
  let perfect = 0;

  progress.completed.forEach(function (index) {
    const tries = progress.attempts[index] || 0;
    total += tries;
    if (tries === 1) {
      perfect++;
    }
  });

  victoryMissions.textContent = progress.completed.length + '/' + LEVELS.length;
  victoryAttempts.textContent = total;
  victoryPerfect.textContent = perfect;

  victory.hidden = false;
  victoryClose.focus();
}

function hideVictory() {
  victory.hidden = true;
}

function onFailure() {
  showMessage('הג\'וטסו נכשל – הצוות לא על נקודות הציון. נסו שוב', 'err');
  board.classList.add('is-wrong');
  setTimeout(function () { board.classList.remove('is-wrong'); }, 450);
}

function playJutsu() {
  jutsuFx.hidden = false;
  jutsuFx.classList.remove('is-playing');
  void jutsuFx.offsetWidth;
  jutsuFx.classList.add('is-playing');

  setTimeout(function () {
    jutsuFx.hidden = true;
    jutsuFx.classList.remove('is-playing');
  }, 1400);
}


function showMessage(text, type) {
  messageBox.textContent = text;
  messageBox.className = 'message message--' + type + ' is-visible';
}

function clearMessage() {
  messageBox.textContent = '';
  messageBox.className = 'message';
}

function updateAttempts() {
  const count = progress.attempts[currentIndex] || 0;
  attemptsBox.textContent = count === 0
    ? 'טרם הופעלה טכניקה במשימה זו'
    : 'ניסיונות במשימה זו: ' + count;
}

function updateGrade() {
  const done = progress.completed.length;

  const rank = RANKS.find(function (r) { return done >= r.from; });

  gradeBox.innerHTML =
    '<span class="grade__jp">' + rank.jp + '</span>' +
    '<span class="grade__label">דרגה ' + rank.num +
      ' · <span dir="ltr">' + rank.name + '</span></span>' +
    '<span class="grade__count">' + done + '/' + LEVELS.length + ' משימות</span>';
}


function updateNav() {
  missionsNav.innerHTML = '';

  LEVELS.forEach(function (level, i) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mission-btn';
    btn.textContent = pad(i + 1);

    const isDone = progress.completed.indexOf(i) !== -1;
    if (isDone) {
      btn.classList.add('mission-btn--done');
      btn.title = 'משימה ' + pad(i + 1) + ' – הושלמה';
    } else {
      btn.title = 'משימה ' + pad(i + 1) + ' – ' + level.title;
    }

    if (i === currentIndex) {
      btn.classList.add('mission-btn--current');
    }

    if (i > progress.unlocked) {
      btn.disabled = true;
      btn.title = 'משימה ' + pad(i + 1) + ' – נעולה';
    } else {
      btn.addEventListener('click', function () { loadLevel(i); });
    }

    missionsNav.appendChild(btn);
  });
}


checkBtn.addEventListener('click', checkAnswer);

codeEditor.addEventListener('input', function () {
  readCode();
  updateAutocomplete();
  clearMessage();
  nextBtn.hidden = true;
});

codeEditor.addEventListener('keydown', function (event) {
  if (autocomplete.hidden) {
    return;
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    moveAutocomplete(1);

  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    moveAutocomplete(-1);

  } else if (event.key === 'Enter' || event.key === 'Tab') {
    event.preventDefault();
    acceptCompletion(acIndex);

  } else if (event.key === 'Escape') {
    event.preventDefault();
    hideAutocomplete();
  }
});

codeEditor.addEventListener('click', function () { updateAutocomplete(true); });
codeEditor.addEventListener('blur', hideAutocomplete);

resetBtn.addEventListener('click', function () {
  const level = LEVELS[currentIndex];
  level.controls.forEach(function (prop) {
    values[prop] = PROPERTIES[prop].initial;
  });
  updateBoard();
  clearMessage();
  nextBtn.hidden = true;
  checkBtn.disabled = false;
});

nextBtn.addEventListener('click', function () {
  if (currentIndex < LEVELS.length - 1) {
    loadLevel(currentIndex + 1);
  }
});


let restartArmed = false;
let restartTimer = null;

function disarmRestart() {
  clearTimeout(restartTimer);
  restartArmed = false;
  restartBtn.textContent = '🔄 התחל משחק מחדש';
  restartBtn.classList.remove('is-armed');
}

restartBtn.addEventListener('click', function () {
  if (!restartArmed) {
    restartArmed = true;
    restartBtn.textContent = 'בטוחים? לחצו שוב לאיפוס';
    restartBtn.classList.add('is-armed');
    restartTimer = setTimeout(disarmRestart, 4000);
    return;
  }

  disarmRestart();
  startOver();
});

function startOver() {
  hideVictory();
  progress = { unlocked: 0, completed: [], attempts: {} };
  saveProgress();
  loadLevel(0);
  window.scrollTo(0, 0);
}

victoryClose.addEventListener('click', hideVictory);
victoryReplay.addEventListener('click', startOver);

// Escape סוגר את מסך הסיום
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !victory.hidden) {
    hideVictory();
  }
});


loadLevel(Math.min(progress.unlocked, LEVELS.length - 1));

