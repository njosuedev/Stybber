export function Button({ label, disabled = false, type = "button" }) {
    return `
    <button 
      type="${type}" 
      class="stybber-btn${disabled ? " disabled" : ""}" 
      ${disabled ? "disabled" : ""}
    >
      ${label}
    </button>
  `;
}
//# sourceMappingURL=Button.js.map