function InputForm ({$placeholder, $type, $className, $label}) {
    return (
        <div className="inputForm">
            <label htmlFor={$label}></label>
            <input type={$type} id={$label} placeholder={$placeholder} className={$className} autoComplete="off" />
        </div>
    );
}

export default InputForm;