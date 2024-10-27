import React from "react";

// Import all files from the `assets` folder
const importAllFiles = (requireContext) =>
  requireContext.keys().map(requireContext);
const files = importAllFiles(
  require.context("../assets", false, /\.(png|jpe?g|svg|json)$/)
);

const FileDisplay = () => {
  return (
    <div className="file-gallery">
      {files.map((file, index) => (
        <div key={index} className="file-item">
          {/* Display files based on their type */}
          {file.endsWith(".json") ? (
            <pre>{JSON.stringify(file, null, 2)}</pre>
          ) : (
            <img src={file} alt={`File ${index + 1}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default FileDisplay;
