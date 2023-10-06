

function Uploader() {
  
    return (
      <>
        <div className="item settings-line">
            <div className="input-drop">
                <button>Upload a file</button>
                <span className="hidden">
                            <input id="image-input" type="file" accept="image/png, image/jpeg"/>
                    </span>
            </div>
         
        </div>
      </>
    )
  }
  

export default Uploader