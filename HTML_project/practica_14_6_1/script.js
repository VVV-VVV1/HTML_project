const element = document.querySelector('.pulse');
        
        element.addEventListener('mouseover', function() {
            element.classList.add('pulse');
        });
        
        element.addEventListener('mouseout', function() {
            element.classList.remove('pulse');
        });