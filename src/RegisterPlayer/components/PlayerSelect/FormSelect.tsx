import type { ChangeEvent, ReactNode } from "react";
import "./FormSelect.css";

export interface FormSelectProps<T> {
  label: string;
  placeholder?: string;
  options: T[];
  getValue : (option:T) => string | number;
  getLabel : (option:T) => string;
  onChange : (e: ChangeEvent<HTMLSelectElement>) => void;
  value : string
  icon?: ReactNode;
  id?: string;
  name?: string;
} 

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const FormSelect = <T, >({ label, placeholder, options, icon, id, name, getValue, getLabel, value, onChange}: FormSelectProps<T>) => {
  const selectId = id ?? `field-${slugify(label)}`;

  return (
    <div className="form-select-field">
      <label className="form-select-label" htmlFor={selectId}>
        {label} <span className="form-select-required">*</span>
      </label>
      <div className="form-select-control">
        {icon && <span className="form-select-icon">{icon}</span>}
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          className={`form-select-element${icon ? " form-select-element--with-icon" : ""}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={ getValue(option) } value={getValue(option)}>
              {getLabel(option)}
            </option>
          ))}
        </select>
        <svg
          className="form-select-arrow"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}


