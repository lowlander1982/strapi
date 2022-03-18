import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AssetDialog } from '../AssetDialog';
import { UploadAssetDialog } from '../UploadAssetDialog/UploadAssetDialog';

const Steps = {
  SelectAsset: 'SelectAsset',
  UploadAsset: 'UploadAsset',
};

export const MediaLibraryDialog = ({ onClose, onSelectAssets, allowedTypes, multiple }) => {
  const [step, setStep] = useState(Steps.SelectAsset);

  if (step === Steps.SelectAsset) {
    return (
      <AssetDialog
        allowedTypes={allowedTypes}
        onClose={onClose}
        onValidate={onSelectAssets}
        onAddAsset={() => setStep(Steps.UploadAsset)}
        multiple={multiple}
      />
    );
  }

  return <UploadAssetDialog onClose={() => setStep(Steps.SelectAsset)} />;
};

MediaLibraryDialog.defaultProps = {
  allowedTypes: ['files', 'images', 'videos', 'audios'],
  multiple: true,
};

MediaLibraryDialog.propTypes = {
  multiple: PropTypes.bool,
  allowedTypes: PropTypes.arrayOf(PropTypes.string),
  onClose: PropTypes.func.isRequired,
  onSelectAssets: PropTypes.func.isRequired,
};
