// כופה חזרה לראש העמוד בכל טעינה
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', function() {
    // תמיד חוזר לראש, גם אם יש hash
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 10);
});

// מונע שמירת מיקום הגלילה
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// מוחק hash מה-URL
if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
}
