import React, { useState, useMemo, useCallback, FC, ComponentType, FormEvent } from 'react';

import { Parse } from '../parser';
import { ConvertorType } from '../converters';
import { MMLContext } from '../context';
import { Loader as LoaderComponent, LoaderProps } from './Loader';
import { Error as ErrorComponent, ErrorProps } from './Error';
import { Success as SuccessComponent, SuccessProps } from './Success';

export type MMLProps = {
  /** The MML string source to render */
  source: string;
  /** The convert config allows you to overwrite the MML to react conversion */
  converters?: Record<string, ConvertorType>;
  /** The submit callback whenever a form is submitted, submit is expected to return a promise */
  onSubmit?: (data: Record<string, unknown>) => Promise<any>;
  /** Custom classname, appended to wrapper classname */
  className?: string;
  /** The Loader component */
  Loader?: ComponentType<LoaderProps>;
  /** The error component */
  Error?: ComponentType<ErrorProps>;
  /** The success message component */
  Success?: ComponentType<SuccessProps>;
};

/**
 * MML root component
 */
export const MML: FC<MMLProps> = ({
  source,
  onSubmit,
  converters,
  className = '',
  Loader = LoaderComponent,
  Error = ErrorComponent,
  Success = SuccessComponent,
}) => {
  const [state, setState] = useState({});
  const [error, setError] = useState('');
  const [submitState, setSubmitState] = useState({ loading: false, error: '', success: '' });

  // expose helpers for form elements to change the state
  const setValue = useCallback((name: string, value: any) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!onSubmit) return console.warn('missing submit handler');

      try {
        setSubmitState({ loading: true, error: '', success: '' });
        await onSubmit(state);
        setSubmitState({ loading: false, error: '', success: 'submitted' });
      } catch (e) {
        setSubmitState({ loading: false, error: 'something is broken', success: '' });
      }
    },
    [state, onSubmit],
  );

  const children = useMemo(() => {
    try {
      const tree = Parse(source, converters);
      setState(tree.initialState()); // get initial state for all input elements in MML
      return tree.toReact();
    } catch (e) {
      console.warn('mml parsing error: ', source, e);
      setError("This chat message has invalid formatting and can't be shown");
      return null;
    }
  }, [source, converters]);

  return (
    <div className={`mml-container mml-wrap ${className}`}>
      {error ? (
        <Error error={error} />
      ) : (
        <MMLContext.Provider value={{ ...state, submitState, setValue }}>
          <form onSubmit={handleSubmit}>
            {children}
            {submitState.loading && <Loader loading={submitState.loading} />}
            {submitState.success && <Success success={submitState.success} />}
            {submitState.error && <Error error={submitState.error} />}
          </form>
        </MMLContext.Provider>
      )}
    </div>
  );
};
