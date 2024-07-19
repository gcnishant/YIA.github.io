const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden,.contact-us,.our-mission,.mentorship-program,.who-we-are,.frequent-questions,.credits');
hiddenElements.forEach((el) => observer.observe(el))


window.addEventListener('scroll', function() {
    var header = document.getElementById('fixed-header');
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        header.classList.add('smaller');
    } else {
        header.classList.remove('smaller');
    }
});


document.addEventListener('DOMContentLoaded', (event) => {
    const words = ["empower", "inspire", "uplift"];
    let index = 0;
    const wordElement = document.getElementById('animated-word');

    function changeWord() {
        wordElement.classList.remove('typing');
        setTimeout(() => {
            wordElement.textContent = words[index];
            wordElement.classList.add('typing');
            index = (index + 1) % words.length;
        }, 100);
    }

    setInterval(changeWord, 3000);
});

