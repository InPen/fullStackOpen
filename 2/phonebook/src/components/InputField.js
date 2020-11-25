import React from "react"

const InputField = ({ htmlFor, label, type, value, onChange }) => {
  <div>
  {/*include label w/htmlFor for accessibility porpuses, id on input creates relationship between label & input element*/}
    <label className='label' htmlFor={htmlFor}>
      {label}
    </label>
    <input
      type={type}
      className='input'
      id={htmlFor}
      value={value}
      onChange={onChange}
    />
    </div>
}
export default InputField
