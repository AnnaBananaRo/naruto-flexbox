/* ---------- Anna Rotenshtein & Eden Kaushansky ---------- */

const NINJAS = [
  { name: 'נארוטו אוזומאקי', short: 'נא', img: 'images/naruto.svg',  color: '#ef7722' },
  { name: 'סאסקה אוצ\'יהה',  short: 'סא', img: 'images/sasuke.svg',  color: '#3b5bab' },
  { name: 'סאקורה הארונו',   short: 'סק', img: 'images/sakura.svg',  color: '#e0568a' },
  { name: 'קאקאשי האטאקה',  short: 'קא', img: 'images/kakashi.svg', color: '#7a8698' }
];

const CLONE = { name: 'שיבוט צל', short: 'שי', img: 'images/clone.svg', color: '#3fa9d6' };

const LEVELS = [
  {
    title: 'שדה האימונים',
    task: 'הצוות הגיע לשדה האימונים, אבל כולם עומדים אחד מתחת לשני. נקודות הציון מסומנות בשורה בפינה. שנו את התכונה display כדי להפוך את השדה ל-Flex Container.',
    units: 3,
    pieces: 'ninjas',
    controls: ['display'],
    solution: { 'display': 'flex' }
  },

  {
    title: 'מבחן הפעמונים',
    task: 'קאקאשי תלה את הפעמונים בדיוק במרכז השורה העליונה. השתמשו ב-justify-content כדי לרכז שם את הצוות.',
    units: 3,
    pieces: 'ninjas',
    controls: ['justify-content'],
    solution: { 'justify-content': 'center' }
  },

  {
    title: 'חסימת שני השערים',
    task: 'האויב מנסה לברוח דרך אחד השערים. ארבעה נינג\'ות צריכים להתפרס לאורך השורה: הראשון צמוד לקצה השמאלי, האחרון צמוד לקצה הימני, והמרווחים ביניהם שווים.',
    units: 4,
    pieces: 'ninjas',
    controls: ['justify-content'],
    solution: { 'justify-content': 'space-between' }
  },

  {
    title: 'ירידה מהחומה',
    task: 'הצוות טיפס על החומה וצריך לחזור לקרקע. הם נשארים בצד שמאל אבל יורדים לתחתית השדה. הפעם התכונה שעוזרת היא align-items, שאחראית על הציר המשני.',
    units: 3,
    pieces: 'ninjas',
    controls: ['align-items'],
    solution: { 'align-items': 'flex-end' }
  },

  {
    title: 'מארב בלב השדה',
    task: 'נקודות הציון נמצאות בדיוק במרכז השדה – גם לרוחב וגם לגובה. כדי להגיע לשם תצטרכו לשלב שתי תכונות יחד.',
    units: 3,
    pieces: 'ninjas',
    controls: ['justify-content', 'align-items'],
    solution: { 'justify-content': 'center', 'align-items': 'center' }
  },

  {
    title: 'המסדרון של שער הכפר',
    task: 'המשימה עברה למסדרון צר. נקודות הציון מסודרות בטור אנכי בצד שמאל, ממורכז לגובה. שנו קודם את כיוון הציר הראשי, ואז מרכזו את הצוות לאורכו.',
    units: 4,
    pieces: 'ninjas',
    controls: ['flex-direction', 'justify-content'],
    solution: { 'flex-direction': 'column', 'justify-content': 'center' }
  },

  {
    title: 'מסדר בפני ההוקאגה',
    task: 'טור אנכי שנצמד לתחתית השדה וממורכז לרוחב. שימו לב: כשהכיוון הוא column, התכונה justify-content עובדת לגובה ו-align-items עובדת לרוחב.',
    units: 3,
    pieces: 'ninjas',
    controls: ['flex-direction', 'justify-content', 'align-items'],
    solution: { 'flex-direction': 'column', 'justify-content': 'flex-end', 'align-items': 'center' }
  },

  {
    title: 'ג\'וטסו ההיפוך',
    task: 'האויב הפך את סדר הצוות. הנינג\'ות צריכים לעמוד בשורה בתחתית השדה, אבל בסדר הפוך: נינג\'ה מספר 1 בקצה הימני, ואחריו 2, 3, 4 לכיוון שמאל. הסתכלו על המספרים שעל נקודות הציון.',
    units: 4,
    pieces: 'ninjas',
    controls: ['flex-direction', 'align-items'],
    solution: { 'flex-direction': 'row-reverse', 'align-items': 'flex-end' }
  },

  {
    title: 'רב שיבוט צללים',
    task: 'נארוטו יצר עשרה שיבוטים – והם לא נכנסים בשורה אחת. חלק מהם כבר חמקו מחוץ לשדה. אפשרו לשורה להישבר לשתי שורות, וארגנו כל שורה במרכז.',
    units: 10,
    pieces: 'clones',
    controls: ['flex-wrap', 'justify-content'],
    solution: { 'flex-wrap': 'wrap', 'justify-content': 'center' }
  }
];
