import classes from './description.module.css'

export default function Description({ description }) {
  return (
    <div className={`${classes.overlay} ${classes.overView} container`} >
      {description}
    </div>

  )
}
