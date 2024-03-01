// commentaire
function addComment(articleId) {
    var commentInput = document.getElementById('commentInput' + articleId);
    var commentText = commentInput.value;

    if (commentText.trim() === "") {
        alert("Veuillez entrer un commentaire.");
        return;
    }

    var commentsDiv = document.getElementById('comments' + articleId);

    var commentElement = document.createElement('div');
    commentElement.innerText = commentText;

    commentsDiv.appendChild(commentElement);
}


// mode sombre
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode'); 

    const isDarkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkModeEnabled);
}

document.addEventListener('DOMContentLoaded', function() {
    const isDarkModeEnabled = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkModeEnabled) {
        document.body.classList.add('dark-mode'); 
    }
});


document.getElementById('toggleDarkMode').addEventListener('click', toggleDarkMode);

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const popup = document.querySelector('.popup');

    menuIcon.addEventListener('mouseenter', function() {
        popup.style.display = 'block';
    });

    menuIcon.addEventListener('mouseleave', function() {
        popup.style.display = 'none';
    });
});

// popup de navigation
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const popup = document.getElementById('popup');

    menuButton.addEventListener('click', function() {
        popup.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('#menuButton')) {
            if (popup.classList.contains('show')) {
                popup.classList.remove('show');
            }
        }
    });
});

//Graphique
document.addEventListener('DOMContentLoaded', function() {
    // Données pour le graphique (argent dépensé et nombre de visiteurs)
    var moneySpent = [100, 200, 300, 400, 500];
    var visitors = [10, 20, 30, 40, 50];

    // Créer le graphique
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line', 
        data: {
            labels: moneySpent, 
            datasets: [{
                label: 'Nombre de visiteurs', 
                data: visitors, 
                backgroundColor: 'rgba(220, 53, 69, 0.2)', 
                borderColor: '#dc3545', 
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Argent obtenu (en millier)' 
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Nombre de visiteurs (en million)' 
                    }
                }
            }
        }
    });
});

// Carasel 

const carousel = document.getElementById('carousel');
const images = carousel.querySelectorAll('img');
const indicators = carousel.querySelectorAll('.indicator');
let currentIndex = 0;

// Masquer toutes les images sauf la première
images.forEach((image, index) => {
    if (index !== 0) {
        image.style.display = 'none';
    }
});

function showNextImage() {
    images[currentIndex].style.display = 'none';
    indicators[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
    indicators[currentIndex].classList.add('active');
}

// Commencer le défilement automatique après un court délai
setTimeout(() => {
    setInterval(showNextImage, 3000);
}, 1000); 