import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
@customElement("lit-button")
export class LitButton extends LitElement {
  @property({ type: String })
  appName = "Lit";

  override render() {
    return html`
      <button @click=${() => alert(`Hello from your ${this.appName} app!`)}>
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-button": LitButton;
  }
}
