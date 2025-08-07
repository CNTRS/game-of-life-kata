import { render, screen } from '@testing-library/react'
import { describe, it, expect } from "vitest"
import App from "../App.tsx"

describe("App", () => {
  it("renders hello message", () => {
    render(<App />)
    expect(screen.getByText("Hello React with Vite!")).toBeInTheDocument()
  })
})
