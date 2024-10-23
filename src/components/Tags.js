import classes from "./Tags.module.css";

function Tag({ tagList }) {
  return (
    <div>
      {tagList.map((tag, index) =>
        tag === "Programming" ? (
          <button key={index} className={classes.pTag}>
            <p>{tag}</p>
          </button>
        ) : tag === "Project Management" ? (
          <button key={index} className={classes.pmTag}>
            <p>{tag}</p>
          </button>
        ) : tag === "Mechanical" ? (
          <button key={index} className={classes.mTag}>
            <p>{tag}</p>
          </button>
        ) : (
          <button key={index} className={classes.eTag}>
            <p>{tag}</p>
          </button>
        )
      )}
    </div>
  );
}

export default Tag;
