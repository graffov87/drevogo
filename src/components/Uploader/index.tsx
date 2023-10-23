import Parsing from "@components/gedcom/src/parsing";

const Uploader = () => {
  const parse = () => {
    Parsing();
  };
  return (
    <>
      <div className="item settings-line">
        <div className="input-drop hidden">
          <button>Upload a file</button>
          <span className="hidden">
            <input id="image-input" type="file" accept="image/png, image/jpeg" />
          </span>
        </div>
        <div className="input-drop">
          <button onClick={parse}>Parse Gedcom file</button>
        </div>
      </div>
    </>
  );
};

export default Uploader;
