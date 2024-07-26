import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AppWrapper from "./App";
import ErrorBoundary from "./ErrorBoundary";

// Mock console.error to avoid error logs during tests
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
});

test("renders home link", () => {
  render(
    <ErrorBoundary>
      <AppWrapper />
    </ErrorBoundary>
  );
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

test("handles errors with ErrorBoundary", () => {
  const ThrowError = () => {
    throw new Error("Test Error");
  };

  render(
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
  );

  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
});

test("hides error messages on window error", () => {
  window.onerror("Script error.", "", 0, 0, null);
  expect(console.error).toHaveBeenCalled();
});

test("hides unhandled promise rejections", async () => {
  const unhandledRejection = new Promise((_, reject) =>
    reject("Test rejection")
  );
  await unhandledRejection.catch(() => {});
  expect(console.error).toHaveBeenCalled();
});
