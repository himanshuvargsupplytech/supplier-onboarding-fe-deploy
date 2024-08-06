import React from "react";

function InputField(props) {
  const { field, onChange, error, touched, value } = props;
  const { type, name, label, inputType, options, datafields } = field;

  //rendering component based on fieldJson
  return inputType === "normal" ? (
    <div className="w-[90%] justify-evenly flex flex-row border-2 py-1">
      <label className="w-[50%] pl-3 border-r-2">{label}</label>
      <input
        className="border-solid border-black-600 w-[50%]"
        type={type}
        name={name}
        value={value[name]}
        onChange={onChange}
      />

      {error[name] && touched[name] ? (
        <p className="text-red-500">{error[name]}</p>
      ) : null}
    </div>
  ) : inputType === "Advance" ? (
    <div className="w-[90%] justify-evenly flex flex-row border-2">
      <div className="w-[50%] pl-3 border-r-2">
        <label>{label}</label>
        {options.map((option) => {
          return <p key={option}>{option}</p>;
        })}
      </div>
      <div className="border-solid border-black-600 w-[50%] flex items-end ">
        <div className="border border-solid w-[100%]">
          <input
            className="my-1 px-2 w-[100%]"
            type={type}
            name={name[0]}
            placeholder="Direct Number"
            value={value[name[0]]}
            onChange={onChange}
          />
          {error[name[0]] && touched[name[0]] ? (
            <p className="text-red-500">{error[name[0]]}</p>
          ) : null}

          <hr />
          <input
            className=" px-2 mt-1 w-[100%]"
            type={type}
            name={name[1]}
            value={value[name[1]]}
            placeholder="Mobile Number"
            onChange={onChange}
          />
          {error[name[1]] && touched[name[1]] ? (
            <p className="text-red-500">{error[name[1]]}</p>
          ) : null}
        </div>
      </div>
    </div>
  ) : inputType === "superior" ? (
    <div className="w-[90%] justify-evenly flex flex-row border-2">
      <div className="w-[50%] pl-3 border-r-2">
        <label>{label}</label>
      </div>
      <div className="border-solid border-black-600 w-[50%] flex items-end ">
        <div className="flex justify-between">
          <div className="">
            {datafields?.map((item, index) => (
              <div key={index} className="input-group">
                {item.type === "date" && (
                  <>
                    <label htmlFor={item.name}>{item.label}</label>
                    <input
                      className="my-1 px-2 w-[100%]"
                      type={item.type}
                      name={item.name}
                      value={value[item.name]}
                      onChange={onChange}
                    />
                    {error[item.name] && touched[item.name] ? (
                      <p className="text-red-500">{error[item.name]}</p>
                    ) : null}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="border">
            {datafields?.map((item, index) => (
              <div key={index} className="input-group">
                {item.type !== "date" && (
                  <>
                    <label htmlFor={item.name}>{item.label}</label>
                    <input
                      className=" border my-1 px-2 w-[100%]"
                      type={item.type}
                      name={item.name}
                      value={value[item.name]}
                      onChange={onChange}
                    />
                    {error[item.name] && touched[item.name] ? (
                      <p className="text-red-500">{error[item.name]}</p>
                    ) : (
                      `${touched[item.name]}`
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default InputField;
