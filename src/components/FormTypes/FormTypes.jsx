import React from "react";
import styles from "./formTypes.module.css";

export const Input = ({
  label,
  register,
  required,
  errors,
  name,
  ...props
}) => (
  <div className={styles.outer}>
    <label className={styles.inputLabel}>{label}</label>
    <input
      className={styles.input}
      {...register(label, { required })}
      {...props}
    />
    <div style={{ color: "red" }}>
      {errors[label] && <span>{label} is required</span>}
    </div>
  </div>
);

export const Select = React.forwardRef(
  (
    {
      onChange,
      onBlur,
      name,
      label,
      options,
      register,
      required,
      errors,
      ...props
    },
    ref
  ) => (
    <div className={styles.outer}>
      <label className={styles.inputLabel}>{label}</label>
      <div className={styles.selectBorder}>
        <select
          className={styles.select}
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          {...register(label, { required })}
          {...props}
        >
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
      <div style={{ color: "red" }}>
        {errors[label] && <span>{label} is required</span>}
      </div>
    </div>
  )
);
