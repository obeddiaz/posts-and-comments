import React from 'react';

const formErrors = (error, warning) => {
  if (!error && !warning) return null;
  return (
    <div className="form-error-container pull-right">
        {
        (error && <small className="form-error"><i className="fa fa-exclamation-triangle" />{error}</small>)
            || (warning && <small className="form-warn"><i className="fa fa-exclamation-triangle" />{warning}</small>)
        }
    </div>
  );
};

const renderField = ({
  input,
  placeholder,
  type,
  className,
  meta: { touched, error, warning },
}) => (
    <div>
      <input {...input} className={className} placeholder={placeholder} type={type}/>
      {touched && formErrors(error, warning)}
    </div>
);

const renderTextArea = ({
  input,
  placeholder,
  className,
  meta: { touched, error, warning },
}) => (
      <div>
        <textarea {...input} className={className} placeholder={placeholder} />
        { touched && formErrors(error, warning) }
      </div>
);

export {
  renderField,
  renderTextArea,
};
