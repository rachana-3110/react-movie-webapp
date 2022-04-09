import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "../public/css/style.css";
import { Row, Col, Layout, Menu } from "antd";
const { Header, Content } = Layout;

const PopularMovie = (props) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getPopularMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;
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
    getPopularMovie();
  }, []);

  return (
    <Layout>
      <Header className="header">
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

      <Content className="site-layout content">
        <div className="site-layout-background content-div">
          <Row gutter={[16, 16]}>
            {movies.map((movie, index) => (
              <Col span={4}>
                <img
                  key={index}
                  src={
                    `http://image.tmdb.org/t/p/${process.env.REACT_APP_SIZE}` +
                    movie.poster_path
                  }
                  alt="movie"
                  onClick={() => movieInfo(movie)}
                ></img>
                <div style={{ fontWeight: "bold" }}>{movie.title}</div>
                <div>{movie.release_date}</div>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default PopularMovie;
