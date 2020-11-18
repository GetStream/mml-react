import React, { useState, FC, ReactNode, ComponentType, FormEvent } from 'react';

import { MMLContext } from '../context';
import { Loader as LoaderComponent, LoaderProps } from './Loader';
import { Error as ErrorComponent, ErrorProps } from './Error';
import { Success as SuccessComponent, SuccessProps } from './Success';

export type MMLContainerProps = {
  /** Render an error message if needed */
  error: string;
  /** The child nodes */
  children: ReactNode;
  /** The initial state of the tree */
  data: Record<string, unknown>;
  /** If the child nodes contain data input elements */
  hasData?: boolean;
  /** The submit callback whenever a form is submitted, submit is expected to return a promise */
  onSubmit?: (data: Record<string, unknown>) => Promise<any>;
  /** The Loader component */
  Loader?: ComponentType<LoaderProps>;
  /** The error component */
  Error?: ComponentType<ErrorProps>;
  /** The success message component */
  Success?: ComponentType<SuccessProps>;
};

export const MMLContainer: FC<MMLContainerProps> = ({
  children,
  onSubmit,
  data,
  hasData = false,
  error = '',
  Loader = LoaderComponent,
  Error = ErrorComponent,
  Success = SuccessComponent,
}) => {
  const [state, setState] = useState(data);
  const [submitState, setSubmitState] = useState({ loading: false, error: '', success: '' });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!onSubmit) return console.warn('missing submit handler');

    try {
      setSubmitState({ loading: true, error: '', success: '' });
      await onSubmit(state);
      setSubmitState({ loading: false, error: '', success: 'submitted' });
    } catch (e) {
      setSubmitState({ loading: false, error: 'something is broken', success: '' });
    }
  }

  // expose helpers for form elements to change the state
  function setValue(name: string, value: any) {
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  if (error) return <div className="mml-container mml-wrap">{error}</div>;

  return (
    <MMLContext.Provider value={{ ...state, submitState, setValue }}>
      <div className="mml-container mml-wrap">
        {hasData ? (
          <form onSubmit={handleSubmit}>
            {children}
            {submitState.loading && <Loader loading={submitState.loading} />}
            {submitState.success && <Success success={submitState.success} />}
            {submitState.error && <Error error={submitState.error} />}
          </form>
        ) : (
          children
        )}
      </div>
    </MMLContext.Provider>
  );
};
