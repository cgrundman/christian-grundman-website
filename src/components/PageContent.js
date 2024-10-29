import classes from './PageContent.module.css';

function PageContent({ children }) {
    return (
        <div className={classes.banner}>
            {children}
        </div>
    )
}

export default PageContent;