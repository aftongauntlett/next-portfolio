// global.d.ts
export {};

declare global {
  interface Window {
    /** recaptcha v3 grecaptcha object */
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}
