// Loading Screen (only on homepage)
if (window.location.pathname.endsWith('index.html') || 
    window.location.pathname === '/' || 
    window.location.pathname === '') {
    
    window.addEventListener('load', function() {
        const loadingScreen = document.querySelector('.loading-screen');
        
        // Create cyber particles
        createCyberParticles();
        
        // Hide loading screen after delay
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 800);
        }, 2000);
    });
}

// Simple payment instructions modal
function showPaymentInstructions(productName, price) {
    document.getElementById('paymentProductName').textContent = productName;
    document.getElementById('paymentProductPrice').textContent = '₹' + price;
    document.getElementById('paymentAmount').textContent = price;
    document.getElementById('paymentModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('paymentModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Mobile navigation toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});
