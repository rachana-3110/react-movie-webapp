import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { Row, Col, Layout, Menu } from "antd";
const { Header, Content } = Layout;

const TrendMovie = (props) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getTrendMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results);
  };

  const movieInfo = (movie) => {

    props.movieData(movie);
    navigate("/movieInfo");
  };
  const popularMovie = () => {
    navigate("/");
  };
  const trendingMovie = () => {
    navigate("/trendMoive");
  };

  useEffect(() => {
    getTrendMovie();
  }, []);

  return (
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
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 100, minHeight: 380 }}
        >
          <Row gutter={[16, 16]}>
            {movies.map((movie, index) => (
              <Col span={4}>
                <div>
                  <img
                    key={index}
                    src={
                      `http://image.tmdb.org/t/p/${process.env.REACT_APP_SIZE}` +
                      movie.poster_path
                    }
                    alt="movie"
                    onClick={() => movieInfo(movie)}
                  ></img>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default TrendMovie;
