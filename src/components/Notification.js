export function Notification(type, message, closeFunc) {
  const classes = `notification ${type}`
  return (
    <div className={classes}>
      {message}
      <div className="close" onClick={closeFunc}>&times;</div>
    </div>
  )
}
