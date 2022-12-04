
import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieComponent from "./component/MovieComponent";
// import movies from "./moviesDtata";

const Container=styled.div`
display:flex;
flex-direction: column;
`;
const Header=styled.div`
display:flex;
flex-direction: row;
background-color: black;
color:white;
padding-bottom:15px;
box-shadow: 0 3px 6px 0 #555;
`;
const SearchBar=styled.div`
display:flex;
flex-direction:row;
border-style:solid;
border-width:thin;
border-color:grey;
margin:20px;
border-radius:4px;
width:25%;
height:35px;
align-item:center;
justify-content:flex-start;
color:black;
`;
const Button=styled.div`
display:flex;
background-color:#3EB489;
width:5%;
border-radius:4px;
height:10px;
margin:20px;
color:white;
margin-left:-20px;
padding: 14px 2px;
justify-content:center;
align-items:center;
`;
const Search=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
flex-wrap:wrap;
`;
const Movielist= styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
padding: 30px;
justify-content:space-evenly;
`;
const SearchInput= styled.div`
display:flex;
flex-direction:row;
margin:7px;
input{
  width:100%;
  height: 100%;
  border: none;
  outline: none;
}
`;
function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(()=>{
    console.log('Helloo');
  },[])

  useEffect(()=>{
    console.log(searchText);
  },[searchText])

  const getMovies = () => {
      let url; 
      if (searchText) {
         url = `https://api.themoviedb.org/3/search/movie?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&page=1&include_adult=false&query=${searchText}`;
       }else{
        url = "https://api.themoviedb.org/3/movie/top_rated?api_key=cc31d08b0d4b5b3539a406e5af2aec1f&language=en-US&page=1";
       }
      fetch(url).then(async(response)=>{
        const data = await response.json();
        console.log('Data::', data);
        setMovies(data.results);
      });
  }

  // console.log(movies);
  return (
    <Container>
      <Header>Movie Heist</Header>
     <Search>
     <SearchBar>
     <SearchInput>
      <input placeholder="Search Movie" onChange={(event)=>{
        setSearchText(event.target.value);
      }}/>
      </SearchInput>
      </SearchBar>
      <Button onClick={getMovies}> Search </Button>
      </Search>
     
      <Movielist>
      {movies.map((movie)=>{
        return <MovieComponent movie={movie}/>
      })}
       
      </Movielist>
    </Container>
  );
}

export default App;
