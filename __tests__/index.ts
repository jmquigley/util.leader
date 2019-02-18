"use strict";

import leader from "../index";

test("Default leader output", () => {
	const msg = "Test Leader Message";
	const chv = "*******************";
	const arr = leader(msg);

	expect(arr.length).toBe(6);
	expect(arr[0]).toBe(""); //
	expect(arr[1]).toBe(""); //
	expect(arr[2]).toBe(chv); // *******************
	expect(arr[3]).toBe(msg); // Test Leader Message
	expect(arr[4]).toBe(chv); // *******************
	expect(arr[5]).toBe(""); //
});

test("Validating leader output", () => {
	const msg = "Test Leader Message";
	const chv = "*******************";
	const arr = leader(msg, {log: null});

	expect(arr.length).toBe(6);
	expect(arr[0]).toBe(""); //
	expect(arr[1]).toBe(""); //
	expect(arr[2]).toBe(chv); // *******************
	expect(arr[3]).toBe(msg); // Test Leader Message
	expect(arr[4]).toBe(chv); // *******************
	expect(arr[5]).toBe(""); //
});

test("Validating output without leading/trailing space", () => {
	const msg = "Test Leader Message";
	const chv = "*******************";
	const arr = leader(msg, {
		log: null,
		leadingLines: -1,
		trailingLines: -1
	});

	expect(arr.length).toBe(3);
	expect(arr[0]).toBe(chv); // *******************
	expect(arr[1]).toBe(msg); // Test Leader Message
	expect(arr[2]).toBe(chv); // *******************
});

test("Validating output float leading/trailing lines", () => {
	const msg = "Test Leader Message";
	const chv = "*******************";
	const arr = leader(msg, {
		log: null,
		leadingLines: 1.51,
		trailingLines: 1.49
	});

	expect(arr.length).toBe(6);
	expect(arr[0]).toBe(""); //
	expect(arr[1]).toBe(""); //
	expect(arr[2]).toBe(chv); // *******************
	expect(arr[3]).toBe(msg); // Test Leader Message
	expect(arr[4]).toBe(chv); // *******************
	expect(arr[5]).toBe(""); //
});

test("Create leader with multiple lines in the message", () => {
	const msg = "Test Leader Message\nLine 2\r\nLine 3";
	const chv = "*******************";

	const arr = leader(msg, {log: null});

	expect(arr.length).toBe(8);
	expect(arr[0]).toBe(""); //
	expect(arr[1]).toBe(""); //
	expect(arr[2]).toBe(chv); // *******************
	expect(arr[3]).toBe("Test Leader Message"); // Test Leader Message
	expect(arr[4]).toBe("Line 2"); // Line 2
	expect(arr[5]).toBe("Line 3"); // Line 3
	expect(arr[6]).toBe(chv); // *******************
	expect(arr[7]).toBe(""); //
});
