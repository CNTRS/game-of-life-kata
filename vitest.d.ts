/// <reference types="@testing-library/jest-dom" />

import "@testing-library/jest-dom"

declare global {
    namespace Vi {
        interface JestAssertion<T = any> extends jest.Matchers<void, T> {
            toBeInTheDocument(): T
            toBeVisible(): T
            toBeDisabled(): T
            toBeEnabled(): T
            toHaveTextContent(text: string | RegExp): T
            toHaveAttribute(attr: string, value?: string): T
            toHaveClass(className: string): T
            toHaveStyle(css: string | Record<string, any>): T
            toBeChecked(): T
            toHaveValue(value: string | number): T
            toBeEmptyDOMElement(): T
            toBeInvalid(): T
            toBeValid(): T
            toHaveFocus(): T
        }
    }
}
