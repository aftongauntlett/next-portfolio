import type { JSX } from "react";

export default function Contact(): JSX.Element {
  return (
    <form className="space-y-6" aria-label="Contact form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" id="name" name="name" className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" id="email" name="email" className="form-input" />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="form-textarea"
        />
      </div>

      <button type="submit" className="btn-primary" aria-label="Send message">
        Send Message
      </button>
    </form>
  );
}
