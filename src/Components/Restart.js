function Restart({ dispatch }) {
    return (
        <div>
            <button className="btn btn-ui btn-restart" onClick={() => dispatch({ type: 'restart' })}>
                Restart
            </button>
        </div>
    )
}

export default Restart
