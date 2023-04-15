import './backdrop.css'

function Backdrop({show,setSideToggle}) {
    return (
       show && <div className="backdrop" onClick={()=>setSideToggle(false)}>
            
        </div>
    )
}

export default Backdrop
