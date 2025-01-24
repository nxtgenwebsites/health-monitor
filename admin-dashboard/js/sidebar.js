// Handle all sidebar functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown menu items
    const dropdowns = document.querySelectorAll('.menu-item-dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            // Toggle active class on the clicked dropdown
            this.classList.toggle('active');
            
            // Find the next sibling which should be the dropdown content
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
                dropdownContent.classList.toggle('show');
                
                // Rotate arrow icon
                const arrow = this.querySelector('.arrow');
                if (arrow) {
                    arrow.style.transform = dropdownContent.classList.contains('show') 
                        ? 'rotate(90deg)' 
                        : 'rotate(0deg)';
                }
            }
            
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== this) {
                    otherDropdown.classList.remove('active');
                    const otherContent = otherDropdown.nextElementSibling;
                    if (otherContent && otherContent.classList.contains('dropdown-content')) {
                        otherContent.classList.remove('show');
                    }
                    const otherArrow = otherDropdown.querySelector('.arrow');
                    if (otherArrow) {
                        otherArrow.style.transform = 'rotate(0deg)';
                    }
                }
            });
        });
    });

    // Handle sidebar collapse
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            
            // Close all dropdowns when sidebar is collapsed
            if (sidebar.classList.contains('collapsed')) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                    const dropdownContent = dropdown.nextElementSibling;
                    if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
                        dropdownContent.classList.remove('show');
                    }
                    const arrow = dropdown.querySelector('.arrow');
                    if (arrow) {
                        arrow.style.transform = 'rotate(0deg)';
                    }
                });
            }
        });
    }

    // Handle mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    if (mobileMenuBtn && sidebar && sidebarOverlay) {
        mobileMenuBtn.addEventListener('click', function() {
            sidebar.classList.add('mobile-active');
            sidebarOverlay.classList.add('active');
        });

        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('mobile-active');
            sidebarOverlay.classList.remove('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Existing dropdown code remains the same...

    // Mobile sidebar toggle
    const mobileToggleBtn = document.querySelector('.mobile-toggle-btn');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    if (mobileToggleBtn && sidebar && sidebarOverlay) {
        // Toggle sidebar on button click
        mobileToggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('mobile-active');
            sidebarOverlay.classList.toggle('active');
            
            // Update toggle button icon
            const icon = this.querySelector('i');
            if (sidebar.classList.contains('mobile-active')) {
                icon.classList.remove('bi-chevron-right');
                icon.classList.add('bi-chevron-left');
            } else {
                icon.classList.remove('bi-chevron-left');
                icon.classList.add('bi-chevron-right');
            }
        });

        // Close sidebar when clicking overlay
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('mobile-active');
            sidebarOverlay.classList.remove('active');
            const icon = mobileToggleBtn.querySelector('i');
            icon.classList.remove('bi-chevron-left');
            icon.classList.add('bi-chevron-right');
        });
    }

    // Close sidebar on window resize if screen becomes larger
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991 && sidebar) {
            sidebar.classList.remove('mobile-active');
            sidebarOverlay.classList.remove('active');
            const icon = mobileToggleBtn.querySelector('i');
            icon.classList.remove('bi-chevron-left');
            icon.classList.add('bi-chevron-right');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
    dropdowns.map(function (dropdownToggle) {
        return new bootstrap.Dropdown(dropdownToggle)
    });
});

// Optional: Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    var dropdowns = document.querySelectorAll('.notification-dropdown.show');
    dropdowns.forEach(function(dropdown) {
        if (!dropdown.contains(event.target)) {
            var toggle = dropdown.previousElementSibling;
            if (toggle && !toggle.contains(event.target)) {
                var bsDropdown = bootstrap.Dropdown.getInstance(toggle);
                if (bsDropdown) bsDropdown.hide();
            }
        }
    });
});