import classes from "./Tags.module.css"

function Tag({ name, index }) {
    return (
        name === "Programming" ? (
            <button key={index} className={classes.pTag}>
              <p>{name}</p>
            </button>
          ) : name === "Project Management" ? (
            <button key={index} className={classes.pmTag}>
              <p>{name}</p>
            </button>
          ) : name === "Mechanical" ? (
            <button key={index} className={classes.mTag}>
              <p>{name}</p>
            </button>
          ) : (
            <button key={index} className={classes.eTag}>
              <p>{name}</p>
            </button>
          )
    )
}

export default Tag;