import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Parse } from '../parser';
import { Loader as LoaderComponent } from './Loader';
import { Error as ErrorComponent } from './Error';
import { Success as SuccessComponent } from './Success';
import { MMLContainer } from './MMLContainer';

export function MML({
  source,
  onSubmit,
  converterConfig,
  Loader = LoaderComponent,
  Error = ErrorComponent,
  Success = SuccessComponent,
  ...props
}) {
  const [mmlError, setError] = useState('');
  const [initialData, setInitialData] = useState({});

  const tree = useMemo(() => {
    const tree = Parse(source);
    if (converterConfig) {
      tree.converterConfig = converterConfig;
    }
    try {
      // get initial state for all input elements in MML
      const treeState = tree.initialState();
      setInitialData(treeState);
    } catch (e) {
      setError("This chat message has invalid formatting and can't be shown");
    }
    return tree;
  }, [source, converterConfig]);

  return (
    <MMLContainer
      onSubmit={onSubmit}
      hasData={tree.hasData()}
      data={initialData}
      error={mmlError}
      Loader={Loader}
      Error={Error}
      Success={Success}
    >
      {tree.toReact(tree)}
    </MMLContainer>
  );
}

MML.propTypes = {
  /** The MML source to render */
  source: PropTypes.string.isRequired,
  /** The convert config allows you to overwrite the MML to react conversion */
  converterConfig: PropTypes.object,
  /** The submit callback whenever a form is submitted */
  onSubmit: PropTypes.func,
  /** The Loader component */
  Loader: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** The error component */
  Error: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** The success message component */
  Success: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};
