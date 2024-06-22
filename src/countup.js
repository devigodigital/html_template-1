// Function to check if the element is in view and then start the animation
function animateWhenInView(element) {
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        var $this = $(element),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 2500,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
        observer.unobserve(element); // Stop observing after animation
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

  observer.observe(element);
}

// Apply the animateWhenInView function to each element with the 'data-count' attribute
$('[data-count]').each(function() {
  animateWhenInView(this);
});
