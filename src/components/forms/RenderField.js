import React from 'react';

const renderField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error, warning },
}) => (
    <div>
      {
        label
        && <label>{label}</label>
      }
      <div>
        <input {...input} className={className} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
);

const renderTextArea = ({
  input,
  label,
  className,
  meta: { touched, error, warning },
}) => (
      <div>
        {
          label
          && <label>{label}</label>
        }
        <div>
          <textarea {...input} className={className} placeholder={label} />
          {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
);

export {
  renderField,
  renderTextArea,
};
