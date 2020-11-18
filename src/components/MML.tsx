import React, { useState, useMemo, FC, ComponentType } from 'react';

import { Parse } from '../parser';
import { ConvertorType } from '../converters';
import { MMLContainer } from './MMLContainer';
import { Loader as LoaderComponent, LoaderProps } from './Loader';
import { Error as ErrorComponent, ErrorProps } from './Error';
import { Success as SuccessComponent, SuccessProps } from './Success';

export type MMLProps = {
  /** The MML source to render */
  source: string;
  /** The convert config allows you to overwrite the MML to react conversion */
  converters?: Record<string, ConvertorType>;
  /** The submit callback whenever a form is submitted, submit is expected to return a promise */
  onSubmit?: (data: Record<string, unknown>) => Promise<any>;
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
  Loader = LoaderComponent,
  Error = ErrorComponent,
  Success = SuccessComponent,
}) => {
  const [error, setError] = useState('');
  const [initialData, setInitialData] = useState({});

  const tree = useMemo(() => {
    try {
      const parsedTree = Parse(source, converters);
      setInitialData(parsedTree.initialState()); // get initial state for all input elements in MML
      return parsedTree;
    } catch (e) {
      setError("This chat message has invalid formatting and can't be shown");
      return null;
    }
  }, [source, converters]);

  return (
    <MMLContainer
      onSubmit={onSubmit}
      hasData={!!tree && tree.hasData()}
      data={initialData}
      error={error}
      Loader={Loader}
      Error={Error}
      Success={Success}
    >
      {tree && tree.toReact()}
    </MMLContainer>
  );
};
