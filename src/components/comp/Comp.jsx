function Comp({$compSrc, $compName}) {
    return (
        <article>
            <img src={$compSrc} alt={$compName} />
            <h3>{$compName}</h3>
        </article>
    )
}

export default Comp;