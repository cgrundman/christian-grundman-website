import classes from "./Tags.module.css";

function Tag({ tagList }) {
  return (
    <div>
      <div>
        {tagList.map((tag, index) =>
          tag === "Programming" ? (
            <button key={index} className={classes.pTag}>
              {tag}
            </button>
          ) : tag === "Project Management" ? (
            <button key={index} className={classes.pmTag}>
              {tag}
            </button>
          ) : tag === "Mechanics" ? (
            <button key={index} className={classes.mTag}>
              {tag}
            </button>
          ) : (
            <button key={index} className={classes.eTag}>
              {tag}
            </button>
          )
        )}
      </div>
      </div>
  );
}

export default Tag;
