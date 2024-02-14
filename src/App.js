import React, {useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const sortArticlesByVotes = (duplicateData) => {
        return duplicateData.sort((a,b) => (a.upvotes > b.upvotes ? -1 : 1));
    };

    const[data, setData] = useState(sortArticlesByVotes(articles));

    const sortByVotes = () => {
        const duplicateData = [...articles];
        const sortedData = sortArticlesByVotes(duplicateData);
        setData(sortedData);
    };

    const sortByDate = () => {
        const duplicateData = [...articles];
        const sortedData = duplicateData.sort((a,b) => (new Date(a.date) > new Date(b.date)) ? -1 : 1);
        setData(sortedData);
    };

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={()=> sortByVotes()} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={()=> sortByDate()} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={data}/>
        </div>
    );

}

export default App;
