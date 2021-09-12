`use strict`;

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector(`body`).addEventListener(`click`, function () {
        header.style.color = 'blue'; 
    });
})();

// The IIF function is immeadetly invoked, and is finished executing. 
// The event listner still has access to the header variable though due to closure.