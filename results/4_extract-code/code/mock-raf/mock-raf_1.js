var createMockRaf = require('mock-raf');
var mockRaf = createMockRaf();

// Stub out your `requestAnimationFrame` method
sinon.stub(window, 'requestAnimationFrame').callsFake(mockRaf.raf);

// Take 10 `requestAnimationFrame` steps (your callback will fire 10 times)
mockRaf.step({ count: 10 });
