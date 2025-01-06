function InputForm ({$placeholder, $type, $className}) {
    return (
        <input type={$type} placeholder={$placeholder} className={$className} />
    );
}

export default InputForm;