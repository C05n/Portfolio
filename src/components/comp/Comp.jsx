function Comp({$compSrc, $compName}) {
    return (
        <article>
            <img src={$compSrc} alt={$compName} />
            <h4>{$compName}</h4>
        </article>
    )
}

export default Comp;