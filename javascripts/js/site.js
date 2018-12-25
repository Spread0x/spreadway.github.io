$( document ).ready(function() {
    var typed = new Typed("#indexheadertypings", {
    strings: ['job', 'task', 'startup', 'project'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 2000,
    loop: true,
    onComplete: function(self) { console.log('onCmplete ' + self) },
    preStringTyped: function(pos, self) { console.log('preStringTyped ' + pos + ' ' + self); },
    onStringTyped: function(pos, self) { console.log('onStringTyped ' + pos + ' ' + self) },
    onLastStringBackspaced: function(self) { console.log('onLastStringBackspaced ' + self) },
    onTypingPaused: function(pos, self) { console.log('onTypingPaused ' + pos + ' ' + self) },
    onTypingResumed: function(pos, self) { console.log('onTypingResumed ' + pos + ' ' + self) },
    onReset: function(self) { console.log('onReset ' + self) },
    onStop: function(pos, self) { console.log('onStop ' + pos + ' ' + self) },
    onStart: function(pos, self) { console.log('onStart ' + pos + ' ' + self) },
    onDestroy: function(self) { console.log('onDestroy ' + self) }
  });
});