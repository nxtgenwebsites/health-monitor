// Add mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('sidebar-overlay');
    document.body.appendChild(overlay);
    
    mobileMenuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close sidebar when clicking overlay
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Update chart responsiveness
    function updateChartsDimensions() {
        if (activityChart && weightChart) {
            activityChart.resize();
            weightChart.resize();
        }
    }

    // Listen for window resize
    window.addEventListener('resize', updateChartsDimensions);
});

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const collapseButton = document.querySelector('.collapse-button');
    
    // Toggle sidebar collapse
    collapseButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        
        // Store the state in localStorage
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    });
    
    // Restore sidebar state on page load
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (sidebarCollapsed) {
        sidebar.classList.add('collapsed');
    }
    
    // Handle dropdown hover for collapsed state
    const dropdowns = document.querySelectorAll('.menu-item-dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.nextElementSibling;
        
        dropdown.addEventListener('mouseenter', function() {
            if (sidebar.classList.contains('collapsed')) {
                dropdownContent.style.display = 'block';
                // Position the dropdown content
                const rect = dropdown.getBoundingClientRect();
                dropdownContent.style.top = rect.top + 'px';
            }
        });
        
        dropdown.addEventListener('mouseleave', function(e) {
            if (sidebar.classList.contains('collapsed')) {
                // Check if mouse is over dropdown content
                const rect = dropdownContent.getBoundingClientRect();
                if (e.clientX < rect.left || e.clientX > rect.right || 
                    e.clientY < rect.top || e.clientY > rect.bottom) {
                    dropdownContent.style.display = 'none';
                }
            }
        });
        
        dropdownContent.addEventListener('mouseleave', function() {
            if (sidebar.classList.contains('collapsed')) {
                dropdownContent.style.display = 'none';
            }
        });
    });
});