import React, { useState, useMemo, useCallback, useRef, FC, ComponentType, FormEvent } from 'react';
import { TreeType } from '../parser/tree';

import { Parse, ConvertorType } from '../parser';
import { Loader as LoaderComponent, LoaderProps } from '../components/Loader';
import { Error as ErrorComponent, ErrorProps } from '../components/Error';
import { Success as SuccessComponent, SuccessProps } from '../components/Success';

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
  const [error, setError] = useState('');
  const [submitState, setSubmitState] = useState({ loading: false, error: '', success: '' });
  const type = useRef<TreeType>(undefined);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!onSubmit) return console.warn('missing submit handler');

      try {
        setSubmitState({ loading: true, error: '', success: '' });
        const state: Record<string, any> = {};
        const fd = new FormData(event.currentTarget);
        fd.forEach((value, key) => (state[key] = value));

        await onSubmit(state);
        setSubmitState({ loading: false, error: '', success: 'submitted' });
      } catch (e) {
        setSubmitState({ loading: false, error: 'something is broken', success: '' });
      }
    },
    [onSubmit],
  );

  const children = useMemo(() => {
    try {
      const tree = Parse(source, converters);
      type.current = tree.type;
      return tree.toReact();
    } catch (e) {
      console.warn('mml parsing error: ', source, e);
      setError("This chat message has invalid formatting and can't be shown");
      return null;
    }
  }, [source, converters]);

  const innerClassName = type.current === 'card' ? 'mml-card' : 'mml-wrap';

  return (
    <div className={`mml-container ${className}`}>
      {error ? (
        <div className={innerClassName}>
          <Error error={error} />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={innerClassName}>
          {children}
          {submitState.loading && <Loader loading={submitState.loading} />}
          {submitState.success && <Success success={submitState.success} />}
          {submitState.error && <Error error={submitState.error} />}
        </form>
      )}
    </div>
  );
};
