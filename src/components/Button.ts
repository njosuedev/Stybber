// src/components/Button.ts
export interface ButtonProps {
  label: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({ label, disabled = false, type = "button" }: ButtonProps): string {
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
