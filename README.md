# React Monetization

- [What is this?](#what-is-this)
- [Installation](#installation)
- [Usage](#usage)
  - [WebMonetizationProvider](#webmonetizationprovider)
  - [useWebMonetization](#usewebmonetization)

## What is this?

A React library for tracking Web Monetization state in your app.

## Installation

```bash
npm install @interruptor/react-monetization
```

## Usage

### WebMonetizationProvider

First, you need to wrap your application with the `WebMonetizationProvider`. This sets up the event listeners needed for tracking web monetization events.

```jsx
const MyApp = ({ children }) => {
  return <WebMonetizationProvider>{children}</WebMonetizationProvider>
}
```

### useWebMonetization

The `useWebMonetization` hook provides information about the current Web Monetization `state`, whether it's "pending", "started" or "stopped". For convenience, there's also an `isActive` property, for knowing whether it's on or off.

```jsx
const MyComponent = () => {
  const monetization = useWebMonetization()

  if (monetization.isActive) {
    return <p>Web Monetization is enabled! 🎉</p>
  }

  return <p>It's off</p>
}
```

⚠️ _The hook will throw an error if used outside of the `WebMonetizationProvider`_
