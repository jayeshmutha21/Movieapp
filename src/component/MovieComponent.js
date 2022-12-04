import styled from "styled-components";

const MovieContainer= styled.div`
display:flex;
flex-direction:column;
margin:10px;
width:280px;
box-shadow: 0 3px 10px 0 #aaa;
cursor:pointer;
`;
const CoverImg= styled.div`
height:362px;
`;
const MovieName= styled.div`
font-size:18px;
font-weight:600;
color:black;
margin:15px 0;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
color:white;
`;
const Info= styled.div`
display:flex;
flex-direction:column;
text-overflow:ellipsis;
overflow:hidden;
background:#63666A;
color:white;
`;
const MovieInfo= styled.span`
font-size:16px;
font-weight:350;
color:black;
text-transform: capitalize;
text-overflow:ellipsis;
overflow:hidden;
color:white;
`;
const Title= styled.div`
font-size:16px;
color:white;
font-weight:350;
height:100px;
width:97.5%;
text-transform: capitalize;
text-align:left;
word-break:break-word;
overflow:auto;
padding-left: 5px;
`;
const Action = styled.div`
display:flex;
justify-content:center;
width:100%;
color:white;
margin:10px auto;
div{
background-color:#3EB489;
padding: 4px 10px;
border-radius: 5px;
text-transform: uppercase;
}
`;
const MovieComponent= (props)=>{
    const {original_title, overview, vote_average, release_date, backdrop_path}= props.movie;
    return <MovieContainer  >
        <img src={`https://image.tmdb.org/t/p/w342${backdrop_path}`}/>
        
        <Info>
        <MovieName className="padding-5">{original_title} </MovieName>
            <MovieInfo className="padding-5">Ratings:{vote_average} </MovieInfo>
            <MovieInfo className="padding-5">Release date: {release_date}</MovieInfo>
            <Title>{overview} </Title>
            <Action>
                <div>Add To Favourite</div>
            </Action>
        </Info>
        </MovieContainer>;
}
export default MovieComponent