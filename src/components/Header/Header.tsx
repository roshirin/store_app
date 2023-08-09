import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { SearchBar, InfoPanel } from '.';
import './styles/Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Container fluid="lg">
        <Row className="header__content">
          <Col xs={2} className="header__logo logo">
            <Link className="logo__image text-decoration-none" to="/">
              <img src="./images/site-logo.jpg"></img>
              <span className="logo__title">Inventory</span>
            </Link>
          </Col>

          <Col xs={3}>
            <SearchBar />
          </Col>

          <Col className="header__info-panel">
            <InfoPanel />
          </Col>
        </Row>
      </Container>
    </header>
  );
};
