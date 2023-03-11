function CategoryBar({ handleClick }) {
    const style = {
        height: '5vh',
        display: 'flex',
    }
    const buttonStyle = {
        height: '100%',
        width: '100%',
        background: 'transparent',
        color: 'white',
        border: '1px solid white',
    }

  return (
    <div style={style}>
        <button style={ buttonStyle } onClick={ () => handleClick() }>All</button>
        <button style={ buttonStyle } onClick={ () => handleClick('open') }>Open</button>
        <button style={ buttonStyle } onClick={ () => handleClick('completed') }>Completed</button>
        <button style={ buttonStyle } onClick={ () => handleClick('archived') }>Archived</button>
    </div>
  )
}

export default CategoryBar