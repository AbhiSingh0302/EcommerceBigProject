import { Button, Container } from "react-bootstrap";
import playImg from '../assets/free-play-button-icon-4211-thumb.png';

const Home = props => {
    return <>
    <Container fluid className="text-center py-4" style={{backgroundColor: "#777"}}>
        <div className="text-center mb-2">
    <Button variant="outline-info">Get Our Latest Album</Button>
        </div>
        <img src={playImg} alt="play" style={{width: "5%"}}/>
    </Container>
    <Container className="w-50 justify-content-center my-5">
        <h2 className="text-center mb-2">TOURS</h2>
        <table className="text-center">
            <tbody>
                <tr>
                    <td>JUL16</td>
                    <td>DETROIT, MI</td>
                    <td>DTE ENERGY MUSIC THEATRE</td>
                    <td><Button>BUY TICKETS</Button></td>
                </tr>
                <tr>
                    <td>JUL19</td>
                    <td>TORONTO,ON</td>
                    <td>BUDWEISER STAGE</td>
                    <td><Button>BUY TICKETS</Button></td>
                </tr>
                <tr>
                    <td>JUL 22</td>
                    <td>BRISTOW, VA</td>
                    <td>JIGGY LUBE LIVE</td>
                    <td><Button>BUY TICKETS</Button></td>
                </tr>
                <tr>
                    <td>JUL 29</td>
                    <td>PHOENIX, AZ</td>
                    <td>AK-CHIN PAVILION</td>
                    <td><Button>BUY TICKETS</Button></td>
                </tr>
                <tr>
                    <td>AUG 2</td>
                    <td>LAS VEGAS, NV</td>
                    <td>T-MOBILE ARENA</td>
                    <td><Button>BUY TICKETS</Button></td>
                </tr>
                <tr>
                    <td>AUG 7</td>
                    <td>CONCORD, CA</td>
                    <td>CONCORD PAVILION</td>
                    <td><Button>BUY TICKETS</Button></td>
                </tr>
            </tbody>
        </table>
    </Container>
    </>
}

export default Home;