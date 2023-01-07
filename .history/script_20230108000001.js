

const observer = new InteractionObserver((entries) => { 
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        // do something
        }
    });
})

const hiddenElement = document.querySelector('.hidden');