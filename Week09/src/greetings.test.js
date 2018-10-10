const greeting = require('./greetings');
test("returns greeting with custom name", () => {
	expect(greeting("Bei")).toBe("Hello, Bei!");	
});