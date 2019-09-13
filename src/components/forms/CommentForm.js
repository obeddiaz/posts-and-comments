import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { renderField, renderTextArea } from './RenderField';
import {
  required,
  isEmail,
  maxLength,
  minLength,
} from '../../utils/validation';


const maxLength500 = maxLength(500);
const minLength10 = minLength(10);

const AddCommentForm = (props) => {
  const { handleSubmit, valid } = props;
  return (
    <form className="comment-form-container" onSubmit={handleSubmit}>
      <div className="row">
          <div className="col-6 col-xs-12">
            <Field
              name="email"
              component={renderField}
              className="form-control comment-email"
              validate={[required, isEmail]}
              type="text" />
          </div>
          <div className="col-6 col-xs-12">
            <button type="submit" disabled={!valid} className="btn btn-success">Submit</button>
          </div>
          <div className="col-12">
            <Field
              name="comment"
              component={renderTextArea}
              className="form-control comment-text"
              validate={[required, minLength10, maxLength500]}
              type="textarea" />
          </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'comment',
})(AddCommentForm);
