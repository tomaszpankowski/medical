import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import NewsS1 from "../components/news-s1";
import NewsS2 from "../components/news-s2";

class News extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <NewsS1/>
                <NewsS2/>
            </Container>    
        );
    }
}

export default News;