import casual from '../avatars/casual.svg'

import relaxed from '../avatars/relaxed.svg'
import PageContent from '../components/PageContent';
import classes from '../components/PageContent.module.css'

function AboutMePage() {
    return (
        <PageContent title="About Me">
            <div>
                <img src={casual} className={classes.avatar} alt="casual" width="200" />
                <img src={relaxed} className={classes.avatar} alt="relaxed" width="200" />
            </div>
            <h3>Coming Soon...</h3>
        </PageContent>
    )
}

export default AboutMePage;