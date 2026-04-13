import { Component, type ErrorInfo, type ReactNode } from 'react';

export class SilentErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('[MissionControl]', error.message, info.componentStack);
  }

  render() {
    return this.state.hasError ? null : this.props.children;
  }
}