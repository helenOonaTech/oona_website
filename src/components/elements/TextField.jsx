function TextField({ type, placeholder, name }) {
  return (
    // <div className="text_input relative">
    //   <input type={type} placeholder={placeholder} name={name} />
    //   <span></span>
    // </div>
    <div className="col-3 text_input relative">
      <input
        className="effect-2 text-sm"
        type={type}
        placeholder={placeholder}
        name={name}
      />
      <span className="focus-border"></span>
    </div>
  );
}

export default TextField;
