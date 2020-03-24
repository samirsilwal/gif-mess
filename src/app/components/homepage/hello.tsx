import React, { SyntheticEvent } from "react";
import { Grid } from '@giphy/react-components'
import { GiphyFetch, GifsResult } from '@giphy/js-fetch-api'

interface HomePageProps {
    name: string
}

interface HomePageState {
    searchText:string,
}


export class HomePage extends React.Component<HomePageProps, HomePageState>{
     mygrid:any = <div/> ;

     state: HomePageState = {
        searchText: ""
    }

    onChangeHandler = (val:any) => {
       this.setState({
           searchText: val.target.value
       });  
    }

    onclickHandler = () => {
      const  gf = new GiphyFetch('7gXyWvrcJHP3NZOOTC12I6JpS4l1aDg2');
     const fetchGifs = (offset: number) => gf.search(this.state.searchText, { sort: 'relevant', lang: 'es', limit: offset, type: 'gifs' });
        this.mygrid =  <Grid width={800} columns={3} fetchGifs={() => fetchGifs(2)} />
        this.setState({});

    }
    

   

    render(){
    return <div>
            <h1>Welcome to GIF-mess </h1>
            <br/>
            <label htmlFor="text">Enter the word to search</label>
            <br></br>
            <input type="text" id="text" onChange={this.onChangeHandler} value={this.state.searchText}/>
            <br/>
            <br/>
            <button onClick={this.onclickHandler}>clickMe</button>
            <br/>
            <br/>
            {this.mygrid}
            </div>;
    }
}
