<script>
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevents immediate navigation
            const target = this.getAttribute('href');
            
            document.body.classList.add('fade-out'); // Apply fade-out class

            setTimeout(() => {
                window.location.href = target; // Navigate to the target page after fade-out
            }, 500); // Match the delay to CSS transition duration
        });
    });
</script>