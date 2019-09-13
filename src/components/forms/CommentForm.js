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
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="row">
          <div className="col-sm-4 col-xs-12 form-group">
            <Field
              name="name"
              placeholder="Name"
              component={renderField}
              className="form-control input-name"
              validate={[required]}
              type="text" />
          </div>
          <div className="col-sm-4 col-xs-12 form-group">
            <Field
              name="email"
              placeholder="Email"
              component={renderField}
              className="form-control input-email"
              validate={[required, isEmail]}
              type="text" />
          </div>
          <div className="col-sm-4 col-xs-12 form-group submit-btn-container">
            <button type="submit" disabled={!valid} className="btn btn-success form-control">Submit</button>
          </div>
          <div className="col-12 form-group">
            <Field
              name="body"
              placeholder="Comment"
              component={renderTextArea}
              className="form-control input-comment"
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
