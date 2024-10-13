import casual from '../avatars/casual.svg'
import professional from '../avatars/professional.svg'
import relaxed from '../avatars/relaxed.svg'
import PageContent from '../components/PageContent';

function AboutMe() {
    return (
        <PageContent title="About Me">
            <div>
                <img src={casual} alt="casual" width="200" />
                <img src={professional} alt="professional" width="200" />
                <img src={relaxed} alt="relaxed" width="200" />
            </div>
            Coming Soon...
        </PageContent>
    )
}

export default AboutMe;