import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.jpg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const toRotate = ["Senior Web Specialist", "Web Developer", "React Developer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(preDelta => preDelta /2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Adrienne, `}<span className="wrap">{text}</span> </h1>
                    <p>A Full Stack Developer based in Hamilton, Ontario, and the sole Web Developer at Point Blank Creative - Canada's first unionized Ad Agency. I love being able to bridge creativity and tech to build dynamic and meaningful web applications.</p>
                    {/* <button onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle size={25}/> </button> */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}