import test from "node:test";
import assert from "node:assert/strict";
import { autoIngestArgs } from "../src/auto-ingest-policy.js";

test("Pi session ingest uses the single transcript and conversation parser", () => {
	assert.deepEqual(autoIngestArgs("/sessions/current.jsonl", "session"), [
		"mine", "/sessions/current.jsonl", "--mode", "convos", "--wing", "sessions",
	]);
});

test("explicit project overrides retain their existing mining mode", () => {
	assert.deepEqual(autoIngestArgs("/project", "env"), ["mine", "/project"]);
});
