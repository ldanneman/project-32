import React from "react";

export const Input = ({ label, register, required, errors }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
    <div style={{ color: "red" }}>
      {errors[label] && <span>{label} is required</span>}
    </div>
  </>
);

export const Select = React.forwardRef(
  (
    { onChange, onBlur, name, label, options, register, required, errors },
    ref
  ) => (
    <>
      <label>{label}</label>
      <select
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        {...register(label, { required })}
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <div style={{ color: "red" }}>
        {errors[label] && <span>{label} is required</span>}
      </div>
    </>
  )
);
