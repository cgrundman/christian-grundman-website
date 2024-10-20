import casual from '../avatars/casual.svg'
import PageContent from '../components/PageContent';
import classes from '../components/PageContent.module.css'

function AboutMePage() {
    return (
        <PageContent title="About Me">
            <div>
                <img src={casual} className={classes.avatar} alt="casual" width="200" />
            </div>
            <h3>Motivation</h3>
            <p>I try to experience life while making cool things.</p>
            <img 
                src="https://raw.githubusercontent.com/cgrundman/christian-grundman-website/refs/heads/master/src/images/travel.jpg" 
                alt="travel" 
                className={classes.interests} 
            />
            <img 
                src="https://raw.githubusercontent.com/cgrundman/christian-grundman-website/refs/heads/master/src/images/hiking.JPG" 
                alt="hiking"
                className={classes.interests} 
            />
            <img 
                src="https://raw.githubusercontent.com/cgrundman/christian-grundman-website/refs/heads/master/src/images/beer.jpg" 
                alt="beer"
                className={classes.interests} 
            />
            <div className={classes.content}>
                <h2>Travel Maps</h2>
                <div>
                    <h3>US National Parks</h3>
                    <img src="https://github.com/cgrundman/travel-map-visualization/blob/main/National_Parks/nps.gif?raw=true" alt="NPS Gif" width="75%" />
                </div>
                <div> 
                    <h3>Germany Travels</h3>
                    <img src="https://github.com/cgrundman/travel-map-visualization/blob/main/Sehenswuerdigkeiten/de.gif?raw=true" alt="DE Gif" width="50%" />
                </div>
            </div>
        </PageContent>
    )
}

export default AboutMePage;