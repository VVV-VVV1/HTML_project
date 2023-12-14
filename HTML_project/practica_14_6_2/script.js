const element = document.querySelector('.move');
        
        element.addEventListener('mouseover', function() {
            element.style.transform = 'translateX(50px)';
        });
        
        element.addEventListener('mouseout', function() {
            element.style.transform = 'translateX(0)';
        });