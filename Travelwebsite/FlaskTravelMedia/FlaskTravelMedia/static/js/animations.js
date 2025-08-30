// Advanced Animations for South India Explorer
// Standalone animation library with smooth transitions and effects

class SouthIndiaAnimations {
    constructor() {
        this.isInitialized = false;
        this.animationQueue = [];
        this.activeAnimations = new Map();
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '50px'
        };
        
        this.init();
    }

    init() {
        if (this.isInitialized) return;
        
        document.addEventListener('DOMContentLoaded', () => {
            this.initScrollAnimations();
            this.initHoverEffects();
            this.initParallaxEffects();
            this.initCounterAnimations();
            this.initTypewriterEffects();
            this.initFloatingElements();
            this.initMorphingShapes();
            this.initGradientAnimations();
            this.initImageRevealEffects();
            this.initTextAnimations();
            this.setupPerformanceOptimization();
        });
        
        this.isInitialized = true;
    }

    // Advanced scroll-triggered animations
    initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.triggerElementAnimation(entry.target);
                }
            });
        }, this.observerOptions);

        // Observe elements with animation attributes
        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });

        // Staggered animations for groups
        document.querySelectorAll('.stagger-animation').forEach(container => {
            const children = container.children;
            Array.from(children).forEach((child, index) => {
                child.style.animationDelay = `${index * 0.1}s`;
                observer.observe(child);
            });
        });
    }

    // Trigger specific animations based on data attributes
    triggerElementAnimation(element) {
        const animationType = element.dataset.animate;
        const delay = element.dataset.delay || 0;
        const duration = element.dataset.duration || 800;
        
        setTimeout(() => {
            switch(animationType) {
                case 'fadeInUp':
                    this.fadeInUp(element, duration);
                    break;
                case 'slideInLeft':
                    this.slideInLeft(element, duration);
                    break;
                case 'slideInRight':
                    this.slideInRight(element, duration);
                    break;
                case 'scaleIn':
                    this.scaleIn(element, duration);
                    break;
                case 'rotateIn':
                    this.rotateIn(element, duration);
                    break;
                case 'bounceIn':
                    this.bounceIn(element, duration);
                    break;
                case 'flipIn':
                    this.flipIn(element, duration);
                    break;
                case 'zoomIn':
                    this.zoomIn(element, duration);
                    break;
                default:
                    this.fadeInUp(element, duration);
            }
        }, delay);
    }

    // Individual animation methods
    fadeInUp(element, duration = 800) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }

    slideInLeft(element, duration = 800) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px)';
        element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }

    slideInRight(element, duration = 800) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(50px)';
        element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }

    scaleIn(element, duration = 800) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        });
    }

    rotateIn(element, duration = 800) {
        element.style.opacity = '0';
        element.style.transform = 'rotate(-180deg) scale(0.8)';
        element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'rotate(0deg) scale(1)';
        });
    }

    bounceIn(element, duration = 800) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.3)';
        element.style.transition = `all ${duration}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        });
    }

    flipIn(element, duration = 800) {
        element.style.opacity = '0';
        element.style.transform = 'rotateY(-90deg)';
        element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'rotateY(0deg)';
        });
    }

    zoomIn(element, duration = 800) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0)';
        element.style.transition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        });
    }

    // Advanced hover effects
    initHoverEffects() {
        // Magnetic effect for buttons
        document.querySelectorAll('.btn, .destination-card').forEach(element => {
            this.addMagneticEffect(element);
        });

        // Tilt effect for cards
        document.querySelectorAll('.feature-card, .destination-card').forEach(card => {
            this.addTiltEffect(card);
        });

        // Ripple effect for buttons
        document.querySelectorAll('.btn').forEach(btn => {
            this.addRippleEffect(btn);
        });

        // Image zoom effect
        document.querySelectorAll('.gallery-item img').forEach(img => {
            this.addImageZoomEffect(img);
        });
    }

    addMagneticEffect(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x * 0.15;
            const moveY = y * 0.15;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    }

    addTiltEffect(element) {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            const rotateX = (mouseY / (rect.height / 2)) * 10;
            const rotateY = (mouseX / (rect.width / 2)) * -10;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    }

    addRippleEffect(button) {
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                pointer-events: none;
            `;
            
            const style = document.createElement('style');
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    addImageZoomEffect(img) {
        const container = img.parentElement;
        
        container.addEventListener('mouseenter', () => {
            img.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            img.style.transform = 'scale(1.1)';
        });

        container.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    }

    // Parallax effects
    initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        if (parallaxElements.length === 0) return;

        let ticking = false;

        const updateParallax = () => {
            const scrollTop = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const speed = parseFloat(element.dataset.parallax) || 0.5;
                
                if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                    const yPos = -(scrollTop * speed);
                    element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            });
            
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick);
    }

    // Counter animations
    initCounterAnimations() {
        const counters = document.querySelectorAll('[data-counter]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.counter);
        const duration = parseInt(element.dataset.duration) || 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.floor(current);
            
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    }

    // Typewriter effects
    initTypewriterEffects() {
        const typewriterElements = document.querySelectorAll('[data-typewriter]');
        
        typewriterElements.forEach(element => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.typeWriter(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(element);
        });
    }

    typeWriter(element) {
        const text = element.dataset.typewriter;
        const speed = parseInt(element.dataset.speed) || 100;
        element.textContent = '';
        let i = 0;
        
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    // Floating elements animation
    initFloatingElements() {
        const floatingElements = document.querySelectorAll('[data-float]');
        
        floatingElements.forEach((element, index) => {
            const duration = 3000 + (index * 500);
            const delay = index * 200;
            
            element.style.animation = `float ${duration}ms ease-in-out infinite ${delay}ms`;
        });

        // Add CSS for floating animation
        if (!document.querySelector('#floating-styles')) {
            const style = document.createElement('style');
            style.id = 'floating-styles';
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Morphing shapes
    initMorphingShapes() {
        const morphElements = document.querySelectorAll('[data-morph]');
        
        morphElements.forEach(element => {
            const shapes = element.dataset.morph.split(',');
            let currentShape = 0;
            
            setInterval(() => {
                currentShape = (currentShape + 1) % shapes.length;
                element.style.clipPath = shapes[currentShape];
            }, 3000);
        });
    }

    // Gradient animations
    initGradientAnimations() {
        const gradientElements = document.querySelectorAll('[data-gradient-animate]');
        
        gradientElements.forEach(element => {
            element.style.backgroundSize = '200% 200%';
            element.style.animation = 'gradientShift 4s ease infinite';
        });

        // Add CSS for gradient animation
        if (!document.querySelector('#gradient-styles')) {
            const style = document.createElement('style');
            style.id = 'gradient-styles';
            style.textContent = `
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Image reveal effects
    initImageRevealEffects() {
        const revealImages = document.querySelectorAll('[data-reveal]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.revealImage(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        revealImages.forEach(img => {
            img.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0% 100%)';
            observer.observe(img);
        });
    }

    revealImage(element) {
        const direction = element.dataset.reveal || 'left';
        let clipPath;
        
        switch(direction) {
            case 'left':
                clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
                break;
            case 'right':
                clipPath = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
                break;
            case 'top':
                clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
                break;
            case 'bottom':
                clipPath = 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)';
                break;
            default:
                clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
        }
        
        element.style.transition = 'clip-path 1s cubic-bezier(0.4, 0, 0.2, 1)';
        element.style.clipPath = clipPath;
    }

    // Text animations
    initTextAnimations() {
        const textElements = document.querySelectorAll('[data-text-animate]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateText(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        textElements.forEach(element => observer.observe(element));
    }

    animateText(element) {
        const animationType = element.dataset.textAnimate;
        const text = element.textContent;
        const words = text.split(' ');
        
        element.innerHTML = '';
        
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.display = 'inline-block';
            span.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            element.appendChild(span);
            
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // Performance optimization
    setupPerformanceOptimization() {
        // Reduce motion for users who prefer it
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.querySelectorAll('*').forEach(element => {
                element.style.animationDuration = '0.001s';
                element.style.transitionDuration = '0.001s';
            });
        }

        // Pause animations when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                document.querySelectorAll('[style*="animation"]').forEach(element => {
                    element.style.animationPlayState = 'paused';
                });
            } else {
                document.querySelectorAll('[style*="animation"]').forEach(element => {
                    element.style.animationPlayState = 'running';
                });
            }
        });
    }

    // Utility methods
    createTimeline() {
        return new AnimationTimeline();
    }

    addToQueue(animation) {
        this.animationQueue.push(animation);
    }

    playQueue() {
        this.animationQueue.forEach((animation, index) => {
            setTimeout(() => {
                animation();
            }, index * 100);
        });
        this.animationQueue = [];
    }

    // Advanced animation sequence builder
    sequence(elements, animations) {
        return new Promise((resolve) => {
            let completed = 0;
            
            elements.forEach((element, index) => {
                setTimeout(() => {
                    animations.forEach(animation => {
                        animation(element);
                    });
                    
                    completed++;
                    if (completed === elements.length) {
                        resolve();
                    }
                }, index * 100);
            });
        });
    }
}

// Animation Timeline class for complex sequences
class AnimationTimeline {
    constructor() {
        this.animations = [];
        this.currentTime = 0;
    }

    add(animation, time = 0) {
        this.animations.push({
            animation,
            time: this.currentTime + time
        });
        return this;
    }

    play() {
        this.animations.forEach(({ animation, time }) => {
            setTimeout(animation, time);
        });
        return this;
    }

    reset() {
        this.animations = [];
        this.currentTime = 0;
        return this;
    }
}

// Initialize the animation system
const southIndiaAnimations = new SouthIndiaAnimations();

// Expose to global scope for external use
window.SouthIndiaAnimations = southIndiaAnimations;

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SouthIndiaAnimations;
}

// Additional preset animations for specific elements
document.addEventListener('DOMContentLoaded', function() {
    // Hero section animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) {
        setTimeout(() => southIndiaAnimations.fadeInUp(heroTitle, 1000), 300);
    }
    if (heroSubtitle) {
        setTimeout(() => southIndiaAnimations.fadeInUp(heroSubtitle, 1000), 600);
    }
    if (heroButtons) {
        setTimeout(() => southIndiaAnimations.fadeInUp(heroButtons, 1000), 900);
    }
    
    // Destination cards stagger animation
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach((card, index) => {
        setTimeout(() => {
            southIndiaAnimations.scaleIn(card, 800);
        }, index * 200);
    });
    
    // Feature cards animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.setAttribute('data-animate', 'bounceIn');
        card.setAttribute('data-delay', index * 100);
    });
    
    // Gallery items animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.setAttribute('data-animate', 'zoomIn');
        item.setAttribute('data-delay', index * 50);
    });
});

// Scroll-triggered animations for different sections
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax effect for hero video
    const heroVideo = document.querySelector('.hero-video-container');
    if (heroVideo) {
        heroVideo.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
    
    // Fade out effect for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const opacity = 1 - (scrolled / window.innerHeight);
        heroContent.style.opacity = Math.max(0, opacity);
    }
});

// Custom easing functions
const easings = {
    easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    easeInQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
    easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
    easeInExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    easeInOutExpo: 'cubic-bezier(1, 0, 0, 1)',
    easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    easeInOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    easeInOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

// Make easings available globally
window.easings = easings;

console.log('South India Explorer Animations loaded successfully!');
