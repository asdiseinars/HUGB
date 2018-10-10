const greeting = require('./src/greetings');
test("returns greeting with custom name", () => {
	expect(greeting("Bei")).toBe("Hello, Bei!");	
});