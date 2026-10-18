import type { ChangeEvent, ReactNode } from "react";
import "./FormInput.css";

export interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  icon?: ReactNode;
  id?: string;
  name?: string;
  onChange : (e: ChangeEvent<HTMLInputElement>)=>void;
  value : string;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const FormInput = ({ label, placeholder, type = "text", icon, id, name, value, onChange }: FormInputProps) => {
  const inputId = id ?? `field-${slugify(label)}`;

  return (
    <div className="form-input-field">
      <label className="form-input-label" htmlFor={inputId}>
        {label} <span className="form-input-required">*</span>
      </label>
      <div className="form-input-control">
        {icon && <span className="form-input-icon">{icon}</span>}
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`form-input-element${icon ? " form-input-element--with-icon" : ""}`}
        />
      </div>
    </div>
  );
}

