

const observer = new InteractionObserver((entries) => { 
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        // do something
            entry.target.classList.add('active');
        }
        else {
            entry.target.classList.remove('active');
        }
    });
})

const hiddenElement = document.querySelector('.hidden');