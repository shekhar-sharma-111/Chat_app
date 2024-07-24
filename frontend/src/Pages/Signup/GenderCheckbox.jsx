
function GenderCheckbox({onGenderChange,selectedGender}) {
  return (
    <>
      <div className="flex ">
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer ${selectedGender==='male'?"selected" : ""}`}>
            <span className="label-text text-grey-50">Male</span>
            <input 
            type="checkbox"
            checked={selectedGender==="male"}
            onChange={()=>onGenderChange('male')}
               className="checkbox border-slate-900" />
          </label>
        </div>

        <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender==='female'?"selected" : ""}`}>
           
          {/* <label className="label gap-2 cursor-pointer"> */}
            <span className="label-text text-grey-50 ">Female</span>
            <input type="checkbox"
              checked={selectedGender==="female"}
              onChange={()=>onGenderChange('female')}
                
            className="checkbox border-slate-900" />
          </label>
        </div>

        <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender==='others'?"selected" : ""}`}>
           
          {/* <label className="label gap-2 cursor-pointer"> */}
            <span className="label-text text-grey-50">Others</span>
            <input type="checkbox" 
              checked={selectedGender==="others"}
              onChange={()=>onGenderChange('others')}
                
            className="checkbox border-slate-900" />
          </label>
        </div>
      </div>
    </>
  );
}

export default GenderCheckbox;
