import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Layout, Menu } from "antd";
const { Header, Content } = Layout;

const MovieInfo = (props) => {
  const [movie, setMovies] = useState([]);
  const navigate = useNavigate();
  const id = props.movieData.id;

  const getMovieInfo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson);
  };
  const popularMovie = () => {
    navigate("/");
  };
  const trendingMovie = () => {
    navigate("/trendMoive");
  };
  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" onClick={() => popularMovie()}>
              Popular Movie
            </Menu.Item>
            <Menu.Item key="1" onClick={() => trendingMovie()}>
              Trending Movie
            </Menu.Item>
          </Menu>
        </Header>

        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 20 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 100, minHeight: 380 }}
          >
            <div style={{ backgroundColor: "black" }}>
              <Row
                gutter={[16, 16]}
                style={{ alignItems: "center", marginLeft: "430px" }}
              >
                <Col span={4}>
                  <div>
                    <img
                      src={
                        `http://image.tmdb.org/t/p/${process.env.REACT_APP_SIZE}` +
                        movie.poster_path
                      }
                      alt="movie"
                      style={{ width: "300px", height: "300px" }}
                    ></img>
                    <div
                      style={{
                        color: "white",
                        alignItems: "center",
                        flex: "display",
                        justifyContent: "center",
                        width: "300px",
                        fontSize: "15px",
                      }}
                    >
                      Title: {movie.title} <br></br>
                      Popularity: {movie.popularity}
                      <br></br>
                      Status: {movie.status}
                      <br></br>
                      Release-Date: {movie.release_date}
                      <br></br>
                      Vote-Count: {movie.vote_count}
                      <br></br>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default MovieInfo;
