import logo from './logo.png';
import './App.css';
import { Button, Carousel, Row, Col, ListGroup, Tab, Offcanvas } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Tos from './Tos.js';
import Pp from './Pp.js';
function App() {
  const [buttonSize, setButtonSize] = useState('lg');

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('이용약관');
  const handleClose = () => setShow(false);
  const handleShow = (title) => {
    setTitle(title)
    setShow(true)
  };

  // 웹 폭이 768px 미만일 때
  useEffect(() => {
    if (window.innerWidth < 768) {
      setButtonSize('sm');
    }
  }, []);

  return (
    <div className='main'>
      <div className='background'/>
      <div className="body">
        <div className='container'>
          <div className='header'>
            <div className='m-5'>
              <div className='title text-center'>발로란트 내전봇으로</div>
              <div className='title title-color text-center'>더 간편하게 다함께 즐기자!</div>
            </div>
            <div className='text-center title-buttons'>
              <Button variant="primary p-2 px-3 m-1" size={buttonSize}
                onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=1230732947842138223&permissions=8&integration_type=0&scope=bot+applications.commands")}>
                내 서버에 초대하기
              </Button>
              <Button variant="secondary p-2 px-3 m-1" size={buttonSize}>커뮤니티 서버 입장하기</Button>
            </div>
            <img src={`${process.env.PUBLIC_URL}/arrow.png`} className='arrow'/>
          </div>
        </div>
      </div>
      <div className='body-content'>
        <div className='container'>
          <div className='content'>
            <div className='youtube text-center'>
              <h1 className='youtube-title text-center py-5'>데모 영상</h1>
              <iframe src="https://www.youtube.com/embed/KJWaL7X2tgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className='youtube-content' allowfullscreen></iframe>
            </div>
          </div>
          <hr className='m-0'/>
        </div>
      </div>
      <div className='body-content3'>
        <div className='container my-5'>
          <div className='content'>
            <div className='scrim text-center pb-5'>
              <div className='scrim-title text-center pt-5'>내전 스크림</div>
              <div className='scrim-content text-center pb-5'>
                <div className='pb-5'>발로란트 내전봇을 통해 더 쉽게 내전을 즐기세요!</div>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" className='noto-sans'>
                  <Row>
                    <Col sm={4}>
                      <ListGroup>
                        <ListGroup.Item action href="#link1">
                          파티 생성
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                          참가
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                          파티 채널 선택
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4">
                          시작
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link5">
                          파티 방 생성
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link6">
                          맵 추천
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link7">
                          파티 채널 이동
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link8">
                          파티 채널 원위치
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content className='noto-sans'>
                        <Tab.Pane eventKey="#link1">
                          <img
                            className="d-block pannel mb-3"
                            src={`${process.env.PUBLIC_URL}/party_create.png`}
                            alt="First slide"
                          />
                          '/파티_생성'으로 파티를 생성합니다.
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                          <img
                            className="d-block pannel mb-3"
                            src={`${process.env.PUBLIC_URL}/party_join.png`}
                            alt="First slide"
                          />
                          '참여'버튼 또는 '/파티_참여 [티어]'로 파티에 참여합니다.<br /><br />
                          ※ '참여'버튼은 <span className='fw-bold'>로그인</span> 사용자에게 제공되는 기능입니다.<br />
                          ※ '/파티_참여 [티어]'는 <span className='fw-bold'>비로그인</span> 사용자에게 제공되는 기능입니다.
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                          <img
                            className="d-block pannel mb-3"
                            src={`${process.env.PUBLIC_URL}/party_select_channel.png`}
                            alt="First slide"
                          />
                          음성 채널 2개를 선택합니다.
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4">
                          <div className=''>
                            <img
                              className="d-inline-block"
                              src={`${process.env.PUBLIC_URL}/party_start.png`}
                              alt="First slide"
                            />
                            <img
                              className="d-inline-block mb-3"
                              src={`${process.env.PUBLIC_URL}/party_start2.png`}
                              alt="First slide"
                            />
                          </div>
                          <div>최대 10명의 파티원이 모이면 시작버튼을 눌러 벨런스 매칭을 시작합니다.</div>
                          큰 이미지의 티어는 평균 티어를 의미합니다.
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link5">
                          <img
                            className="d-block pannel"
                            src={`${process.env.PUBLIC_URL}/party_create_room2.png`}
                            alt="First slide"
                            width="100%"
                          />
                          <img
                            className="d-block pannel mb-3"
                            src={`${process.env.PUBLIC_URL}/party_create_room.png`}
                            alt="First slide"
                          />
                          '/파티_방생성'으로 파티 방을 생성하면 자동으로 파티원들이 방에 참여합니다.<br /><br />
                          ※ 발로란트와 발로란트 내전봇에 <span className='fw-bold'>로그인</span>해야 자동 참여가 가능합니다.
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link6">
                          <img
                            className="d-block pannel mb-3"
                            src={`${process.env.PUBLIC_URL}/map.png`}
                            alt="First slide"
                          />
                          맵이 마음에 들지 않을 경우 '/맵_추천'으로 다른 맵을 추천받을 수 있습니다.
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link7">
                          <img
                            className="d-block pannel mb-3"
                            src={`${process.env.PUBLIC_URL}/party_channel_move.png`}
                            alt="First slide"
                          />
                          '/파티_채널_이동'을 입력하면 파티원들이 다른 음성 채널로 이동합니다.
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link8">
                          <img
                            className="d-block pannel mb-3"
                            src={`${process.env.PUBLIC_URL}/party_channel_move2.png`}
                            alt="First slide"
                          />
                          '/파티_채널_원위치'를 입력하면 파티원들이 원래 음성 채널로 이동합니다.
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='body-content2'>
        <div className='container'>
          <hr className='m-0'/>
          <div className='content'>
            <div className='feature'>
              <h1 className='feature-title text-center pt-5'>Feature</h1>
              <div className='feature-content text-center pb-5'>발로란트를 켜지 않아도 확인할 수 있는 기능들!</div>
              <Carousel data-bs-theme="dark" className='feature-carousel'>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={`${process.env.PUBLIC_URL}/store.png`}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={`${process.env.PUBLIC_URL}/point.png`}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={`${process.env.PUBLIC_URL}/mission.png`}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={`${process.env.PUBLIC_URL}/nightmarket.png`}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={`${process.env.PUBLIC_URL}/battlepass.png`}
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className='footer p-5'>
          <Row className='footer-content'>
            <Col className='footer-logo mb-2' xs={12} md={6} lg={2}>
              <img src={logo} className='footer-logo-img'/>
            </Col>
            <Col className='footer-links mb-2' xs={12} md={6} lg={2}>
              <p className='footer-title fw-bold'>링크</p>
              
              <div className='link-secondary link-underline-opacity-0' style={{cursor: "pointer"}} onClick={()=>{handleShow("이용 약관")}}>이용 약관</div>
              <div className='link-secondary link-underline-opacity-0' style={{cursor: "pointer"}} onClick={()=>{handleShow("개인정보 이용 동의서")}}>개인정보 이용 동의서</div>
              <a href='https://discord.com/oauth2/authorize?client_id=1230732947842138223&permissions=8&integration_type=0&scope=bot+applications.commands' className='footer-content link-secondary link-underline-opacity-0'>봇 초대 링크</a><br />
              <a href='' className='footer-content link-secondary link-underline-opacity-0'>커뮤니티 서버</a>
            </Col>
            <Col className='footer-info mb-2' xs={12} md={6} lg={4}>
              <p className='footer-title fw-bold'>정보</p>
              <p className='footer-content'>발로란트 내전봇은 발로란트 내전을<br />더 즐겁게 즐기기 위해 만들어진 디스코드 봇입니다.</p>
            </Col>
            <Col className='footer-bottom mb-2' xs={12} md={6} lg={4}>
              <br />
              <p className='footer-title'>발로란트 내전봇</p>
              <p className='footer-content'>© 2024. MayoneJY All rights reserved.</p>
            </Col>
            </Row>
        </div>
        <Offcanvas show={show} onHide={handleClose} backdrop placement="bottom">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><h2 className='fw-bold'>{title}</h2></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {title === '이용 약관' ? <Tos /> : <Pp />}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
  );
}

export default App;
