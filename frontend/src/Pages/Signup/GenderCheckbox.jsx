// import React from 'react'

function GenderCheckbox() {
  return (
   <>
      <div className="flex ">
        <div className="form-control" >
        <label className={"label gap-2 cursor-pointer"}>
          <span className="label-text text-grey-50">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
     
        <div className="form-control" >
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-grey-50 ">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
     </div>
     
        <div className="form-control" >
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-grey-50">Others</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
        </div>

     </div>
    </>
  );
}

export default GenderCheckbox;

